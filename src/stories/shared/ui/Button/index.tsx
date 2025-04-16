import { cx } from '@/utils/cx';

import { ButtonStyled } from './styled';

interface ButtonProps extends PropsWithChildren {
  mode: 'primary' | 'secondary' | 'disabled';
  className?: string;
  children: string;
}

const BaseButton = ({ mode = 'secondary', className, children }: ButtonProps) => {
  return (
    <ButtonStyled className={cx('Button', className)}>
      {mode === 'disabled' && (
        <button className="disabled" disabled={mode === 'disabled' ? true : false}>
          {children}
        </button>
      )}
      {mode === 'secondary' && <button className="secondary">{children}</button>}
      {mode === 'primary' && <button className="primary">{children}</button>}
    </ButtonStyled>
  );
};

export const Button = Object.assign(BaseButton, {});
