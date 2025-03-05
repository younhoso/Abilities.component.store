'use client';

import { ReactNode } from 'react';

import clsx from 'clsx';

import Footer from '@/components/Footer/Footer';
import Header from '@/components/Header/Header';
import SideNav from '@/components/SideNav';
import { useHandleIsSignIn } from '@/hooks/useHandleIsSignIn';
import { TemplateStyled } from '@/styles/pageStyled/TemplateStyled';
import { WrapperStyled } from '@/styles/pageStyled/WrapperStyled';

import { titleSiteMap } from './sitemap';

export default function CommonTemplate({ children }: { children: ReactNode }) {
  const { isLoading } = useHandleIsSignIn();

  // if (isLoading) return <p>Loading...!!</p>;
  return (
    <TemplateStyled className={clsx('Template')}>
      <Header />
      <div className="content">
        <SideNav category={() => titleSiteMap()} />
        <WrapperStyled>{children}</WrapperStyled>
      </div>
      <Footer />
    </TemplateStyled>
  );
}
