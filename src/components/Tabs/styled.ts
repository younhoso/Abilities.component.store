'use client';

import styled from 'styled-components';

export const TabsStyled = styled.div`
  .tabsHeader {
    display: flex;
    border-bottom: 2px solid #ccc;
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
  }
  .tabsContent {
    padding: 20px;
  }
`;
