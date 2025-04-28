import { ReactNode } from 'react';

import { cx } from '@/utils/cx';

import ButtonItem from './ButtonItem';
import { ButtonStyled } from './styled';

export const ICON_SIZE = {
  sm: 16,
  md: 24,
  lg: 32,
} as const;

export type IconSize = keyof typeof ICON_SIZE;

interface Props extends PropsWithChildren {
  className?: string;
  children: ReactNode;
}

const BaseButton = ({ className, children }: Props) => {
  return <ButtonStyled className={cx(className)}>{children}</ButtonStyled>;
};

const Button = Object.assign(BaseButton, {
  ButtonItem,
});

export { ButtonItem };

export default Button;
