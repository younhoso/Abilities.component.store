import type { Meta, StoryObj } from '@storybook/react';

import Example from '.';

const meta: Meta<typeof Example> = {
  title: 'Shared/Button',
  component: Example,
  tags: ['autodocs'],
  parameters: {
    backgrounds: {
      default: 'light',
    },
  },
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof Example>;

export const Default: Story = {
  args: {},
};
