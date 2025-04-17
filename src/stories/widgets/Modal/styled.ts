'use client';

import styled from 'styled-components';

interface ModalContentsProps {
  backgroundcolor?: string;
}

interface ModalContentsBoxProps {
  width?: string;
}

export const ModalContentsStyled = styled.div<ModalContentsProps>`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background-color: ${props => props.backgroundcolor || 'transparent'};
  z-index: 50;
  display: flex;
  justify-content: center;
  align-items: center;

  .modalContentsInner {
    position: relative;
  }
`;

export const ModalCloseButtonStyled = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  z-index: 9;
  cursor: pointer;
`;

export const ModalContentsBoxStyled = styled.div<ModalContentsBoxProps>`
  padding: 20px;
  border-radius: 10px;
  background-color: ${props => props.theme.colors.white};
`;
