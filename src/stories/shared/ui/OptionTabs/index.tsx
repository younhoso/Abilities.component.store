import { Fragment, useEffect, useRef, useState } from 'react';

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
  const itemWidth = options?.length ? containerWidth / options.length : 0;

  useEffect(() => {
    if (!options?.length || value === '...') return;

    const foundIndex = options.findIndex(option => option === value);
    if (foundIndex >= 0) setActiveIndex(foundIndex);
  }, [value, options]);

  useEffect(() => {
    if (!containerRef.current) return;

    const resizeObserver = new ResizeObserver(entries => {
      for (let entry of entries) {
        setContainerWidth(entry.contentRect.width);
      }
    });

    resizeObserver.observe(containerRef.current);

    return () => resizeObserver.disconnect();
  }, [options?.length]); // ✅ options 갯수 바뀔 때도 다시 측정

  return (
    <OptionTabsStyled ref={containerRef} className={cx(className)}>
      <Fragment key={value}>
        {options?.map(option => (
          <OptionTabsItemStyled
            key={option}
            color={color}
            className={value === option ? 'active' : ''}
            onClick={() => {
              if (option === '...') return; // 클릭 방지
              onChange?.(option);
            }}
            role="radio"
            aria-checked={value === option}
            aria-disabled={option === '...'}
          >
            <span className={cx('option')}>
              {String(option).startsWith('ellipsis') ? '...' : option}
            </span>
          </OptionTabsItemStyled>
        ))}
      </Fragment>
      <MotionActiveBackground
        layoutId="option-tab-background"
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
