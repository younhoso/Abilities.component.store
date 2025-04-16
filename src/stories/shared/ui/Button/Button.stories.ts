import type { Meta, StoryObj } from '@storybook/react';

import { Button } from '.';

const meta: Meta<typeof Button> = {
  title: 'Shared/Button',
  component: Button,
  tags: ['autodocs'],
  parameters: {
    backgrounds: {
      default: 'light',
    },
  },
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof Button>;

export const PrimaryMode: Story = {
  args: {
    mode: 'primary',
    children: '제출',
    className: '',
  },
};

export const SecondaryMode: Story = {
  args: {
    mode: 'secondary',
    children: '취소',
    className: '',
  },
};

export const DisabledMode: Story = {
  args: {
    mode: 'disabled',
    children: '비활성화 버튼',
    className: '',
  },
};
