import { ReactNode } from 'react';

import { cx } from '@/utils/cx';

import { ButtonItemStyled } from './styled';

interface Props {
  mode: 'primary' | 'secondary' | 'disabled';
  className?: string;
  children: ReactNode;
}

const ButtonItem = ({ mode = 'secondary', className, children }: Props) => {
  return (
    <ButtonItemStyled className={cx(className)}>
      {mode === 'disabled' && (
        <button className="disabled" disabled={mode === 'disabled' ? true : false}>
          {children}
        </button>
      )}
      {mode === 'secondary' && <button className="secondary">{children}</button>}
      {mode === 'primary' && <button className="primary">{children}</button>}
    </ButtonItemStyled>
  );
};

export default ButtonItem;
