import styled from 'styled-components';

export const TransitionGroupPageStyled = styled.div`
  .item {
    border-radius: 0.4em;

    .inner {
      display: flex;
      gap: 10px;
      align-items: center;
      .remove {
        width: 50px;
        height: 30px;
        line-height: 30px;
        text-align: center;
        background-color: #000;
        color: #fff;
        border-radius: 0.25em;
      }
      .title {
        font-size: 18px;
        font-weight: 700;
      }
      .text {
        font-size: 16px;
      }
    }
  }
`;
