import type { Meta, StoryObj } from '@storybook/react';
import { useMemo, useState } from 'react';

import { CheckBoxItem } from '@/stories/shared/ui/CheckBox';

import Table, { Body, BodyCell, Footer, Head, HeaderCell, Row } from '.';
import { data, headers } from '../constants/TableData';
import { UserRow } from '../types/user';

const meta: Meta<typeof Table> = {
  title: 'Widgets/Table',
  component: Table,
  tags: ['autodocs'],
  parameters: {
    backgrounds: {
      default: 'light',
    },
  },
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof Table>;

export const Default: Story = {
  render: () => {
    const [tableData, setTableData] = useState<UserRow[]>(() => data.map(item => ({ ...item })));

    const allChecked = useMemo(() => tableData.every(row => row.checkedItem), [tableData]);

    const toggleAll = (checked: boolean) => {
      setTableData(prev => prev.map(row => ({ ...row, checkedItem: checked })));
    };

    const toggleOne = (id: number, checked: boolean) => {
      setTableData(prev =>
        prev.map(row => (row.id === id ? { ...row, checkedItem: checked } : row)),
      );
    };

    const selectedItems = tableData.filter(row => row.checkedItem);

    return (
      <Table>
        <Head>
          <Row isTransition>
            <HeaderCell>
              <CheckBoxItem
                checked={allChecked}
                onChange={toggleAll}
                isGroupControlled
                align="right"
              />
            </HeaderCell>
            {headers.map(({ label, key }) => (
              <HeaderCell key={key} align="left">
                {label}
              </HeaderCell>
            ))}
          </Row>
        </Head>
        <Body>
          {data.map(item => {
            const row = tableData.find(row => row.id === item.id);
            if (!row) return null;

            return (
              <Row key={item.id} isTransition useDelay index={item.id}>
                <BodyCell onClick={() => toggleOne(item.id, !row.checkedItem)}>
                  <CheckBoxItem
                    checked={row.checkedItem}
                    onChange={checked => toggleOne(item.id, checked)}
                    isGroupControlled
                    align="right"
                  />
                </BodyCell>
                {headers.map(({ key }, index) => {
                  const isLastColumn = index === headers.length - 1;

                  return (
                    <BodyCell
                      key={key}
                      align="left"
                      onClick={
                        !isLastColumn ? () => toggleOne(item.id, !row.checkedItem) : undefined
                      }
                    >
                      {item[key]}
                    </BodyCell>
                  );
                })}
              </Row>
            );
          })}
        </Body>
        <Footer>dsf</Footer>
      </Table>
    );
  },
};
