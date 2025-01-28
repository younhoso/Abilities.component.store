'use client';

import styled from 'styled-components';

export const SigninStyled = styled.div`
  height: 100%;
  min-height: inherit;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;

  .item {
    width: 280px;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 50px;
    border-radius: 4px;
    font-size: 15px;
    font-weight: 700;
    color: #131518;
    gap: 10px;
    cursor: pointer;

    &.google {
      background: #fff;
      border: 1px solid #000;
      img {
        width: 20px;
      }
    }
    &.kakao {
      background: #ffe812;
      img {
        width: 20px;
      }
    }
    &.naver {
      background: #00cc33;
      img {
        width: 20px;
      }
    }
  }
  .loginText {
    font-size: 12px;
  }
`;
