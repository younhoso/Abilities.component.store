import type { Meta, StoryObj } from '@storybook/react';

import Alert from '.';

const meta: Meta<typeof Alert> = {
  title: 'Shared/ConfirmDialog',
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
    description: (
      <>
        삭제/수정 전 확인용 다이얼로그
        <br />
        ConfirmDialog
      </>
    ),
  },
};
