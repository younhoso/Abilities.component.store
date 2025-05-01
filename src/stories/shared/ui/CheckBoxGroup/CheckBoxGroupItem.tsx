'use client';

import { PropsWithChildren, useEffect, useState } from 'react';

import { cx } from '@/utils/cx';

import { CheckBoxStyled, CustomCheckBox, HiddenCheckBox, Label } from './styled';

interface Props extends PropsWithChildren {
  label?: string;
  className?: string;
  checked?: boolean;
  disabled?: boolean;
  defaultChecked?: boolean;
  isGroupControlled?: boolean;
  onChange?: (checked: boolean) => void;
}

const CheckBoxGroupItem = ({
  label,
  className,
  checked,
  disabled = false,
  isGroupControlled = true,
  onChange,
}: Props) => {
  const [isChecked, setIsChecked] = useState(false);

  // 상태 변경 함수 (onChange가 없으면 부모에서 상태를 관리할 수 없음)
  const handleChange = () => {
    setIsChecked(!isChecked);
    if (onChange) {
      onChange(!checked); // 상태 변경 시 부모의 onChange 호출
    }
  };

  // 그룹 상태에서 제어하는 경우 (isGroupControlled)
  useEffect(() => {
    if (onChange && checked !== undefined) {
      onChange(checked); // 부모 상태에 맞게 동기화
    }
  }, [checked, onChange]);

  const checkboxId = 'checkbox-' + Math.random().toString(36).slice(2, 11); // 동적으로 고유한 ID 생성

  // CheckBoxGroup이 있을 때는 부모에서 관리하는 checked 사용, 없을 때는 자체 상태 관리
  const currentChecked = isGroupControlled ? checked : isChecked;

  return (
    <CheckBoxStyled className={cx('checkbox-container', className)}>
      <HiddenCheckBox
        id={checkboxId}
        type="checkbox"
        checked={currentChecked} // 그룹 상태 또는 자체 상태 사용
        disabled={disabled}
        onChange={handleChange}
      />
      <CustomCheckBox
        className={cx('custom', `custom-${className}`)}
        checked={currentChecked} // 그룹 상태 또는 자체 상태 사용
        disabled={disabled}
        onClick={handleChange}
      >
        <svg viewBox="0 0 17 18" aria-hidden="true" role="presentation">
          <polyline points="1 9 7 14 15 4" />
        </svg>
      </CustomCheckBox>

      {label && (
        <Label
          htmlFor={checkboxId}
          className={cx('label', `label-${className}`)}
          disabled={disabled}
        >
          {label}
        </Label>
      )}
    </CheckBoxStyled>
  );
};

export default CheckBoxGroupItem;
