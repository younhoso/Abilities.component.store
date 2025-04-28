import styled from 'styled-components';

interface IconProps {
  size?: number;
}

export const IconStyled = styled.div<IconProps>`
  text-align: center;
  line-height: 1;
  display: flex;

  & > svg {
    width: ${({ size = 24 }) => size}px;
    height: ${({ size = 24 }) => size}px;
  }
`;
