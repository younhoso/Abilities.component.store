import { cx } from '@/utils/cx';

import { TableBodyCellStyled } from '../styled';

interface Props extends PropsWithChildren {
  align?: 'left' | 'center' | 'right';
}

const TableBodyCell = ({ align, children }: Props) => {
  return (
    <TableBodyCellStyled align={align} className={cx('bodyCell')}>
      {children}
    </TableBodyCellStyled>
  );
};

export default TableBodyCell;
