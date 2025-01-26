'use client';

import { signOut } from 'next-auth/react';

import Link from 'next/link';

import { useHandleIsSignIn } from '@/hooks/useHandleIsSignIn';
import { HomePageStyled } from '@/styles/pageStyled/HomePageStyled';

export default function HomePage() {
  const { isSignIn } = useHandleIsSignIn();

  if (isSignIn) {
    return <div onClick={() => signOut()}>로그아웃</div>;
  }

  return (
    <HomePageStyled>
      <Link href={'/auth/signin'}>로그인 하기</Link>
    </HomePageStyled>
  );
}
