'use client';

import styled from 'styled-components';

export const SelectStyled = styled.div`
  position: relative;
`;

export const SelectTriggerStyled = styled.div`
  width: 100%;
  padding: 10px 14px;
  border: 1px solid #ccc;
  border-radius: 8px;
  background: white;
  text-align: left;
  cursor: pointer;

  background-image: url('/icons/downIcon.svg'); /* 직접 아이콘 경로 지정 */
  background-repeat: no-repeat;
  background-position: right 12px center;
  background-size: 16px 16px;
  transition: border-color 0.2s;
`;

export const SelectContentStyled = styled.div`
  position: absolute;
  width: 100%;
  margin-top: 4px;
  background: white;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  z-index: 1000;
`;

export const SelectItemStyled = styled.div`
  padding: 10px 14px;
  cursor: pointer;
  &:hover {
    background: #f0f0f0;
  }
`;
