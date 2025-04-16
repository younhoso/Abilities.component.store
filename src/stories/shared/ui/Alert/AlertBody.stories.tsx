import type { Meta, StoryObj } from '@storybook/react';

import { Alert } from '.';

const meta: Meta<typeof Alert> = {
  title: 'Shared/Alert',
  component: Alert,
  tags: ['autodocs'],
  parameters: {
    backgrounds: {
      default: 'light',
    },
  },
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof Alert>;

export const Default: Story = {
  args: {
    isOpenModal: true,
    setIsOpenModal: () => {},
  },
};
