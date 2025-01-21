'use client';

import React, { ReactNode } from 'react';

import clsx from 'clsx';

import { RadioContext } from './RedioContext';
import { RadioStyled } from './styled';

type RadioGroupProps = {
  label: string;
  value: string;
  defaultChecked?: boolean;
  disabled?: boolean;
  onChange: (value: string) => void;
  children: ReactNode;
};

function RadioGroup({ label, value, onChange, disabled, children }: RadioGroupProps) {
  console.log('RadioGroup');
  const contextValue = React.useMemo(
    () => ({ value, onChange, disabled }),
    [value, onChange, disabled],
  );

  return (
    <RadioStyled className={clsx('RadioGroup')}>
      <legend>{label}</legend>
      <RadioContext.Provider value={contextValue}>{children}</RadioContext.Provider>
    </RadioStyled>
  );
}

export default React.memo(RadioGroup, (prevProps, nextProps) => {
  // props가 동일하면 리렌더링 방지
  return prevProps?.value === nextProps?.value && prevProps.onChange === nextProps.onChange;
});
