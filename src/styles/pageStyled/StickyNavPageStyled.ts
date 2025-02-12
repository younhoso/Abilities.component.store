'use client';

import styled from 'styled-components';

export const StickyNavPageStyled = styled.div`
  .sticky-nav {
    position: absolute;
    right: 0;
    ul {
      display: flex;
      li {
        &.active {
          font-weight: 700;
        }
      }
    }
    &.fixed {
      position: fixed;
    }
  }
`;
