import { memo } from 'react';

import { createGlobalStyle } from 'styled-components';

export const SwiperStyled = memo(createGlobalStyle`
  /* Swiper 컨테이너 커스텀 */
  .swiper {
    width: 100%;
    overflow: hidden;
  }

  /* 각 슬라이드 커스텀 */
  .swiper-slide {
    display: flex;
    height: auto;
  }

  /* 페이지네이션 (점) 커스텀 */
  .swiper-pagination-bullet {
    background: #bbb; /* 기본 점 색상 */
    width: 10px;
    height: 10px;
    opacity: 0.7;
  }

  .swiper-pagination-bullet-active {
    background: #333; /* 활성화된 점 색상 */
    opacity: 1;
  }

  /* 네비게이션 버튼 커스텀 */
  .swiper-button-next,
  .swiper-button-prev {
    color: #fff; /* 화살표 색상 */
    background: rgba(0, 0, 0, 0.5); /* 반투명 배경 */
    width: 40px;
    height: 40px;
    border-radius: 50%; /* 둥근 버튼 */
  }

  .swiper-button-next:hover,
  .swiper-button-prev:hover {
    background: rgba(0, 0, 0, 0.8); /* 호버 시 더 진한 배경 */
  }
`);
