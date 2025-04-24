import { Check } from 'iconoir-react';

import { cx } from '@/utils/cx';

import { CheckBoxStyled, CustomCheckBox, HiddenCheckBox, Label } from './styled';

interface Props {
  label?: string;
  className?: string;
  checked?: boolean;
  disabled?: boolean;
  onChange?: (checked: boolean) => void;
}

const BaseCheckBox = ({ label, className, checked, disabled = false, onChange }: Props) => {
  // 상태 변경 함수 (onChange가 없으면 부모에서 상태를 관리할 수 없음)
  const handleChange = () => {
    if (onChange) {
      onChange(!checked); // 상태 변경 시 부모의 onChange 호출
    }
  };

  const checkboxId = 'checkbox-' + Math.random().toString(36).slice(2, 11); // 동적으로 고유한 ID 생성

  return (
    <CheckBoxStyled className={cx('')}>
      <HiddenCheckBox
        id={checkboxId}
        type="checkbox"
        checked={checked} // 그룹 상태 또는 자체 상태 사용
        disabled={disabled}
        onChange={handleChange}
      />
      <CustomCheckBox
        className={cx('custom', `custom-${className}`)}
        checked={checked} // 그룹 상태 또는 자체 상태 사용
        disabled={disabled}
        onClick={handleChange}
      >
        {checked && <Check />}
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

const CheckBox = Object.assign(BaseCheckBox, {});

export default CheckBox;
