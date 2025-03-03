import { ReactNode } from 'react';

import clsx from 'clsx';

import { CardTitleStyled } from './styled';

export default function CardTitle({ children }: { children: ReactNode }) {
  return <CardTitleStyled className={clsx('cardTitle')}>{children}</CardTitleStyled>;
}
