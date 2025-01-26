import { getSession, signIn, signOut } from 'next-auth/react';

import { Session } from 'next-auth';

import memoize from 'memoize';

export const getCachedSession: () => Promise<Session | null> = memoize(
  async () => {
    const session = await getSession();

    if (session?.type === 'guest') {
      return session;
    }

    if (session?.accessToken) {
      return await getRefreshSession();
    }

    return session;
  },

  { maxAge: 1000 },
);

export const getRefreshSession = memoize(
  async () => {
    let session: Session | null = await getSession();

    if (!session?.refreshTokenInfo) {
      return null;
    }

    // 리프레시 토큰이 만료되었는지 확인
    if (new Date(session.refreshTokenInfo.expiresAt * 1000) < new Date()) {
      return null; // 토큰 만료 시 리프레시 중단
    }

    // 리프레시 토큰(refresh token)을 사용해 새로운 액세스 토큰(access token)을 요청하고 세션을 갱신
    // const res = await signIn('refresh', {
    //   refreshToken: session?.refreshTokenInfo?.token,
    //   redirect: false,
    // });

    // if (!res?.ok) {
    //   console.error('Refresh token failed:', res?.error);
    //   return null;
    // }

    session = await getSession();
    return session;
  },

  { maxAge: 10000 },
);

export { signIn, signOut };
