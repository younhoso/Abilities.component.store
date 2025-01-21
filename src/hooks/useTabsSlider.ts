import { useRef, useState } from 'react';

type SliderOptions = {
  initialIndex?: number;
  direction?: 'horizontal' | 'vertical';
};

export const useTabSlider = ({ initialIndex = 0, direction = 'horizontal' }: SliderOptions) => {
  const [activeIndex, setActiveIndex] = useState(initialIndex);
  const sliderRef = useRef<HTMLDivElement>(null);

  const handleClick = (index: number) => {
    setActiveIndex(index);
    const slider = sliderRef.current;
    if (slider) {
      const item = slider.children[index] as HTMLElement;
      item.scrollIntoView({
        behavior: 'smooth',
        block: direction === 'vertical' ? 'start' : 'nearest', // 수직 방향 정렬
        inline: direction === 'horizontal' ? 'center' : 'nearest', // 수평 방향 중앙 정렬
      });
    }
  };

  return {
    activeIndex,
    sliderRef,
    handleClick,
  };
};
