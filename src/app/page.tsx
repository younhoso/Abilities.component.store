'use client';

import { signIn, signOut, useSession } from 'next-auth/react';

import { HomePageStyled } from '@/styles/pageStyled/HomePageStyled';

export default function HomePage() {
  const { data: session } = useSession();

  if (session) {
    return <div onClick={() => signOut()}>로그아웃</div>;
  }

  return (
    <HomePageStyled>
      <div onClick={() => signIn()}>메인 로그인</div>
    </HomePageStyled>
  );
}
