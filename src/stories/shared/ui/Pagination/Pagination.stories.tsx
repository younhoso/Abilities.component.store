import type { Meta, StoryObj } from '@storybook/react';

import { useArgs } from '@storybook/preview-api';

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
  args: {
    totalPages: 5,
    currentPage: 1,
    isPageOptions: false,
  },
  render: args => {
    const [{ isChecked }, updateArgs] = useArgs();

    const handleChange = (newValue: number) => {
      updateArgs({ isChecked: !isChecked, currentPage: newValue });
    };

    return <Pagination {...args} onChange={handleChange} />;
  },
};
