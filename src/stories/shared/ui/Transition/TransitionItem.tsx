import { useEffect, useRef, useState } from 'react';

import { motion } from 'framer-motion';

import { cx } from '@/utils/cx';

import { isTuple } from './internal';
import { TransitionItemStyled } from './styled';

interface Props extends PropsWithChildren {
  x?: number | [number, number];
  y?: number | [number, number];
  opacity?: number;
  duration?: number;
  delay?: number;
  isObserver?: boolean; // ✅ observer를 사용할지 여부
  observeOnce?: boolean; // ✅ 한 번만 감지할지 여부
}

const TransitionItem = ({
  x = 0,
  y = 0,
  opacity = 0,
  duration = 0.3,
  delay = 0,
  isObserver = false,
  observeOnce = true,
  children,
}: Props) => {
  // x, y[등장 시 값, 사라질 때 값] 값이 단일 값이면 배열로 변환
  const [initialX, exitX] = isTuple(x) ? x : [x, x];
  const [initialY, exitY] = isTuple(y) ? y : [y, y];

  const observeRef = useRef<HTMLDivElement | null>(null);
  const [inView, setInView] = useState(!isObserver); // observer가 false면 바로 보여짐

  useEffect(() => {
    if (!isObserver || !observeRef.current) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setInView(true);
        if (observeOnce) observer.disconnect(); // ✅ 한 번만 감지
      } else {
        if (!observeOnce) setInView(false); // ✅ 여러 번 감지
      }
    });

    observer.observe(observeRef.current);

    return () => observer.disconnect();
  }, [isObserver, observeOnce]);

  return (
    <TransitionItemStyled>
      <motion.div
        ref={observeRef}
        className={cx('transitionItem')}
        initial={{ x: initialX, y: initialY, opacity }}
        animate={
          inView
            ? { x: 0, y: 0, opacity: 1 }
            : !observeOnce
              ? { x: initialX, y: initialY, opacity } // ❗ observeOnce가 false(여러 번 감지)면 사라질 때도 animate로 처리
              : false
        }
        exit={
          observeOnce && inView
            ? { x: exitX, y: exitY, opacity: 0 } // ❗ observeOnce일 경우만 exit 처리
            : undefined
        }
        transition={{ duration: duration, delay: delay }}
      >
        {children}
      </motion.div>
    </TransitionItemStyled>
  );
};

export default TransitionItem;
