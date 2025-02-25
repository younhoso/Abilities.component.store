import { ReactNode } from 'react';

import clsx from 'clsx';

import { TabsBodyStyled } from './styled';

type TabsBodyProps = {
  className?: string;
  children: ReactNode[];
};

export default function TabsBody({ className, children }: TabsBodyProps) {
  return <TabsBodyStyled className={clsx('tabsBody', className)}>{children}</TabsBodyStyled>;
}
