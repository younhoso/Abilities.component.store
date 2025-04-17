'use client';

import styled from 'styled-components';

export const AlertStyled = styled.div`
  .buttonInner {
    padding-top: 20px;
  }
`;

export const AlertContentsStyled = styled.div`
  min-width: 360px;
  display: inline-block;
  padding: 20px;
  border-radius: 10px;
  background-color: ${props => props.theme.colors.white};

  .inner {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 20px;
  }

  .close {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    position: absolute;
    right: 20px;
    top: 20px;
    cursor: pointer;
  }
`;
