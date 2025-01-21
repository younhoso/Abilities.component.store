import { ReactNode } from 'react';

import clsx from 'clsx';

import { ButtonInnerStyled } from './styled';

type ButtonInnerProps = {
  children: ReactNode;
};

export default function ButtonInner({ children }: ButtonInnerProps) {
  return <ButtonInnerStyled className={clsx('ButtonInner')}>{children}</ButtonInnerStyled>;
}
