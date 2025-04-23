import { cx } from '@/utils/cx';

import { TableHeadStyled } from '../styled';

interface Props extends PropsWithChildren {}

const TableHead = ({ children }: Props) => {
  return <TableHeadStyled className={cx('')}>{children}</TableHeadStyled>;
};

export default TableHead;
