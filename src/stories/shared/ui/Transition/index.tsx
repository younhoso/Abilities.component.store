import React from 'react';

import { AnimatePresence, motion } from 'framer-motion';

import { cx } from '@/utils/cx';

import TransitionItem from './TransitionItem';
import { isTuple } from './internal';
import { TransitionStyled } from './styled';

interface Props extends PropsWithChildren {
  y?: number | [number, number];
  x?: number | [number, number];
  opacity?: number;
  duration?: number; // 전체 아이템 듀레이션
  delay?: number; // 개별 아이템 간 딜레이
  isObserver?: boolean; // ✅ observer를 사용할지 여부
  observeOnce?: boolean; // ✅ 한 번만 감지할지 여부
}

const BaseTransition = ({
  x = 0,
  y = 10,
  opacity = 0,
  duration = 0,
  delay = 0.1,
  children,
}: Props) => {
  // x, y[등장 시 값, 사라질 때 값] 값이 단일 값이면 배열로 변환
  const [initialX, exitX] = isTuple(x) ? x : [x, x];
  const [initialY, exitY] = isTuple(y) ? y : [y, y];

  return (
    <TransitionStyled className={cx('transition')}>
      <AnimatePresence>
        {React.Children.map(children, child => {
          if (React.isValidElement(child)) {
            return (
              <motion.div
                className={cx('baseTransition')}
                key={child.key?.toString()} // key가 있어야 애니메이션이 정상 작동
                initial={{
                  opacity,
                  x: initialX,
                  y: initialY,
                }}
                animate={{
                  opacity: 1,
                  x: 0, // 애니메이션 진행 시 x는 0으로
                  y: 0,
                }}
                exit={{
                  opacity: 0,
                  x: exitX, // x나 y 값이 음수일 때 반대 방향으로 애니메이션
                  y: exitY,
                }}
                transition={{ duration: duration, delay: delay }}
              >
                {child}
              </motion.div>
            );
          }
        })}
      </AnimatePresence>
    </TransitionStyled>
  );
};

BaseTransition.displayName = 'Transition';

const Transition = Object.assign(BaseTransition, {
  TransitionItem,
});

export { TransitionItem };

export default Transition;
