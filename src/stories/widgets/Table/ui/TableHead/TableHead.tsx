import CheckBoxItem from '@/stories/shared/ui/CheckBox/CheckBoxItem';

import { HeaderCell, Row } from '..';
import { UserRow } from '../../types/user';
import { TableHeadStyled } from '../styled';

interface Props extends PropsWithChildren {
  headersColumns: { key: keyof UserRow; label: string }[];
  allChecked: boolean;
  toggleAll: (checked: boolean) => void;
}

const TableHead = ({ headersColumns, allChecked, toggleAll }: Props) => {
  return (
    <TableHeadStyled>
      <Row isTransition>
        <HeaderCell>
          <CheckBoxItem
            checked={allChecked}
            onChange={toggleAll}
            isGroupControlled
            align="right"
            color="red"
          />
        </HeaderCell>
        {headersColumns.map(({ label, key }) => (
          <HeaderCell key={key} align="left">
            {label}
          </HeaderCell>
        ))}
      </Row>
    </TableHeadStyled>
  );
};

export default TableHead;
