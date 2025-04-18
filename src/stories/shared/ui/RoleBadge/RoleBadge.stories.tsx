import type { Meta, StoryObj } from '@storybook/react';

import RoleBadge from '.';

const meta: Meta<typeof RoleBadge> = {
  title: 'Shared/RoleBadge',
  component: RoleBadge,
  tags: ['autodocs'],
  parameters: {
    backgrounds: {
      default: 'light',
    },
  },
  argTypes: {
    role: {
      control: { type: 'select' },
      options: ['admin', 'guest', 'user'],
    },
  },
};

export default meta;

type Story = StoryObj<typeof RoleBadge>;

export const AdminBadge: Story = {
  args: {
    role: 'admin',
  },
};

export const GuestBadge: Story = {
  args: {
    role: 'guest',
  },
};

export const UserBadge: Story = {
  args: {
    role: '',
  },
};
