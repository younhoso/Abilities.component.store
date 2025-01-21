'use client';

import { ReactNode } from 'react';

import clsx from 'clsx';

import { TabsStyled } from './styled';

type TabsProps = {
  className?: string;
  children: ReactNode[];
};

export default function Tabs({ className, children }: TabsProps) {
  return <TabsStyled className={clsx('Tabs', className)}>{children}</TabsStyled>;
}
