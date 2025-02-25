'use client';

import styled from 'styled-components';

export const TabsGroupStyled = styled.div`
  .tabsLabel {
    padding: 10px 20px;
    cursor: pointer;
    border: none;
    background-color: #f0f0f0;
    transition: all 0.3s ease;
    &.active {
      background-color: #fff;
      border-bottom: 2px solid #0070f3;
    }
  }
  .tabsContent {
    padding: 20px;
  }
`;

export const TabsHeaderStyled = styled.div`
  display: flex;
  margin-bottom: 20px;
  .name {
    border: 1px solid #000;
    padding: 8px;
  }
  .isActive {
    font-weight: 600;
  }
`;

export const TabsBodyStyled = styled.ul``;
