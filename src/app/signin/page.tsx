'use client';

import { useEffect } from 'react';

import Link from 'next/link';

import { useHandleIsSignIn } from '@/hooks/useHandleIsSignIn';
import { SignInPageStyled } from '@/styles/pageStyled/SigninUserPageStyled';

export default function SigninPage() {
  const { isSignIn, signOut } = useHandleIsSignIn();

  useEffect(() => {
    if (!isSignIn) {
      return;
    }
  }, [isSignIn]);

  if (isSignIn) {
    return <div onClick={() => signOut()}>로그아웃</div>;
  }

  return (
    <SignInPageStyled>
      <Link href={'/auth/signin'}>Log in</Link>
    </SignInPageStyled>
  );
}
