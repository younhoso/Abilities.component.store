import React, { ChangeEvent, InputHTMLAttributes, useId } from 'react';

import clsx from 'clsx';

import { InputFieldStyled } from './styled';

type InputFieldProps = {
  label: string;
  inputProps?: InputHTMLAttributes<HTMLInputElement>;
  onChange: (v: string) => void;
};

function InputField({ label, inputProps, onChange }: InputFieldProps) {
  console.log('InputField');
  const id = useId();

  return (
    <InputFieldStyled className={clsx('InputField')}>
      <label htmlFor={`${id}-${label}`}>{label}</label>
      <input
        id={`${id}-${label}`}
        {...inputProps}
        onChange={(e: ChangeEvent<HTMLInputElement>) => onChange(e.target.value)}
      />
    </InputFieldStyled>
  );
}

export default React.memo(InputField, (prevProps, nextProps) => {
  // props가 동일하면 리렌더링 방지
  return (
    prevProps.inputProps?.value === nextProps.inputProps?.value &&
    prevProps.onChange === nextProps.onChange
  );
});
