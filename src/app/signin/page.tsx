'use client';

import Link from 'next/link';

import { useHandleIsSignIn } from '@/hooks/useHandleIsSignIn';
import { SignInPageStyled } from '@/styles/pageStyled/SigninUserPageStyled';

export default function SigninPage() {
  const { isSignIn, signOut } = useHandleIsSignIn();

  if (isSignIn) {
    return <div onClick={() => signOut()}>로그아웃</div>;
  }

  return (
    <SignInPageStyled>
      <Link href={'/auth/signin'}>Log in</Link>
    </SignInPageStyled>
  );
}
