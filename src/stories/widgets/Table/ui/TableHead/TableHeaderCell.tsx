import { cx } from '@/utils/cx';

import { TableHeaderCellStyled } from '../styled';

interface Props extends PropsWithChildren {
  align?: 'left' | 'center' | 'right';
}

const TableHeaderCell = ({ align = 'left', children }: Props) => {
  return <TableHeaderCellStyled align={align}>{children}</TableHeaderCellStyled>;
};

export default TableHeaderCell;
