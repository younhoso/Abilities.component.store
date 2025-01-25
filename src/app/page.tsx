'use client';

import { signIn, signOut } from 'next-auth/react';

import { useHandleIsSignIn } from '@/hooks/useHandleIsSignIn';
import { HomePageStyled } from '@/styles/pageStyled/HomePageStyled';

export default function HomePage() {
  const { isSignIn } = useHandleIsSignIn();

  if (isSignIn) {
    return <div onClick={() => signOut()}>로그아웃</div>;
  }

  return (
    <HomePageStyled>
      <div onClick={() => signIn()}>메인 로그인</div>
    </HomePageStyled>
  );
}
