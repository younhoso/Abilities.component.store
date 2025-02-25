'use client';

import { ReactNode } from 'react';

import clsx from 'clsx';

import { TabsGroupStyled } from './styled';

type TabsGroupProps = {
  className?: string;
  children: ReactNode[];
};

export default function TabsGroup({ className, children }: TabsGroupProps) {
  return <TabsGroupStyled className={clsx('tabsGroup', className)}>{children}</TabsGroupStyled>;
}
