'use client';

import styled, { css, keyframes } from 'styled-components';

interface CheckBoxProps {}

interface CustomCheckBoxProps {
  checked?: boolean;
  disabled?: boolean;
}

interface LabelProps {
  disabled?: boolean;
}

const checkAnim = keyframes`
  0% {
    transform: scale(0.4) rotate(-15deg);
    opacity: 0;
  }
  60% {
    transform: scale(1.2) rotate(10deg);
    opacity: 1;
  }
  100% {
    transform: scale(1) rotate(0deg);
    opacity: 1;
  }
`;

export const CheckBoxStyled = styled.div<CheckBoxProps>`
  display: flex;
  gap: 8px;
  justify-content: center;
`;

export const CustomCheckBox = styled.div<CustomCheckBoxProps>`
  width: 20px;
  height: 20px;
  border: 2px solid #007bff;
  border-radius: 4px;
  transition: background-color 0.3s ease;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: ${({ disabled }) => (disabled ? 'default' : 'pointer')};
  background-color: ${({ disabled }) => (disabled ? '#ccc' : 'transparent')};
  text-align: center;

  ${({ disabled }) =>
    disabled
      ? css`
          & svg {
            color: #fff;
            font-size: 14px;
            display: none;
          }
        `
      : css<CustomCheckBoxProps>`
          & svg {
            width: 12px;
            height: 12px;
            stroke: #007bff;
            stroke-width: 2;
            stroke-linecap: round;
            stroke-linejoin: round;
            fill: none;
            stroke-dasharray: 22;
            stroke-dashoffset: ${({ checked }) => (checked ? 0 : 22)};
            transition:
              stroke-dashoffset 250ms linear 0.2s,
              opacity 0.3s ease;
            opacity: ${({ checked }) => (checked ? 1 : 0)};
            pointer-events: none;
          }
        `}
`;

export const HiddenCheckBox = styled.input`
  display: none;
`;

export const Label = styled.label<LabelProps>`
  display: inline-block;
  position: relative;
  cursor: ${({ disabled }) => (disabled ? 'default' : 'pointer')};
  color: ${({ disabled }) => (disabled ? '#ccc' : '#333')};
  &::after {
    font-size: 25px;
    width: 30px;
    height: 30px;
    text-align: center;
    position: absolute;
    left: 0;
    top: 0;
  }
`;
