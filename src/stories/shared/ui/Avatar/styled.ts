import { StaticImageData } from 'next/image';

import styled, { css } from 'styled-components';

// 필터링 대상 props 설정
// DOM으로 전달되지 않고 스타일 전용으로만 사용하기 위함.
const shouldOmit = (prop: string) => !['isBordered', 'size'].includes(prop);

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

interface AvatarFallbackProps {
  justify?:
    | 'flex-start'
    | 'center'
    | 'flex-end'
    | 'space-around'
    | 'space-between'
    | 'space-evenly';
}

interface AvatarInfoProps {}

export const AvatarStyled = styled.div<AvatarProps>`
  display: flex;
  align-items: center;

  & > :not(:first-child) {
    margin-left: -8px;
  }
`;

const sizeMap = {
  sm: '32px',
  md: '48px',
  lg: '72px',
  xl: '100px',
};

export const AvatarImageStyled = styled.div.withConfig({
  shouldForwardProp: shouldOmit,
})<AvatarImageProps>`
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

export const AvatarFallbackStyled = styled.div<AvatarFallbackProps>`
  display: flex;
  align-items: center;
  justify-content: ${({ justify }) => justify};
  gap: 8px;
`;

export const AvatarInfoStyled = styled.div<AvatarInfoProps>`
  display: flex;
  flex-direction: column;
  gap: 5px;
  font-size: 14px;
`;
