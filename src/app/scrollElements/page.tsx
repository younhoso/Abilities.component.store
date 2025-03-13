'use client';

import clsx from 'clsx';

import useIntersectionObserver from '@/hooks/useIntersectionObserver';
import { ScrollElementsStyled } from '@/styles/pageStyled/ScrollElementsStyled';

// 임의로 카드 데이터를 생성
const cards = new Array(10).fill(null).map((_, index) => ({
  id: index + 1,
  title: `Card ${index + 1}`,
  description: `This is the description for Card ${index + 1}`,
}));

export default function ScrollElements() {
  return (
    <ScrollElementsStyled className={clsx('scrollElements')}>
      <h2>스크롤 하면서 보이는 요소에 클래스를 추가하고, 안보이는 요소에 클래스를 제거하는 예제</h2>
      {cards.map(card => {
        const { isVisible, elementRef } = useIntersectionObserver<HTMLDivElement>({
          threshold: 0.1,
        });

        return (
          <div className={`card ${isVisible ? 'is-visible' : ''}`} ref={elementRef} key={card.id}>
            <h3>{card.title}</h3>
            <p>{card.description}</p>
          </div>
        );
      })}
    </ScrollElementsStyled>
  );
}
