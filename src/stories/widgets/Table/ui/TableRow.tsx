import { cx } from '@/utils/cx';

import { TableRowStyled } from './styled';

interface Props extends PropsWithChildren {}

const TableRow = ({ children }: Props) => {
  return <TableRowStyled>{children}</TableRowStyled>;
};

export default TableRow;
