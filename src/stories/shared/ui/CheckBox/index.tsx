'use client';

import { useState } from 'react';
import React from 'react';

import { cx } from '@/utils/cx';

import { CheckBoxProps } from '../../types/CheckBox';
import CheckBoxItem from './CheckBoxItem';
import { CheckBoxGroupStyled } from './styled';

const BaseCheckBoxItems = ({ isGroupControlled = false, children }: CheckBoxProps) => {
  const [isChecked, setIsChecked] = useState(false);

  // 상태 변경 함수
  const handleCheckChange = (checked: boolean) => {
    if (isGroupControlled) {
      setIsChecked(checked); // 그룹 상태 관리
    }
  };

  return (
    <CheckBoxGroupStyled className={cx('checkBoxGroup')}>
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

BaseCheckBoxItems.displayName = 'CheckBox';

const CheckBox = Object.assign(BaseCheckBoxItems, {
  CheckBoxItem,
});

export { CheckBoxItem };

export default CheckBox;
