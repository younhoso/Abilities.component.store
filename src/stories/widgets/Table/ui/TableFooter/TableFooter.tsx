import { TableFooterStyled } from '../styled';

interface Props extends PropsWithChildren {}

const TableFooter = ({ children }: Props) => {
  return <TableFooterStyled>{children}</TableFooterStyled>;
};

export default TableFooter;
