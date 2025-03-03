import { ReactNode } from 'react';

import clsx from 'clsx';

import { CardFooterStyled } from './styled';

export default function CardFooter({ children }: { children: ReactNode }) {
  return <CardFooterStyled className={clsx('CardFooter')}>{children}</CardFooterStyled>;
}
