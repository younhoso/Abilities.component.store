'use client';

import { ClientSafeProvider, signIn } from 'next-auth/react';

import clsx from 'clsx';

import { SigninStyled } from './styled';

type SigninProps = {
  providers: { [key: string]: ClientSafeProvider };
  callbackUrl: string;
};

export default function Signin({ providers, callbackUrl }: SigninProps) {
  console.log(providers);
  return (
    <SigninStyled className={clsx('Signin')}>
      {Object.values(providers).map(({ id, name }) => (
        <div key={name} className={clsx('item')}>
          <button onClick={() => signIn(id, { callbackUrl })}>Sign in with {name}</button>
        </div>
      ))}
    </SigninStyled>
  );
}
