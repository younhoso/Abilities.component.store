import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';

import { ko } from 'date-fns/locale';

import DatePicker from '.';
import { PickerProps } from '../../types/datePicker';

const meta: Meta<typeof DatePicker> = {
  title: 'Shared/DatePicker',
  component: DatePicker,
  tags: ['autodocs'],
  parameters: {
    backgrounds: {
      default: 'light',
    },
  },
  argTypes: {
    mode: {
      control: { type: 'select' },
      options: ['single', 'range', 'multiple'],
    },
  },
};

export default meta;

type Story = StoryObj<typeof DatePicker>;

export const Single: Story = {
  args: {
    mode: 'single',
    hideWeekdays: false,
    showOutsideDays: true,
    showWeekNumber: false,
    locale: ko,
    weekStartsOn: 0,
    numberOfMonths: 2,
  },

  render: args => {
    const typedArgs = args as PickerProps<'single'>;
    const [selected, setSelected] = useState<PickerProps<'single'>['selected']>();

    return <DatePicker selected={selected} onSelect={setSelected} {...typedArgs} />;
  },
};

export const Range: Story = {
  args: {
    mode: 'range',
    showOutsideDays: true,
    locale: ko,
    weekStartsOn: 0,
    numberOfMonths: 1,
  },

  render: args => {
    const typedArgs = args as PickerProps<'range'>;
    const [selected, setSelected] = useState<PickerProps<'range'>['selected']>(typedArgs.selected);

    return <DatePicker selected={selected} onSelect={setSelected} {...typedArgs} />;
  },
};

export const Multiple: Story = {
  args: {
    mode: 'multiple',
    showOutsideDays: true,
    locale: ko,
    weekStartsOn: 0,
    numberOfMonths: 1,
  },

  render: args => {
    const typedArgs = args as PickerProps<'multiple'>;
    const [selected, setSelected] = useState<PickerProps<'multiple'>['selected']>();

    return <DatePicker selected={selected} onSelect={setSelected} {...typedArgs} />;
  },
};
