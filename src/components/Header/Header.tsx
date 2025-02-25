'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import clsx from 'clsx';

import { TitleSiteMap } from '@/app/sitemap';
import Wrapper from '@/provider/WrapperProvider';

import { HeaderStyled } from './styled';

type HeaderProps = {
  category: () => TitleSiteMap[];
};

export default function Header({ category }: HeaderProps) {
  const pathname = usePathname();

  return (
    <HeaderStyled className={clsx('Header', { mainHeader: pathname === '/' })}>
      <Wrapper>
        <div className="inner">
          <Link href={'/'}></Link>
          <ul className="category-inner">
            {category().map(v => {
              return (
                <div key={v.title}>
                  <Link href={v.url}>{v.title}</Link>
                </div>
              );
            })}
          </ul>
        </div>
      </Wrapper>
    </HeaderStyled>
  );
}
