import { ReactNode } from 'react';

import clsx from 'clsx';

import { CardDescriptionStyled } from './styled';

export default function CardDescription({ children }: { children: ReactNode }) {
  return (
    <CardDescriptionStyled className={clsx('cardDescription')}>{children}</CardDescriptionStyled>
  );
}
