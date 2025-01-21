import { createContext } from 'react';

type RadioContextType = {
  defaultChecked?: boolean;
  disabled?: boolean;
  value?: string;
  onChange?: (value: string) => void;
};

// 컨텍스트의 기본값 설정. 필요한 경우 기본값을 조정하세요.
const defaultContextValue: RadioContextType = {
  value: '',
  onChange: (value: string) => {},
  defaultChecked: false,
  disabled: false,
};

export const RadioContext = createContext<RadioContextType>(defaultContextValue);
