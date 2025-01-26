import { useEffect, useState } from 'react';

import { useRecoilStateLoadable, useRecoilValueLoadable } from 'recoil';

import { signIn, signOut } from '@/libs/customNextAuth';
import { isSignInSelector } from '@/stores/isSignIn';

export const useHandleIsSignIn = () => {
  const { contents: isSignInContents, state } = useRecoilValueLoadable(isSignInSelector);
  const [_, setIsSignIn] = useRecoilStateLoadable(isSignInSelector);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(state === 'loading');
  }, [state]);

  return { isSignIn: isSignInContents === true, setIsSignIn, isLoading, signIn, signOut };
};
