'use client';

import styled, { css } from 'styled-components';

interface AvatarProps {}

interface AvatarImageProps {
  resize?: boolean;
}

interface AvatarFallbackProps {}

export const AvatarStyled = styled.div<AvatarProps>``;

export const AvatarImageStyled = styled.div<AvatarImageProps>`
  position: relative;
  width: 100%;

  ${({ resize }) =>
    resize
      ? css`
          img {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
        `
      : css`
          img {
            width: auto;
            height: auto;
            object-fit: contain;
          }
        `}
`;

export const AvatarFallbackStyled = styled.div<AvatarFallbackProps>``;
