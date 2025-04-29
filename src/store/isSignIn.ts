import { atom, selector } from 'recoil';

import { getCachedSession } from '@/libs/customNextAuth';

const ATOM_KEY = 'isSignInStore';
const ATOM_SELECTOR_KEY = 'isSignInSelector';

export const isSignInStore = atom<boolean | null>({
  key: ATOM_KEY,
  default: null,
});

export const isSignInSelector = selector({
  key: ATOM_SELECTOR_KEY,
  get: async ({ get }) => {
    const isSignIn = get(isSignInStore);
    if (isSignIn === null) {
      const session = await getCachedSession();

      return !!session;
    }
    return isSignIn;
  },
  set: ({ set }, value) => {
    return set(isSignInStore, value);
  },
});
