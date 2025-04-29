import type { Meta, StoryObj } from '@storybook/react';

import { useArgs } from '@storybook/preview-api';

import Select, { SelectContent, SelectItem, SelectTrigger } from '.';

const meta: Meta<typeof Select> = {
  title: 'Shared/Select',
  component: Select,
  tags: ['autodocs'],
  parameters: {
    backgrounds: {
      default: 'light',
    },
  },
  argTypes: {
    value: {
      control: {
        type: 'select',
      },
      options: ['옵션 1', '옵션 2', '옵션 3'],
    },
  },
};

export default meta;

type Story = StoryObj<typeof Select>;

export const Default: Story = {
  args: {
    value: '옵션 1',
  },
  render: () => {
    const [args, updateArgs] = useArgs();

    const handleChange = (newValue: string) => {
      updateArgs({ value: newValue });
    };

    return (
      <Select value={args.value} onValueChange={handleChange}>
        <SelectTrigger />
        <SelectContent>
          <SelectItem value="옵션 1">옵션 1</SelectItem>
          <SelectItem value="옵션 2">옵션 2</SelectItem>
          <SelectItem value="옵션 3">옵션 3</SelectItem>
        </SelectContent>
      </Select>
    );
  },
};
