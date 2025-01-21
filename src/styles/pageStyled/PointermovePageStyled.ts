'use client';

import styled from 'styled-components';

interface PositionProps {
  position: { x: number; y: number };
}

export const PointerStyled = styled.div<PositionProps>`
  position: absolute;
  background-color: pink;
  border-radius: 50%;
  opacity: 0.6;
  transform: ${({ position }) => `translate(${position.x}px, ${position.y}px)`};
  pointer-events: none;
  left: -20px;
  top: -20px;
  width: 40px;
  height: 40px;
`;
