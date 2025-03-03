import Link from 'next/link';

import clsx from 'clsx';

import { TitleSiteMap } from '@/app/sitemap';
import Wrapper from '@/provider/WrapperProvider';

import { SideNavStyled } from './styled';

type SideNavProps = {
  category: () => TitleSiteMap[];
};

export default function SideNav({ category }: SideNavProps) {
  return (
    <SideNavStyled className={clsx('SideNav')}>
      <Wrapper>
        <div className="inner">
          <Link href={'/'}></Link>
          <ul className="CategoryInner">
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
    </SideNavStyled>
  );
}
