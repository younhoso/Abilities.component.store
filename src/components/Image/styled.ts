'use client';

import Image from 'next/image';

import styled from 'styled-components';

type ImageResizeStyledProps = {
  width?: number | string;
  height?: number | string;
};

const getSizeValue = (size?: number | string) => {
  if (typeof size === 'number') {
    return `${size}px`;
  }

  return size;
};

export const ImageResizeStyled = styled.div<ImageResizeStyledProps>`
  position: relative;
  width: ${props => getSizeValue(props.width)};
  max-width: ${props => getSizeValue(props.width)};
  height: ${props => getSizeValue(props.height)};
`;

export const ImageStyled = styled(Image)`
  position: relative !important;
`;
