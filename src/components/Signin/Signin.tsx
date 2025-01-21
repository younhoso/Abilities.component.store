'use client';

import { ClientSafeProvider, signIn } from 'next-auth/react';

import clsx from 'clsx';

import { SigninStyled } from './styled';

type SigninProps = {
  providers: Record<string, ClientSafeProvider>;
  callbackUrl: string;
};

export default function Signin({ providers, callbackUrl }: SigninProps) {
  return (
    <SigninStyled className={clsx('Signin')}>
      {Object.values(providers).map(({ id, name }) => (
        <div key={name}>
          <button onClick={() => signIn(id, { callbackUrl })}>Sign in with {name}</button>
        </div>
      ))}
    </SigninStyled>
  );
}
