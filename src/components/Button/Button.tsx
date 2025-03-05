import clsx from 'clsx';

import { ButtonStyled } from './styled';

type ButtonProps = {
  mode: 'primary' | 'secondary' | 'disabled';
  disabledBgColor?: string;
  className?: string;
  children: string;
};

export default function Button({
  mode = 'secondary',
  disabledBgColor,
  className,
  children,
}: ButtonProps) {
  return (
    <ButtonStyled className={clsx('Button', className)}>
      {mode === 'disabled' && (
        <button
          className="disabled"
          disabled={mode === 'disabled' ? true : false}
          style={{ backgroundColor: disabledBgColor || '#ccc' }}
        >
          {children}
        </button>
      )}
      {mode === 'secondary' && <button className="secondary">{children}</button>}
      {mode === 'primary' && <button className="primary">{children}</button>}
    </ButtonStyled>
  );
}
