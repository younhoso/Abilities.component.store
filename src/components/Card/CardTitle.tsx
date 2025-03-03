import { ReactNode } from 'react';

import clsx from 'clsx';

import { CardTitleStyled } from './styled';

type CardTitleProps = {
  className?: string;
  children: ReactNode;
};

export default function CardTitle({ className, children }: CardTitleProps) {
  return <CardTitleStyled className={clsx('cardTitle', className)}>{children}</CardTitleStyled>;
}
