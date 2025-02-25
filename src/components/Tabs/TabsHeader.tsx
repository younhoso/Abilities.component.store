import { ReactNode } from 'react';

import clsx from 'clsx';

import { TabsHeaderStyled } from './styled';

type TabsHeaderProps = {
  className?: string;
  children: ReactNode[];
};

export default function TabsHeader({ className, children }: TabsHeaderProps) {
  return <TabsHeaderStyled className={clsx('tabsHeader', className)}>{children}</TabsHeaderStyled>;
}
