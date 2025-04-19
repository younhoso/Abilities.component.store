'use client';

import { useState } from 'react';
import React from 'react';

import { cx } from '@/utils/cx';

import CheckBoxGroupItem from './CheckBoxGroupItem';
import CheckBoxItem from './CheckBoxItem';
import { CheckBoxGroupStyled } from './styled';

interface Props extends PropsWithChildren {
  title?: string;
  isGroupControlled?: boolean; // 그룹 상태를 관리할지 여부를 결정
}

const BaseCheckBoxGroupItems = ({ title, isGroupControlled = true, children }: Props) => {
  const [isChecked, setIsChecked] = useState(false);

  // 상태 변경 함수
  const handleCheckChange = (checked: boolean) => {
    if (isGroupControlled) {
      setIsChecked(checked); // 그룹 상태 관리
    }
  };

  return (
    <CheckBoxGroupStyled className={cx('checkBoxGroup')}>
      <span>{title}</span>
      {React.Children.map(children, child => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child as React.ReactElement, {
            isGroupControlled: isGroupControlled,
            checked: isGroupControlled ? isChecked : null, // 그룹 상태 전달
            onChange: handleCheckChange, // 상태 변경 함수 전달
          });
        }
      })}
    </CheckBoxGroupStyled>
  );
};

export const CheckBoxGroup = Object.assign(BaseCheckBoxGroupItems, {
  CheckBoxGroupItem,
  CheckBoxItem,
});

export { CheckBoxGroupItem, CheckBoxItem };
