import { cx } from '@/utils/cx';

import TableBody from './TableBody/TableBody';
import TableBodyCell from './TableBody/TableBodyCell';
import TableFooter from './TableFooter/TableFooter';
import TableFooterCell from './TableFooter/TableFooterCell';
import TableHead from './TableHead/TableHead';
import TableHeaderCell from './TableHead/TableHeaderCell';
import TableRow from './TableRow';
import { TableStyled } from './styled';

interface Props extends PropsWithChildren {
  PAGEITEMSSIZE?: number; // 사용하지는 않지만 타입오류를 없애려면
}

const BaseTable = ({ PAGEITEMSSIZE = 5, children }: Props) => {
  return <TableStyled className={cx('table')}>{children}</TableStyled>;
};

const Table = Object.assign(BaseTable, {
  Row: TableRow,
  Head: TableHead,
  HeaderCell: TableHeaderCell,
  Body: TableBody,
  BodyCell: TableBodyCell,
  Footer: TableFooter,
  FooterCell: TableFooterCell,
});

export {
  TableRow as Row,
  TableHead as Head,
  TableHeaderCell as HeaderCell,
  TableBody as Body,
  TableBodyCell as BodyCell,
  TableFooter as Footer,
  TableFooterCell as FooterCell,
};

export default Table;
