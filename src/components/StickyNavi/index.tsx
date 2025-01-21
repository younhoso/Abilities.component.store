import { ReactNode } from 'react';

import { StickyNavPageStyled } from '@/styles/pageStyled/StickyNavPageStyled';

type StickyNaviProps = {
  children: ReactNode;
};
export default function StickyNavi({ children }: StickyNaviProps) {
  return <StickyNavPageStyled>{children}</StickyNavPageStyled>;
}
