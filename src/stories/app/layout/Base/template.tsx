'use client';

import { ReactNode } from 'react';

import clsx from 'clsx';

import { Footer } from '@/stories/widgets/Footer';
import { Header } from '@/stories/widgets/Header';
import { TemplateStyled } from '@/styles/pageStyled/TemplateStyled';

const CommonTemplate = ({ children }: { children: ReactNode }) => {
  return (
    <TemplateStyled className={clsx('template')}>
      <Header />
      {children}
      <Footer />
    </TemplateStyled>
  );
};

export default CommonTemplate;
