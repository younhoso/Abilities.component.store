import type { Meta, StoryObj } from '@storybook/react';
import { ComponentType } from 'react';

import CheckBox, { CheckBoxItem } from '.';
import CheckBoxTrigger from './CheckBoxTrigger';

const meta: Meta<typeof CheckBox> = {
  title: 'Shared/CheckBox',
  component: CheckBox,
  tags: ['autodocs'],
  parameters: {
    backgrounds: {
      default: 'light',
    },
  },
  subcomponents: {
    CheckBoxGroupItem: CheckBox.CheckBoxItem as ComponentType<any>,
  },
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof CheckBox>;

export const CheckItem: Story = {
  args: {
    isGroupControlled: false,
  },
  render: args => {
    return (
      <CheckBox {...args}>
        <CheckBoxTrigger>Select Item</CheckBoxTrigger>
        <CheckBoxItem label="Option 1" />
        <CheckBoxItem label="Option 2" />
        <CheckBoxItem label="Option 3" />
      </CheckBox>
    );
  },
};

export const CheckGroup: Story = {
  args: {
    isGroupControlled: true,
  },
  render: args => {
    return (
      <CheckBox {...args}>
        <CheckBoxTrigger>Select Group Item</CheckBoxTrigger>
        <CheckBoxItem label="Option 1" />
        <CheckBoxItem label="Option 2" />
        <CheckBoxItem label="Option 3" />
      </CheckBox>
    );
  },
};
