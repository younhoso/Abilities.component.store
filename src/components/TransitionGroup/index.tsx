'use client';

import React, { ReactNode } from 'react';

import { AnimatePresence, motion } from 'framer-motion';

type TransitionGroupProps = {
  y?: number;
  x?: number;
  opacity?: number;
  duration?: number;
  children: ReactNode;
};

export default function TransitionGroup({
  x = 0,
  y = 10,
  opacity = 0,
  duration = 0.3,
  children,
}: TransitionGroupProps) {
  return (
    <AnimatePresence>
      {React.Children.map(children, child => {
        if (React.isValidElement(child)) {
          return (
            <motion.div
              className="item"
              key={child.key?.toString()} // key가 있어야 애니메이션이 정상 작동
              initial={{
                opacity: opacity ?? 0,
                x: x ?? 0,
                y: y ?? 0,
              }}
              animate={{
                opacity: 1,
                x: 0, // 애니메이션 진행 시 x는 0으로
                y: 0,
              }}
              exit={{
                opacity: 0,
                x: -(x ?? 0), // x나 y 값이 음수일 때 반대 방향으로 애니메이션
                y: -(y ?? 0),
              }}
              transition={{ duration: duration ?? 0.3 }}
            >
              {child}
            </motion.div>
          );
        }
      })}
    </AnimatePresence>
  );
}
