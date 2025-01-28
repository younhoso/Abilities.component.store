import type { ReactNode } from 'react';

import type { Metadata, Viewport } from 'next';

import ClientSessionProvider from '@/provider/ClientSessionProvider';
import CustomThemeProvider from '@/provider/CustomThemeProvider';
import ReactQueryProvider from '@/provider/ReactQueryProvider';
import RecoilProvider from '@/provider/RecoilProvider';

import { gmarket } from '../libs/fonts';

const metaTitle = 'CreateFix';

export const metadata: Metadata = {
  title: {
    template: metaTitle + ' | %s',
    default: metaTitle,
  },
  description: 'CreateFix',
  metadataBase: new URL('https://creayer-fix-component-store.vercel.app'),
  icons: {
    icon: [{ url: '/favicon.ico', rel: 'shortcut icon' }],
  },
  openGraph: {
    images: '/og-image.png',
  },
  robots: {
    index: true,
    follow: true,
  },
  other: {
    'naver-site-verification': '3d3e995da88e72e6',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ko">
      <body className={gmarket.className}>
        <RecoilProvider>
          <ClientSessionProvider>
            <CustomThemeProvider>
              <ReactQueryProvider>{children}</ReactQueryProvider>
            </CustomThemeProvider>
          </ClientSessionProvider>
        </RecoilProvider>
        <div id="GeneralLayoutContainer"></div>
      </body>
    </html>
  );
}
