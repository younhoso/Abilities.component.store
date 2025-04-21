import { motion } from 'framer-motion';

import { isTuple } from './internal';
import { TransitionItemStyled } from './styled';

interface Props extends PropsWithChildren {
  x?: number | [number, number];
  y?: number | [number, number];
  opacity?: number;
  duration?: number;
  delay?: number;
}

const TransitionItem = ({
  x = 0,
  y = 0,
  opacity = 0,
  duration = 0.3,
  delay = 0,
  children,
}: Props) => {
  // x, y[등장 시 값, 사라질 때 값] 값이 단일 값이면 배열로 변환
  const [initialX, exitX] = isTuple(x) ? x : [x, x];
  const [initialY, exitY] = isTuple(y) ? y : [y, y];

  return (
    <TransitionItemStyled>
      <motion.div
        initial={{ x: initialX, y: initialY, opacity: opacity ?? 0 }}
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
        style={{
          background: '#f0f0f0',
          marginBottom: '12px',
          padding: '12px 20px',
          borderRadius: '8px',
          fontSize: '16px',
        }}
      >
        {children}
      </motion.div>
    </TransitionItemStyled>
  );
};

export default TransitionItem;
