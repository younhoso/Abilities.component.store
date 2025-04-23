import type { Meta, StoryObj } from '@storybook/react';

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
    return (
      <Table>
        <Head>
          <Row>
            {headers.map(({ label, key }) => (
              <HeaderCell key={key} align="left">
                {label}
              </HeaderCell>
            ))}
          </Row>
        </Head>
        <Body>
          {data.map((item, rowIdx) => (
            <Row key={rowIdx}>
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
