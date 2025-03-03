import { ReactNode } from 'react';

import clsx from 'clsx';

import { CardContentStyled } from './styled';

export default function CardContent({ children }: { children: ReactNode }) {
  return <CardContentStyled className={clsx('cardContent')}>{children}</CardContentStyled>;
}
