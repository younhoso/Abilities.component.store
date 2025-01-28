'use client';

import { ReactNode } from 'react';

import clsx from 'clsx';

import Footer from '@/components/Footer/Footer';
import Header from '@/components/Header/Header';
import { useHandleIsSignIn } from '@/hooks/useHandleIsSignIn';
import { TemplateStyled } from '@/styles/pageStyled/TemplateStyled';

import sitemap from './sitemap';

export default function CommonTemplate({ children }: { children: ReactNode }) {
  const { isLoading } = useHandleIsSignIn();

  if (isLoading) return <p>Loading...!!</p>;

  return (
    <TemplateStyled className={clsx('Template')}>
      <Header category={() => sitemap()} />
      <div className="content">{children}</div>
      <Footer />
    </TemplateStyled>
  );
}
