import { useRef } from 'react';

type SliderOptions = {
  direction?: 'horizontal' | 'vertical';
};

export const useTabSlider = ({ direction = 'horizontal' }: SliderOptions) => {
  const sliderRef = useRef<HTMLDivElement>(null);

  const handleSliderClick = (index: number) => {
    setTimeout(() => {
      // setTimeout 사용하면 현재 실행 컨텍스트가 끝난 후에 "다음 이벤트 루프"에서 실행됨.
      // 리렌더링이 끝난 후 실행
      const slider = sliderRef.current;
      if (!slider) return;

      const item = slider?.children[index] as HTMLElement;

      if (item) {
        item.scrollIntoView({
          behavior: 'smooth',
          block: direction === 'vertical' ? 'center' : 'nearest', // 수직 방향 정렬
          inline: direction === 'horizontal' ? 'center' : 'nearest', // 수평 방향 중앙 정렬
        });
      }
    }, 100);
  };

  return {
    sliderRef,
    handleSliderClick,
  };
};
