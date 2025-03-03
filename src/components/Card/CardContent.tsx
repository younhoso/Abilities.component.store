import { ReactNode } from 'react';

import clsx from 'clsx';

import { CardContentStyled } from './styled';

type CardContentProps = {
  className?: string;
  children: ReactNode;
};

export default function CardContent({ className, children }: CardContentProps) {
  return (
    <CardContentStyled className={clsx('cardContent', className)}>{children}</CardContentStyled>
  );
}
