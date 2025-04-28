import { useEffect, useRef, useState } from 'react';

import { motion } from 'framer-motion';

import { cx } from '@/utils/cx';

import { ActiveBackground, OptionTabsItemStyled, OptionTabsStyled } from './styled';

const MotionActiveBackground = motion(ActiveBackground);

interface Props {
  options: string[];
  value: string;
  onChange: (value: string) => void;
}

const OptionTabs = ({ options, value, onChange }: Props) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerWidth, setContainerWidth] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (!containerRef.current) return;
    setContainerWidth(containerRef.current.offsetWidth);
  }, []);

  useEffect(() => {
    if (!options.length) return;

    const foundIndex = options.findIndex(option => option === value);
    if (foundIndex >= 0) {
      setActiveIndex(foundIndex);
    }
  }, [value, options]);

  const itemWidth = containerWidth / options.length;

  return (
    <OptionTabsStyled ref={containerRef}>
      {options.map(option => (
        <OptionTabsItemStyled
          key={option}
          className={value === option ? 'active' : ''}
          onClick={() => onChange(option)}
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
        style={{ width: `${itemWidth}px` }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      />
    </OptionTabsStyled>
  );
};

export default OptionTabs;
