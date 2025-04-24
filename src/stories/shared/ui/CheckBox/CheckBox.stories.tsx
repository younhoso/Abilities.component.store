import type { Meta, StoryObj } from '@storybook/react';

import { useArgs } from '@storybook/preview-api';

import CheckBox from '.';

const meta: Meta<typeof CheckBox> = {
  title: 'Shared/CheckBox',
  component: CheckBox,
  tags: ['autodocs'],
  parameters: {
    backgrounds: {
      default: 'light',
    },
  },
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof CheckBox>;

export const CheckItem: Story = {
  args: {
    label: 'Select Item',
    checked: false,
    disabled: false,
  },
  render: args => {
    const [_, updateArgs] = useArgs();

    const toggleOne = (checked: boolean) => {
      updateArgs({ checked }); // 상태를 직접 업데이트
    };

    return <CheckBox {...args} onChange={toggleOne} />;
  },
};
