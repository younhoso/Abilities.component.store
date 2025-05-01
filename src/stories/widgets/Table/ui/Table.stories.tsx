import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';

import { CheckBoxItem } from '@/stories/shared/ui/CheckBox';

import Table, { Body, BodyCell, Head, HeaderCell, Row } from '.';
import { data, headers } from '../constants/TableData';

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
    const [checkedItems, setCheckedItems] = useState<boolean[]>(data.map(item => item.checkedItem));

    const allChecked = checkedItems.every(Boolean);

    const toggleAll = (checked: boolean) => {
      setCheckedItems(data.map(() => checked));
    };

    const toggleOne = (idx: number, checked: boolean) => {
      const updated = [...checkedItems];
      updated[idx] = checked;
      setCheckedItems(updated);
    };

    return (
      <Table>
        <Head>
          <Row isTransition>
            <HeaderCell align="left">
              <CheckBoxItem checked={allChecked} onChange={toggleAll} isGroupControlled />
            </HeaderCell>
            {headers.map(({ label, key }) => (
              <HeaderCell key={key} align="left">
                {label}
              </HeaderCell>
            ))}
          </Row>
        </Head>
        <Body>
          {data.map((item, rowIdx) => (
            <Row key={rowIdx} isTransition useDelay index={rowIdx}>
              <BodyCell align="left">
                <CheckBoxItem
                  checked={checkedItems[rowIdx]}
                  onChange={checked => toggleOne(rowIdx, checked)}
                  isGroupControlled
                />
              </BodyCell>
              {headers.map(({ key }) => (
                <BodyCell key={key} align="left">
                  {item[key]}
                </BodyCell>
              ))}
            </Row>
          ))}
        </Body>
      </Table>
    );
  },
};
