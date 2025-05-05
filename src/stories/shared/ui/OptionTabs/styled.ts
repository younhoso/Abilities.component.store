'use client';

import { color, motion } from 'framer-motion';
import styled from 'styled-components';

interface OptionTabsProps {}

interface OptionTabsItemProps {
  color?: string;
}

export const OptionTabsStyled = styled.div<OptionTabsProps>`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f3f4f6;
  border-radius: 1rem;
  position: relative;
`;

export const OptionTabsItemStyled = styled.button<OptionTabsItemProps>`
  flex: 1;
  padding: 10px 0;
  border: none;
  border-radius: 50%;
  background: transparent;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  position: relative;

  &.active {
    color: ${({ color }) => color || '#333'}; // 여기에 적용
  }

  .option {
    color: inherit;
    position: relative;
    z-index: 2;
  }
`;

export const ActiveBackground = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  border-radius: 1rem;
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.1);
  z-index: 0;
`;
