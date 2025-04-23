import { cx } from '@/utils/cx';

import TableBody from './TableBody/TableBody';
import TableBodyCell from './TableBody/TableBodyCell';
import TableHead from './TableHead/TableHead';
import TableHeaderCell from './TableHead/TableHeaderCell';
import TableRow from './TableRow';
import { TableStyled } from './styled';

interface Props extends PropsWithChildren {}

const BaseTable = ({ children }: Props) => {
  return <TableStyled className={cx('table')}>{children}</TableStyled>;
};

const Table = Object.assign(BaseTable, {
  Head: TableHead,
  HeaderCell: TableHeaderCell,
  Body: TableBody,
  BodyCell: TableBodyCell,
  Row: TableRow,
});

export {
  TableHead as Head,
  TableRow as Row,
  TableHeaderCell as HeaderCell,
  TableBody as Body,
  TableBodyCell as BodyCell,
};

export default Table;
