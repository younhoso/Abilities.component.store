import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';

import Pagination from '.';

const meta: Meta<typeof Pagination> = {
  title: 'Shared/Pagination',
  component: Pagination,
  tags: ['autodocs'],
  parameters: {
    backgrounds: {
      default: 'light',
    },
  },
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof Pagination>;

export const Default: Story = {
  render: () => {
    const [page, setPage] = useState(1);

    return <Pagination currentPage={page} totalPages={5} onChange={setPage} />;
  },
};
