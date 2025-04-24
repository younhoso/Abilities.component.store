import type { Meta, StoryObj } from '@storybook/react';

import ogImageV2 from 'public/og-imageV2.png';

import AutoSizeImage from '.';

const meta: Meta<typeof AutoSizeImage> = {
  title: 'Shared/AutoSizeImage',
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
  args: {
    src: ogImageV2,
    alt: '샘플 이미지',
    width: 300,
    height: 200,
  },
};
