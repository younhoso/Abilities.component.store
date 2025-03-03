import { ReactNode } from 'react';

import clsx from 'clsx';

import { CardFooterStyled } from './styled';

type CardFooterProps = {
  className?: string;
  children: ReactNode;
};

export default function CardFooter({ className, children }: CardFooterProps) {
  return <CardFooterStyled className={clsx('cardFooter', className)}>{children}</CardFooterStyled>;
}
