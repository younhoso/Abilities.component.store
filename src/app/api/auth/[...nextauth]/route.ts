import NextAuth, { Account, NextAuthOptions, Session, User } from 'next-auth';
import { JWT } from 'next-auth/jwt';
import GoogleProvider from 'next-auth/providers/google';
import KakaoProvider from 'next-auth/providers/kakao';
import NaverProvider from 'next-auth/providers/naver';

const MEMBER = 'member';
const GOOGLE = 'google';
const KAKAO = 'kakao';
const NAVER = 'naver';
const REFRESH_ACCESS_TOKEN = 'refresh';

const allProviders = [MEMBER, GOOGLE, KAKAO, NAVER, REFRESH_ACCESS_TOKEN];

const authOptions: NextAuthOptions = {
  pages: {
    signIn: '/auth/signin', // 인증되지 않은 사용자는 이 페이지로 이동
    signOut: '/auth/signout',
  },
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_OAUTH_ID!,
      clientSecret: process.env.GOOGLE_OAUTH_SECRET!,
    }),
    KakaoProvider({
      clientId: process.env.KAKAO_CLIENT_ID!,
      clientSecret: process.env.KAKAO_CLIENT_SECRET!,
    }),
    NaverProvider({
      clientId: process.env.NAVER_CLIENT_ID!,
      clientSecret: process.env.NAVER_CLIENT_SECRET!,
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET!,
  callbacks: {
    async jwt({ token, account, user }: { token: JWT; user: User; account: Account | null }) {
      if (account?.provider && allProviders.includes(account?.provider)) {
        token.accessToken = account.access_token;

        token.refreshTokenInfo = {
          token: account.refresh_token,
          expiresAt: account.expires_at,
        };
      }
      return {
        ...token,
        ...user,
      };
    },
    async session({ session, token }: { session: Session; token: JWT }): Promise<Session> {
      return { ...session, ...token };
    },
  },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
