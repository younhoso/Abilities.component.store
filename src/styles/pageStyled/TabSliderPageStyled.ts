import styled from 'styled-components';

type TabSliderPageStyledProps = {
  direction: 'horizontal' | 'vertical';
};

export const TabSliderPageStyled = styled.div<TabSliderPageStyledProps>`
  width: ${({ direction }) => (direction === 'horizontal' ? '100%' : 'auto')};
  height: ${({ direction }) => (direction === 'vertical' ? '700px' : 'auto')};
  display: flex;
  flex-direction: ${({ direction }) => (direction === 'vertical' ? 'column' : 'row')};
  gap: 20px;
  overflow: auto;
  background-image: linear-gradient(to right, #7a4ef8 0, #7f51f6 50%, #8f5aee 100%);
  scrollbar-width: none;
  -ms-overflow-style: none;
  ::-webkit-scrollbar {
    display: none; /* 웹킷 기반 브라우저에서 스크롤바를 숨김 */
  }

  .slider-item {
    text-align: center;
    cursor: pointer;
    transition: transform 0.3s ease;
    color: rgba(255, 255, 255, 0.5);
    font-weight: 600;

    &.active {
      color: rgba(255, 255, 255, 1);
      border-bottom: 2px solid #fff;
    }
  }

  .nav_link {
    display: block;
    height: 54px;
    padding: 18px 10px 0;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    text-overflow: ellipsis;
    white-space: pre;
  }
`;
