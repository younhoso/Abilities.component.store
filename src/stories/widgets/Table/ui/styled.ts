'use client';

import { motion } from 'framer-motion';
import styled from 'styled-components';

type AlignType = 'left' | 'center' | 'right';

interface TableProps {}

interface TableHeadProps {}

interface TableBodyProps {}

interface TableHeaderCellProps {
  align?: AlignType;
}

interface TableBodyCellProps {
  align?: AlignType;
}

interface TableFooterCellProps {
  align?: AlignType;
}

interface TableRowProps {}

export const TableStyled = styled.table<TableProps>`
  width: 100%;
  border-collapse: collapse;
  border-radius: 12px;
  overflow: hidden; /* 내부 둥근 모서리 적용을 위해 필수 */
  box-shadow: 0 0 0 1px #d2d6db; /* border 대신 */
`;

export const TableHeadStyled = styled.thead<TableHeadProps>`
  background-color: #f1f1f1;
  font-weight: bold;
  text-align: left;
  overflow: hidden;
`;

export const TableHeaderCellStyled = styled.th<TableHeaderCellProps>`
  border: none;
  padding: 12px 14px;
  font-size: 14px;
  color: #333;
  text-align: ${({ align }) => align};

  &:first-child {
    min-width: auto;
    width: auto;
    &::after {
      display: none;
    }
  }

  &:last-child {
    &::after {
      display: none;
    }
  }
`;

export const TableBodyStyled = styled.tbody<TableBodyProps>`
  width: 100%;
  background-color: #fff;
  text-align: left;
  overflow: hidden;
`;

export const TableBodyCellStyled = styled.td<TableBodyCellProps>`
  border: none;
  padding: 12px 14px;
  font-size: 14px;
  color: #666;
  cursor: pointer;
  text-align: ${({ align }) => align};

  &:first-child {
    min-width: auto;
    width: auto;
    &::after {
      display: none;
    }
  }

  &:last-child {
    &::after {
      display: none;
    }
  }
`;

export const TableFooterStyled = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 16px;
`;

export const TableFooterCellStyled = styled.td<TableFooterCellProps>``;

export const TableRowStyled = styled(motion.tr)<TableRowProps>`
  border-bottom: 1px solid #d2d6db;
  + :last-child {
    border-bottom: none;
  }
  transition: background-color 0.25s ease-in;
  &:hover {
    background-color: #eee;
  }
`;

export const CheckboxCell = styled.div`
  padding: 12px;
  width: 40px;
  text-align: center;
`;

export const ActionCell = styled.div`
  padding: 12px;
  text-align: center;
  button {
    padding: 6px 12px;
    border: none;
    background-color: #007bff;
    color: white;
    border-radius: 4px;
    cursor: pointer;
    &:hover {
      background-color: #0056b3;
    }
  }
`;
