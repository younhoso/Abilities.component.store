'use client';

import React, { ReactNode, useEffect, useState } from 'react';

import clsx from 'clsx';

import { ToggleContext } from './ToggleContext';
import { ToggleGroupStyled } from './styled';

type ToggleGroupProps = {
  type?: 'single' | 'multiple';
  defaultChecked?: string;
  children: ReactNode;
};

export default function ToggleGroup({
  type = 'single',
  defaultChecked = '',
  children,
}: ToggleGroupProps) {
  const [selectedValues, setSelectedValues] = useState<string[]>([]);

  const toggleValue = (value: string) => {
    if (type === 'single') {
      // 단일 선택
      setSelectedValues([value]);
    } else if (type === 'multiple') {
      // 멀티 선택
      setSelectedValues(prev => {
        const isAlreadySelected = prev.includes(value);
        if (isAlreadySelected) {
          // 선택 해제
          return prev.filter(v => v !== value);
        } else {
          // 선택 추가
          return [...prev, value];
        }
      });
    }
  };

  const contextValue = {
    type,
    selectedValues,
    toggleValue,
  };

  useEffect(() => {
    if (defaultChecked) {
      setSelectedValues([defaultChecked]); // 첫 번째 자식의 defaultChecked 값으로 설정
    }
  }, [defaultChecked]);

  return (
    <ToggleContext.Provider value={contextValue}>
      <ToggleGroupStyled className={clsx('toggleGroup')}>{children}</ToggleGroupStyled>
    </ToggleContext.Provider>
  );
}
