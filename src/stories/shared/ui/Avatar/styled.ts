import { StaticImageData } from 'next/image';

import styled, { css } from 'styled-components';

('use client');

interface AvatarProps {}

interface AvatarImageProps {
  src?: string | StaticImageData;
  alt?: string;
  resize?: boolean;
  fill?: boolean;
  className?: string;
  isBordered?: boolean;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

interface AvatarFallbackProps {}

export const AvatarStyled = styled.div<AvatarProps>`
  display: flex;
  align-items: center;

  .avatarItem {
    + .avatarItem {
      margin-left: -8px;
    }
  }
`;

const sizeMap = {
  sm: '32px',
  md: '48px',
  lg: '72px',
  xl: '100px',
};

export const AvatarImageStyled = styled.div<AvatarImageProps>`
  position: relative;

  padding: 2px;
  border-radius: 50%;

  ${({ isBordered }) =>
    isBordered &&
    css`
      border: 1px solid ${({ theme }) => theme.colors.gray4e4};
    `}

  ${({ size = 'sm' }) => css`
    width: ${sizeMap[size]};
    height: ${sizeMap[size]};
  `}

  img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }
`;

export const AvatarFallbackStyled = styled.div<AvatarFallbackProps>``;
