import CheckBoxItem from '@/stories/shared/ui/CheckBox/CheckBoxItem';

import { BodyCell, Row } from '..';
import { UserRow } from '../../types/user';
import { TableBodyStyled } from '../styled';

interface Props extends PropsWithChildren {
  data: UserRow[];
  allData: UserRow[];
  headersColumns: { key: keyof UserRow; label: string }[];
  toggleOne: (id: number, checked: boolean) => void;
}

const TableBody = ({ data, allData, headersColumns, toggleOne }: Props) => {
  return (
    <TableBodyStyled>
      {data.map(item => {
        const row = allData.find(r => r.id === item.id);
        if (!row) return null;

        return (
          <Row key={row.id} isTransition useDelay index={row.id}>
            <BodyCell onClick={() => toggleOne(row.id, !row.checkedItem)}>
              <CheckBoxItem
                checked={row.checkedItem}
                onChange={checked => toggleOne(row.id, checked)}
                isGroupControlled
                align="right"
              />
            </BodyCell>
            {headersColumns.map(({ key }, index) => (
              <BodyCell
                key={key}
                align="left"
                onClick={
                  index !== headersColumns.length - 1
                    ? () => toggleOne(row.id, !row.checkedItem)
                    : undefined
                }
              >
                {item[key]}
              </BodyCell>
            ))}
          </Row>
        );
      })}
    </TableBodyStyled>
  );
};

export default TableBody;
