import { ReactNode } from 'react';

import clsx from 'clsx';

import { CardStyled } from './styled';

type CardProps = {
  className?: string;
  children: ReactNode;
};

export default function Card({ className, children }: CardProps) {
  return <CardStyled className={clsx('cardWrap', className)}>{children}</CardStyled>;
}
