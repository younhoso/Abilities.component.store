'use client';

import { createContext, useContext } from 'react';

type ToggleContextType = {
  type: 'single' | 'multiple';
  selectedValues: string[];
  toggleValue: (value: string) => void;
};

export const ToggleContext = createContext<ToggleContextType | null>(null);

export const useToggleContext = () => {
  const context = useContext(ToggleContext);
  if (!context) {
    throw new Error('useToggleContext는 ToggleContext.Provider 내에서 사용해야 합니다.');
  }
  return context;
};
