import { ReactNode } from 'react';

import clsx from 'clsx';

import { CardDescriptionStyled } from './styled';

type CardDescriptionProps = {
  className?: string;
  children: ReactNode;
};

export default function CardDescription({ className, children }: CardDescriptionProps) {
  return (
    <CardDescriptionStyled className={clsx('cardDescription', className)}>
      {children}
    </CardDescriptionStyled>
  );
}
