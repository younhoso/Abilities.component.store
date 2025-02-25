'use client';

import { ClientSafeProvider, signIn } from 'next-auth/react';

import Image from 'next/image';

import clsx from 'clsx';

import googleIcon from '@/assets/imgs/icons/google.svg';
import kakaoIcon from '@/assets/imgs/icons/kakao.svg';
import naverIcon from '@/assets/imgs/icons/naver.svg';

import { SigninStyled } from './styled';

type SigninProps = {
  providers: { [key: string]: ClientSafeProvider };
  callbackUrl: string;
};

const icons = {
  google: googleIcon,
  kakao: kakaoIcon,
  naver: naverIcon,
} as const;

// 런타임때 id가 'google' | 'kakao' | 'naver' 중 하나인지 판별하는 역할하는 함수
function isValidProviderId(id: string): id is keyof typeof icons {
  return id in icons;
}

export default function Signin({ providers, callbackUrl }: SigninProps) {
  return (
    <SigninStyled className={clsx('Signin')}>
      <p className="loginText">SNS 로그인</p>
      {Object.values(providers).map(({ id, name }) => {
        return (
          <div
            key={name}
            className={clsx(`item ${id}`)}
            onClick={() => signIn(id, { callbackUrl })}
          >
            {/* SVG 로고 렌더링 */}
            {isValidProviderId(id) && (
              <Image
                src={icons[id]}
                alt={`${name} logo`}
                width={24}
                height={24}
                className="provider-logo"
              />
            )}
            <button>Sign in with {name}</button>
          </div>
        );
      })}
    </SigninStyled>
  );
}
