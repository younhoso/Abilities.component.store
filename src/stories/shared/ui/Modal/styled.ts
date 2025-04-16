'use client';

import styled from 'styled-components';

interface ModalContentsProps {
  backgroundcolor?: string;
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
`;

export const ModalContentsStyledBox = styled.div`
  width: auto;
  padding: 20px;
  border-radius: 10px;
  max-height: calc(100% - 24px);
  background-color: ${props => props.theme.colors.white};
`;
