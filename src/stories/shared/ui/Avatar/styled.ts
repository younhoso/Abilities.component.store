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

interface AvatarExtraProps {
  isBordered?: boolean;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

const sizeMap = {
  sm: 32,
  md: 48,
  lg: 72,
  xl: 100,
} as const;

type SizeKey = keyof typeof sizeMap;

export const AvatarStyled = styled.div<AvatarProps>`
  display: flex;
  align-items: center;

  & > :not(:first-child) {
    margin-left: -8px;
  }
`;

export const AvatarImageStyled = styled.div.withConfig({
  shouldForwardProp: shouldOmit,
})<AvatarImageProps>`
  position: relative;
  padding: 2px;
  border-radius: 50%;

  ${({ isBordered }) => {
    return (
      isBordered &&
      css`
        border: 1px solid ${({ theme }) => theme.colors.gray4e4};
      `
    );
  }};

  ${({ size = 'sm' }) => {
    const base = sizeMap[size as SizeKey];
    return css`
      width: ${base}px;
      height: ${base}px;
    `;
  }};

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

export const AvatarExtraStyled = styled.div<AvatarExtraProps>`
  padding: 2px;
  border-radius: 50%;
  background-color: #ececec;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;

  ${({ isBordered }) =>
    isBordered &&
    css`
      border: 1px solid ${({ theme }) => theme.colors.gray4e4};
    `}

  ${({ size = 'sm' }) => {
    const base = sizeMap[size as SizeKey];

    return css`
      width: ${base}px;
      height: ${base}px;
    `;
  }}
`;
