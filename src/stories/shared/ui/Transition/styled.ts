'use client';

import styled from 'styled-components';

interface TransitionProps {}
interface TransitionItemProps {}

export const TransitionStyled = styled.div<TransitionProps>``;

export const TransitionItemStyled = styled.div<TransitionItemProps>`
  .transitionItem {
    background: #f0f0f0;
    margin-bottom: 12px;
    padding: 12px 20px;
    border-radius: 8px;
    font-size: 16px;
  }
`;
