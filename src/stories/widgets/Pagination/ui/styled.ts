'use client';

import styled from 'styled-components';

interface Props {
  isBgColor?: 'white' | 'black';
}

export const PaginationStyled = styled.div<Props>`
  display: flex;
  gap: 8px;
  justify-content: center;
  align-items: center;
  background-color: ${({ isBgColor = 'white' }) => (isBgColor === 'white' ? '#f1f1f1' : '#27272a')};
  border: 1px solid ${({ isBgColor = 'white' }) => (isBgColor === 'white' ? '#d2d6db' : '#333')};
  border-radius: 0.8rem;

  .buttonItem {
    button {
      background-color: transparent;
      border: 1px solid transparent;
    }
  }

  .pageButton {
    width: 300px;
    height: 30px;
    background-color: transparent;
    padding: 0;
  }
`;
