import { Target, TargetAndTransition, Transition } from 'framer-motion';

import { delay } from '@/utils/delay';

import { TableRowStyled } from './styled';

interface Props extends PropsWithChildren {
  isTransition?: boolean;
  useDelay?: boolean;
  index?: number;
}

const TableRow = ({ isTransition = false, useDelay = false, index = 0, children }: Props) => {
  const initial: Target = { opacity: 0, y: 10 };
  const animate: TargetAndTransition = { opacity: 1, y: 0 };
  const transition: Transition = { duration: 0.5, ...(useDelay && { delay: index * 0.1 }) };

  return (
    <TableRowStyled
      {...(isTransition && {
        initial,
        animate,
        transition,
      })}
    >
      {children}
    </TableRowStyled>
  );
};

export default TableRow;
