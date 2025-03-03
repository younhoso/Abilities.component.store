import { ReactNode } from 'react';

import clsx from 'clsx';

import { CardHeaderStyled } from './styled';

export default function CardHeader({ children }: { children: ReactNode }) {
  return <CardHeaderStyled className={clsx('cardHeader')}>{children}</CardHeaderStyled>;
}
