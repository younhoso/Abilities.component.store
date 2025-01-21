'use client';

import React from 'react';
import { ChangeEvent, ReactNode, useContext, useId } from 'react';

import clsx from 'clsx';

import { RadioContext } from './RedioContext';
import { RadioStyled } from './styled';

type RadioProps = {
  value: string;
  disabled?: boolean;
  children: ReactNode;
};

function Radio({ value, disabled = false, children }: RadioProps) {
  const id = useId();
  const group = useContext(RadioContext);

  return (
    <RadioStyled className={clsx('Radio')}>
      <input
        id={`${id}-${value}`}
        type="radio"
        value={value}
        disabled={disabled || group.disabled}
        checked={value === group.value}
        onChange={(e: ChangeEvent<HTMLInputElement>) => {
          if (group.onChange) {
            group.onChange(e.target.value);
          }
        }}
      />
      <label htmlFor={`${id}-${value}`}>{children}</label>
    </RadioStyled>
  );
}

export default React.memo(Radio);
