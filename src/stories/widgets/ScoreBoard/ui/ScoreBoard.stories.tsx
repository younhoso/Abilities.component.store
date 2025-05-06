import type { Meta, StoryObj } from '@storybook/react';

import K05 from 'public/images/K05.png';
import K29 from 'public/images/K29.png';

import ScoreBoard from '.';

const meta: Meta<typeof ScoreBoard> = {
  title: 'Widgets/ScoreBoard',
  component: ScoreBoard,
  tags: ['autodocs'],
  parameters: {
    backgrounds: {
      default: 'light',
    },
  },
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof ScoreBoard>;

export const Default: Story = {
  args: {
    date: '2025.05.10(토)',
    TeamA: {
      name: 'A 팀',
      logoUrl: K05,
      score: 0,
    },
    TeamB: {
      name: 'B 팀',
      logoUrl: K29,
      score: 0,
    },
    sportName: '축구',
  },
};
