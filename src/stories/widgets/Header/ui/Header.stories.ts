import type { Meta, StoryObj } from '@storybook/react';

import Header from '.';

const meta: Meta<typeof Header> = {
  title: 'Widgets/Header',
  component: Header,
  tags: ['autodocs'],
  parameters: {
    backgrounds: {
      default: 'light',
    },
  },
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof Header>;

export const Default: Story = {
  args: {},
};
