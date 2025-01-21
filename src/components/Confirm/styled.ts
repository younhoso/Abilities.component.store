'use client';

import styled from 'styled-components';

export const ConfirmStyled = styled.div``;

export const ConfirmBodyStyled = styled.div`
  width: 100%;
  max-width: 360px;
  display: inline-block;
  padding: 20px;
  border-radius: 10px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;

  .inner {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 20px;
  }

  .close {
    border-radius: 50%;
    position: absolute;
    right: 20px;
    top: 20px;
    cursor: pointer;
  }
`;
