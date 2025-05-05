import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';

import { useArgs } from '@storybook/preview-api';

import OptionTabs from '.';

const meta: Meta<typeof OptionTabs> = {
  title: 'Shared/OptionTabs',
  component: OptionTabs,
  tags: ['autodocs'],
  parameters: {
    backgrounds: {
      default: 'light',
    },
  },
  argTypes: {
    value: {
      control: 'inline-radio',
      options: ['일', '주', '월'],
    },
  },
};

export default meta;

type Story = StoryObj<typeof OptionTabs>;

export const Default: Story = {
  args: {
    options: ['일', '주', '월'],
    value: '일',
  },
  render: () => {
    const [args, updateArgs] = useArgs();

    const handleClick = (newValue: string) => {
      updateArgs({ value: newValue });
    };

    return <OptionTabs options={args.options} value={args.value} onChange={handleClick} />;
  },
};
