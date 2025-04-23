import { cx } from '@/utils/cx';

import { TableRowStyled } from './styled';

interface Props extends PropsWithChildren {}

const TableRow = ({ children }: Props) => {
  return <TableRowStyled className={cx('')}>{children}</TableRowStyled>;
};

export default TableRow;
