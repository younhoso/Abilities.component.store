import type { Meta, StoryObj } from '@storybook/react';
import { ComponentType } from 'react';

import CheckBox, { CheckBoxGroupItem, CheckBoxItem } from '.';

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
    CheckBoxGroupItem: CheckBox.CheckBoxGroupItem as ComponentType<any>,
  },
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof CheckBox>;

export const CheckGroup: Story = {
  args: {
    title: 'Select cities',
    isGroupControlled: true,
  },
  render: args => {
    return (
      <CheckBox {...args}>
        <CheckBoxGroupItem label="Option 1" />
        <CheckBoxGroupItem label="Option 2" />
        <CheckBoxGroupItem label="Option 3" />
      </CheckBox>
    );
  },
};

export const CheckItem: Story = {
  render: () => {
    return <CheckBoxItem label="Option 1" />;
  },
};
