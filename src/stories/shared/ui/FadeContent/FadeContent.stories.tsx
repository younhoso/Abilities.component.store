import type { Meta, StoryObj } from '@storybook/react';

import FadeContent from '.';

const meta: Meta<typeof FadeContent> = {
  title: 'Shared/FadeContent',
  component: FadeContent,
  tags: ['autodocs'],
  parameters: {
    backgrounds: {
      default: 'light',
    },
  },
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof FadeContent>;

export const Default: Story = {
  args: {},
};
