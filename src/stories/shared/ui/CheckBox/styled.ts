'use client';

import styled, { css } from 'styled-components';

import { CheckBoxProps } from '../../types/CheckBox';

interface LabelProps {
  disabled?: boolean;
}

interface CheckBoxStyledProps {
  align?: 'left' | 'center' | 'right';
}

export const CheckBoxStyled = styled.div<CheckBoxStyledProps>`
  display: flex;
  gap: 8px;
  justify-content: ${({ align = 'flex-start' }) => align};
`;

export const HiddenCheckBox = styled.input`
  display: none;
`;

export const CustomCheckBox = styled.div<CheckBoxProps>`
  width: 20px;
  height: 20px;
  border: 2px solid ${({ borderColor = '#D5D7DA', color = '#D5D7DA' }) => borderColor || color};
  border-radius: 4px;
  transition: background-color 0.3s ease;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: ${({ disabled }) => (disabled ? 'default' : 'pointer')};
  background-color: ${({ disabled, backgroundColor }) =>
    disabled ? '#ccc' : backgroundColor || 'transparent'};
  text-align: center;

  ${({ disabled, color = '#D5D7DA' }) =>
    disabled
      ? css`
          & svg {
            color: #fff;
            font-size: 14px;
            display: none;
          }
        `
      : css<CheckBoxProps>`
          & svg {
            width: 12px;
            height: 12px;
            stroke: ${color};
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

export const CheckBoxGroupStyled = styled.div``;

export const CheckBoxTriggerStyled = styled.div``;
