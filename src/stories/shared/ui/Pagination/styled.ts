'use client';

import styled from 'styled-components';

interface PaginationProps {}

interface PaginationButtonProps {
  disabled?: boolean;
}

export const PaginationStyled = styled.div<PaginationProps>`
  display: flex;
  gap: 8px;
  justify-content: center;
  align-items: center;

  .pageButton {
    width: 300px;
    height: 30px;
    background-color: transparent;
    padding: 0;
  }
`;

export const PageButton = styled.button<PaginationButtonProps>`
  padding: 6px 12px;
  border: none;
  background: ${({ disabled }) => (disabled ? '#ddd' : '#f0f0f0')};
  color: ${({ disabled }) => (disabled ? '#aaa' : '#333')};
  border-radius: 4px;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
`;
