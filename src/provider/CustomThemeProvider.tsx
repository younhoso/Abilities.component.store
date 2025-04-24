'use client';

import { ReactNode } from 'react';

import { DefaultTheme, ThemeProvider } from 'styled-components';

import StyledComponentsRegistry from '@/libs/StyledRegistry';
import { InitGlobalStyled } from '@/stories/app/styles/init';
import { SwiperStyled } from '@/stories/app/styles/swiper';
import { colors, fontSizes, fontWeight } from '@/stories/app/styles/theme';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: typeof colors;
    fontWeight: typeof fontWeight;
    fontSizes: typeof fontSizes;
  }
}

export const theme: DefaultTheme = {
  colors,
  fontWeight,
  fontSizes,
};

export default function CustomThemeProvider({ children }: { children: ReactNode }) {
  return (
    <StyledComponentsRegistry>
      <ThemeProvider theme={theme}>
        <InitGlobalStyled />
        <SwiperStyled />
        {children}
      </ThemeProvider>
    </StyledComponentsRegistry>
  );
}
