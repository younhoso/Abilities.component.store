import { withAuth } from 'next-auth/middleware';
import { NextRequest, NextResponse } from 'next/server';

export default withAuth(
  function middleware(req: NextRequest) {
    const url = req.nextUrl.clone();
    return NextResponse.next();
  },
  {
    pages: {
      signIn: '/auth/signin', // 인증되지 않은 사용자는 이 페이지로 이동
    },
  },
);

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};
