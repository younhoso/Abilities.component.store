import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { DateRange } from 'react-day-picker';

import { addMonths, format, subMonths } from 'date-fns';
import { ko } from 'date-fns/locale';

import SingleDatePicker from '.';
import { PickerProps } from '../../types/datePicker';
import MultipleDatePicker from './MultipleDatePicker';
import RangeDatePicker from './RangeDatePicker';

const meta: Meta<typeof SingleDatePicker> = {
  title: 'Shared/DatePicker',
  component: SingleDatePicker,
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

type Story = StoryObj<typeof SingleDatePicker>;

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
    const [currentMonth, setCurrentMonth] = useState(new Date());

    const handleSelect = (date: Date | undefined) => {
      setSelected(date);
    };

    return (
      <SingleDatePicker
        {...typedArgs}
        today={currentMonth}
        selected={selected}
        onSelect={handleSelect}
        setCurrentMonth={setCurrentMonth}
        handlePrevMonth={() => setCurrentMonth(subMonths(currentMonth, 1))}
        handleNextMonth={() => setCurrentMonth(addMonths(currentMonth, 1))}
      />
    );
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
    const [currentMonth, setCurrentMonth] = useState(new Date());

    const handleSelect = (date: DateRange | undefined) => {
      setSelected(date);
    };

    if (selected?.from && selected?.to) {
      const payload = {
        from: format(selected.from, 'yyyy-MM-dd'),
        to: format(selected.to, 'yyyy-MM-dd'),
      };

      console.log(payload);
    }

    return (
      <RangeDatePicker
        {...typedArgs}
        today={currentMonth}
        selected={selected}
        onSelect={handleSelect}
        setCurrentMonth={setCurrentMonth}
        handlePrevMonth={() => setCurrentMonth(subMonths(currentMonth, 1))}
        handleNextMonth={() => setCurrentMonth(addMonths(currentMonth, 1))}
      />
    );
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
    const [currentMonth, setCurrentMonth] = useState(new Date());

    const handleSelect = (date: Date[] | undefined) => {
      setSelected(date);
    };

    if (selected && selected.length > 0) {
      const payload = {
        dates: selected.map(date => format(date, 'yyyy-MM-dd')),
      };

      console.log(payload);
    }

    return (
      <MultipleDatePicker
        {...typedArgs}
        today={currentMonth}
        selected={selected}
        onSelect={handleSelect}
        setCurrentMonth={setCurrentMonth}
        handlePrevMonth={() => setCurrentMonth(subMonths(currentMonth, 1))}
        handleNextMonth={() => setCurrentMonth(addMonths(currentMonth, 1))}
      />
    );
  },
};
