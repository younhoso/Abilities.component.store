'use client';

import { motion } from 'framer-motion';
import styled from 'styled-components';

interface OptionTabsProps {}

export const OptionTabsStyled = styled.div<OptionTabsProps>`
  display: flex;
  height: 45px;
  background-color: #f3f4f6;
  border-radius: 9999px;
  padding: 4px;
  position: relative;
`;

export const OptionTabsItemStyled = styled.button`
  flex: 1;
  padding: 10px 0;
  border: none;
  border-radius: 9999px;
  background: transparent;
  color: #8a8d92;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  position: relative;

  .option {
    position: relative;
    z-index: 2;
  }
`;

export const ActiveBackground = styled(motion.div)`
  position: absolute;
  top: 4px;
  bottom: 4px;
  left: 4px;
  background-color: #fff;
  border-radius: 9999px;
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.1);
  z-index: 0;
`;
