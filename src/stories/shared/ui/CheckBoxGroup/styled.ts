'use client';

import styled, { css } from 'styled-components';

interface CustomCheckBoxProps {
  checked?: boolean;
  disabled?: boolean;
}

interface LabelProps {
  disabled?: boolean;
}

export const CheckBoxStyled = styled.div`
  display: flex;
  gap: 8px;
  justify-content: flex-start;
`;

export const HiddenCheckBox = styled.input`
  display: none;
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
      : css`
          & svg {
            color: #333;
            font-size: 14px;
            display: block;
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
