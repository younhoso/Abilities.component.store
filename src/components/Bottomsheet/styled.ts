'use client';

import styled from 'styled-components';

export const ModalDraggableStyled = styled.div`
  .motion {
    width: 100%;
    border-top-right-radius: 20px;
    border-top-left-radius: 20px;
    background-color: #fff;
    position: absolute;
    bottom: 0;
    /* 모바일 기기로 접속할때 하단바(네비게이션)으로 인해 fixed으로 합니다.*/
    &.isMobileDevice {
      position: fixed;
      bottom: 0;
    }
  }
`;
