'use client';

import styled from 'styled-components';

export const StickyNavPageStyled = styled.div`
  .sticky-nav {
    position: absolute;
    right: 0;
    ul {
      display: flex;
    }
    &.fixed {
      position: fixed;
    }
  }
`;
