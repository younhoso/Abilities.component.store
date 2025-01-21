'use client';

import Link from 'next/link';

import clsx from 'clsx';

import { useTabSlider } from '@/hooks/useTabsSlider';
import { TabSliderPageStyled } from '@/styles/pageStyled/TabSliderPageStyled';

const items = [
  '쇼핑라이브',
  '징보기',
  '원뿔딜',
  '책방',
  '선물샵',
  '도착보장',
  '패션뷰티',
  '쇼핑',
  '홈',
  '뉴스',
  '스포츠',
  '연예',
  '경제',
  '쇼핑투데이',
  '자동차',
  '게임',
  '클립',
  '건강',
  '웹툰',
  '지식+',
];
/**
 * 범용적으로 쓰이는 TabSlider 사용자가 탭을 클릭, 또는 좌우 슬라이드 제스처
 * useTabSlider 훅을 옵션으로 initialIndex 초기값과, direction 방향을 설정한다.
 * 자세한것은 아래 코드 참고
 */
export default function TabSliderPage() {
  const { activeIndex, sliderRef, handleClick } = useTabSlider({
    initialIndex: 0,
    direction: 'horizontal',
  });

  return (
    <TabSliderPageStyled direction={'horizontal'} className={clsx('TabSliderPage')} ref={sliderRef}>
      {items.map((item, index) => (
        <li
          key={index}
          className={`slider-item ${index === activeIndex ? 'active' : ''}`}
          onClick={() => handleClick(index)}
        >
          <Link className="nav_link" href={'#0'} role="tab">
            {item}
          </Link>
        </li>
      ))}
    </TabSliderPageStyled>
  );
}
