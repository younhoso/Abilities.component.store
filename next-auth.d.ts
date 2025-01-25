import NextAuth, { DefaultSession, User } from 'next-auth';

type ExtendedProps = {
  type: 'member' | 'guest';
  accessToken?: string;
  user?: {
    id?: string;
  } & DefaultSession['user'];
  expires: User.expires;
  refreshTokenInfo?: {
    token: User.refreshTokenInfo.token;
    expiresAt: User.refreshTokenInfo.expiresAt;
  };
};

declare module 'next-auth' {
  interface Session extends ExtendedProps {}
}

declare module 'next-auth/jwt' {
  interface JWT extends ExtendedProps {}
}

declare module 'next-auth' {
  interface User extends ExtendedProps {}
}
