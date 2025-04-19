import type { Meta, StoryObj } from '@storybook/react';
import { ComponentType } from 'react';

import { CheckBoxGroup, CheckBoxGroupItem, CheckBoxItem } from '.';

const meta: Meta<typeof CheckBoxGroup> = {
  title: 'Shared/CheckBox',
  component: CheckBoxGroup,
  tags: ['autodocs'],
  parameters: {
    backgrounds: {
      default: 'light',
    },
  },
  subcomponents: {
    CheckBoxGroupItem: CheckBoxGroup.CheckBoxGroupItem as ComponentType<any>,
  },
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof CheckBoxGroup>;

export const CheckGroup: Story = {
  args: {
    title: 'Select cities',
  },
  render: ({ title }) => {
    return (
      <CheckBoxGroup title={title}>
        <CheckBoxGroupItem label="Option 1" />
        <CheckBoxGroupItem label="Option 2" />
        <CheckBoxGroupItem label="Option 3" />
      </CheckBoxGroup>
    );
  },
};

export const CheckItem: Story = {
  render: () => {
    return (
      <>
        <CheckBoxItem label="Option 1" />
        <CheckBoxItem label="Option 2" />
      </>
    );
  },
};
