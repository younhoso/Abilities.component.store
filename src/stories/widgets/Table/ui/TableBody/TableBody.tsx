import { cx } from '@/utils/cx';

import { TableBodyStyled } from '../styled';

interface Props extends PropsWithChildren {}

const TableBody = ({ children }: Props) => {
  return <TableBodyStyled>{children}</TableBodyStyled>;
};

export default TableBody;
