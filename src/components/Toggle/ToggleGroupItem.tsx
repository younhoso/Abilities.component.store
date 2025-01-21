'use client';

import { ReactNode } from 'react';

import clsx from 'clsx';

import { useToggleContext } from './ToggleContext';
import { ToggleGroupItemStyled } from './styled';

type ToggleGroupItemProps = {
  label: string; // 접근성을 위한 라벨
  children: ReactNode; // 자식 요소
};

export default function ToggleGroupItem({ label, children }: ToggleGroupItemProps) {
  const { selectedValues, toggleValue } = useToggleContext();
  const selected = selectedValues.includes(label);

  return (
    <ToggleGroupItemStyled
      role="button"
      aria-label={label}
      aria-pressed={selected} // 선택 상태를 접근성 속성으로 노출
      onClick={() => toggleValue(label)} // 클릭 시 토글 동작 수행
      className={clsx('ToggleGroupItem', selected ? 'on' : 'off')}
    >
      {children}
    </ToggleGroupItemStyled>
  );
}
