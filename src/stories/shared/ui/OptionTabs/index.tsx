import { useEffect, useRef, useState } from 'react';

import { motion } from 'framer-motion';

import { cx } from '@/utils/cx';

import { ActiveBackground, OptionTabsItemStyled, OptionTabsStyled } from './styled';

const MotionActiveBackground = motion(ActiveBackground);

type TabOption = string | number;

interface Props<T extends TabOption> {
  options?: T[];
  value?: T;
  className?: string;
  color?: string;
  backgroundColor?: string;
  onChange?: (value: T) => void;
}

const OptionTabs = <T extends TabOption>({
  options,
  value,
  className,
  color,
  backgroundColor,
  onChange,
}: Props<T>) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerWidth, setContainerWidth] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (!containerRef.current) return;

    const resizeObserver = new ResizeObserver(entries => {
      for (let entry of entries) {
        setContainerWidth(entry.contentRect.width);
      }
    });

    resizeObserver.observe(containerRef.current);
    return () => resizeObserver.disconnect();
  }, []);

  useEffect(() => {
    if (!options?.length) return;

    const foundIndex = options.findIndex(option => option === value);
    if (foundIndex >= 0) {
      setActiveIndex(foundIndex);
    }
  }, [value, options]);

  const itemWidth = containerWidth / options?.length!;

  return (
    <OptionTabsStyled ref={containerRef} className={cx(className)}>
      {options?.map(option => (
        <OptionTabsItemStyled
          key={option}
          color={color}
          className={value === option ? 'active' : ''}
          onClick={() => onChange?.(option)}
          role="radio"
          aria-checked={value === option}
        >
          <span className={cx('option')}>{option}</span>
        </OptionTabsItemStyled>
      ))}
      <MotionActiveBackground
        layout
        initial={false}
        animate={{ x: itemWidth * activeIndex }}
        style={{
          width: `${itemWidth}px`,
          height: '100%',
          color: color || '#333',
          backgroundColor: backgroundColor || '#fff',
        }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      />
    </OptionTabsStyled>
  );
};

export default OptionTabs;
