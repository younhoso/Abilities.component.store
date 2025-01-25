import { getSession, signIn } from 'next-auth/react';

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
    console.log('Refreshsession:', session);

    if (!session?.refreshTokenInfo) {
      return null;
    }

    if (new Date(session.refreshTokenInfo.expiresAt) < new Date()) {
      return null;
    }

    const res = await signIn('refresh', {
      refreshToken: session?.refreshTokenInfo?.token,
      redirect: false,
    });

    console.log('res:', res);

    if (!res?.ok) {
      return null;
    }

    session = await getSession();

    return session;
  },
  { maxAge: 10000 },
);
