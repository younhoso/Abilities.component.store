'use client';

import styled, { css, keyframes } from 'styled-components';

type ProgressSize = 'sm' | 'md' | 'lg';
type ProgressColor = 'default' | 'primary' | 'secondary' | 'success' | 'danger' | 'warning';

interface ProgressProps {
  value?: number;
  size?: ProgressSize;
  color?: ProgressColor;
  isIndeterminate?: boolean;
  label?: string;
  className?: string;
}

interface BarWrapperStyledProps {
  size: ProgressSize;
}

interface BarStyledProps {
  value: number;
  color: ProgressColor;
  isIndeterminate: boolean;
}

const indeterminate = keyframes`
  0% {
    left: -40%;
    width: 40%;
  }
  100% {
    left: 100%;
    width: 60%;
  }
`;

export const ProgressStyled = styled.div<ProgressProps>`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const Label = styled.span`
  font-size: 14px;
  color: #333;
`;

export const BarWrapper = styled.div<BarWrapperStyledProps>`
  background-color: #eee;
  border-radius: 100px;
  overflow: hidden;
  width: 100%;
  position: relative;

  ${({ size }) => {
    switch (size) {
      case 'sm':
        return css`
          height: 6px;
        `;
      case 'lg':
        return css`
          height: 16px;
        `;
      default:
        return css`
          height: 10px;
        `;
    }
  }}
`;

export const Bar = styled.div<BarStyledProps>`
  height: 100%;
  transition: width 0.3s ease;
  border-radius: 1rem;

  ${({ isIndeterminate }) =>
    isIndeterminate
      ? css`
          position: absolute;
          animation: ${indeterminate} 1.5s infinite linear;
        `
      : css`
          position: relative;
        `}

  ${({ color }) => {
    switch (color) {
      case 'success':
        return css`
          background-color: #22c55e;
        `;
      case 'danger':
        return css`
          background-color: #f31260;
        `;
      case 'secondary':
        return css`
          background-color: #6b7280;
        `;
      case 'warning':
        return css`
          background-color: #facc15;
        `;
      case 'primary':
        return css`
          background-color: #3b82f6;
        `;
      default:
        return css`
          background-color: #d1d5db;
        `;
    }
  }}

  ${({ value, isIndeterminate }) =>
    !isIndeterminate &&
    css`
      width: ${value}%;
    `}
`;
