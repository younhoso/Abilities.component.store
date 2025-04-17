import { ReactNode } from 'react';

import { cx } from '@/utils/cx';

import ButtonItem from './ButtonItem';
import { ButtonStyled } from './styled';

interface Props extends PropsWithChildren {
  className?: string;
  children: ReactNode;
}

const BaseButton = ({ className, children }: Props) => {
  return <ButtonStyled className={cx(className)}>{children}</ButtonStyled>;
};

export const Button = Object.assign(BaseButton, {
  ButtonItem,
});

export { ButtonItem };
