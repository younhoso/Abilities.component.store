import type { Meta, StoryObj } from '@storybook/react';

import AutoSizeImage from '.';

const meta: Meta<typeof AutoSizeImage> = {
  title: 'AutoSizeImage',
  component: AutoSizeImage,
  tags: ['autodocs'],
  parameters: {
    backgrounds: {
      default: 'light',
    },
  },
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof AutoSizeImage>;

export const Default: Story = {
  args: {},
};
