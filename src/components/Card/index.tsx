import { ReactNode } from 'react';

import clsx from 'clsx';

import { CardStyled } from './styled';

export default function Card({ children }: { children: ReactNode }) {
  return <CardStyled className={clsx('Card')}>{children}</CardStyled>;
}
