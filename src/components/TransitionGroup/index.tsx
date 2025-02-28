'use client';

import React, { ReactNode } from 'react';

import { AnimatePresence, motion } from 'framer-motion';

type TransitionGroupProps = {
  y?: number | [number, number];
  x?: number | [number, number];
  opacity?: number;
  duration?: number; // 전체 아이템 듀레이션
  delay?: number; // 개별 아이템 간 딜레이
  children: ReactNode;
};

// 튜플인지 확인하는 타입 가드
function isTuple(value: unknown): value is [number, number] {
  return Array.isArray(value) && value.length === 2;
}

export default function TransitionGroup({
  x = 0,
  y = 10,
  opacity = 0,
  duration = 0.3,
  delay = 0.1,
  children,
}: TransitionGroupProps) {
  // x, y[등장 시 값, 사라질 때 값] 값이 단일 값이면 배열로 변환
  const [initialX, exitX] = isTuple(x) ? x : [x, x];
  const [initialY, exitY] = isTuple(y) ? y : [y, y];

  return (
    <AnimatePresence>
      {React.Children.map(children, (child, index) => {
        if (React.isValidElement(child)) {
          return (
            <motion.div
              className="item"
              key={child.key?.toString()} // key가 있어야 애니메이션이 정상 작동
              initial={{
                opacity: opacity ?? 0,
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
              transition={{ duration: duration, delay: index * delay }}
            >
              {child}
            </motion.div>
          );
        }
      })}
    </AnimatePresence>
  );
}
