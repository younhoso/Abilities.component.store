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

export const Fade: Story = {
  args: {
    delay: 0.5,
    isObserver: false,
    children: <div>Fade 애니메이션</div>,
  },
};

export const Up: Story = {
  args: {
    direction: 'up',
    children: <div>Up 방향 애니메이션</div>,
  },
};

export const Down: Story = {
  args: {
    direction: 'down',
    children: <div>Down 방향 애니메이션</div>,
  },
};

export const Left: Story = {
  args: {
    direction: 'left',
    children: <div>Left 방향 애니메이션</div>,
  },
};

export const Right: Story = {
  args: {
    direction: 'right',
    children: <div>Right 방향 애니메이션</div>,
  },
};
