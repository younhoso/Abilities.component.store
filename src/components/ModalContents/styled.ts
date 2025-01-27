'use client';

import styled from 'styled-components';

type ModalContentsStyledProps = {
  backgroundcolor?: string;
};

export const ModalContentsStyled = styled.section<ModalContentsStyledProps>`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background-color: ${props => props.backgroundcolor || 'transparent'};
  z-index: 50;
  display: flex;
  justify-content: center;
  align-items: end;

  .draggable {
    width: 100%;
    height: auto;
    background-color: #fff;
    border-top-right-radius: 20px;
    border-top-left-radius: 20px;
    overflow: hidden;

    // Bottomsheet heightFull props가 true 인 경우 스타일
    &.heightFull {
      height: 100vh;
      max-height: calc(100vh - 24px);
    }

    // Bottomsheet mode props가 'basic' 경우 스타일
    &.basic {
      .headerBottomsheet {
        padding: 0 12px;
        text-align: center;
      }

      padding: 0 12px;
      ul {
        > li {
          height: auto;
          padding: 8px 0;
          border-bottom: 1px solid ${props => props.theme.colors.gray4e4};
        }
      }
    }

    // Bottomsheet mode props가 'popupBottomsheet' 경우 스타일
    &.popupBottomsheet {
      .headerBottomsheet {
        text-align: left;
      }
      .popupBottomsheetInner {
        display: flex;
      }
      .buttonWrapper {
        padding: 15px 20px;
        display: flex;
        justify-content: space-between;
      }
    }

    .barBottomsheet {
      display: flex;
      align-items: center;
      justify-content: center;
      min-height: 28px;
      cursor: pointer;
      text-indent: -9999px; /* 텍스트 숨기기 */
      white-space: nowrap;
      overflow: hidden;
      &::before {
        content: '';
        display: flex;
        width: 90px;
        height: 12px;
        background-color: ${props => props.theme.colors.gray4e4}; /* 닫기 버튼의 배경색 */
        border-radius: 1em; /* 원형 버튼 */
      }
    }
  }

  .contentItem {
    width: 100%;
    max-height: calc(100% - 24px);
  }
`;
