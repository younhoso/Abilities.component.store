import { createContext, useContext } from 'react';

export interface SelectContextProps {
  value: string;
  open: boolean;
  setOpen: (val: boolean) => void;
  onValueChange: (val: string) => void;
}

export const SelectContext = createContext<SelectContextProps | null>(null);

export function useSelectContext() {
  const context = useContext(SelectContext);
  if (!context) throw new Error('<Select> 내에서 선택된 복합 구성요소를 사용해야 합니다.');
  return context;
}
