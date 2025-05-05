import { TableFooterCellStyled } from '../styled';

interface Props extends PropsWithChildren {
  align?: 'left' | 'center' | 'right';
}

const TableFooterCell = ({ align = 'left', children }: Props) => {
  return <TableFooterCellStyled align={align}>{children}</TableFooterCellStyled>;
};

export default TableFooterCell;
