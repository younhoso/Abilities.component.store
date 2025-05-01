import { cx } from '@/utils/cx';

import { TableBodyCellStyled } from '../styled';

interface Props extends PropsWithChildren {
  align?: 'left' | 'center' | 'right';
  onClick?: () => void;
}

const TableBodyCell = ({ align, onClick, children }: Props) => {
  return (
    <TableBodyCellStyled align={align} className={cx('bodyCell')} onClick={onClick}>
      {children}
    </TableBodyCellStyled>
  );
};

export default TableBodyCell;
