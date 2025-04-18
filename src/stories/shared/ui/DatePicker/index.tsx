import { DateRange } from 'react-day-picker';

import { Mode, PickerProps } from '../../types/datePicker';
import MultipleDatePicker from './MultipleDatePicker';
import RangeDatePicker from './RangeDatePicker';
import SingleDatePicker from './SingleDatePicker';

const DatePicker = <M extends Mode>({ selected, onSelect, mode, ...rest }: PickerProps<M>) => {
  if (mode === 'multiple') {
    return (
      <MultipleDatePicker
        selected={selected as Date[] | undefined}
        onSelect={onSelect as (value: Date[] | undefined) => void}
        {...rest}
      />
    );
  }

  if (mode === 'range') {
    return (
      <RangeDatePicker
        selected={selected as DateRange | undefined}
        onSelect={onSelect as (value: DateRange | undefined) => void}
        {...rest}
      />
    );
  }

  return (
    <SingleDatePicker
      selected={selected as Date | undefined}
      onSelect={onSelect as (value: Date | undefined) => void}
      {...rest}
    />
  );
};

export default DatePicker;
