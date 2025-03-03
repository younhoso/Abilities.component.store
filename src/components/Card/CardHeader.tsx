import { ReactNode } from 'react';

import clsx from 'clsx';

import { CardHeaderStyled } from './styled';

type CardHeaderProps = {
  className?: string;
  children: ReactNode;
};

export default function CardHeader({ className, children }: CardHeaderProps) {
  return <CardHeaderStyled className={clsx('cardHeader', className)}>{children}</CardHeaderStyled>;
}
