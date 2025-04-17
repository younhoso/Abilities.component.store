import { DateRange, DayPicker } from 'react-day-picker';

import { Mode, PickerProps } from '../../types/dayPicker';
import { DayPickerStyled } from './styled';

const DayPick = <M extends Mode>({ selected, onSelect, mode, ...rest }: PickerProps<M>) => {
  console.log(selected);
  return (
    <DayPickerStyled>
      {mode === 'single' ? (
        <DayPicker
          mode="single"
          selected={selected as Date | undefined}
          onSelect={onSelect as (value: Date | undefined) => void}
          {...rest}
        />
      ) : mode === 'range' ? (
        <DayPicker
          mode="range"
          selected={selected as DateRange | undefined}
          onSelect={onSelect as (value: DateRange | undefined) => void}
          {...rest}
        />
      ) : (
        <DayPicker
          mode="multiple"
          selected={selected as Date[] | undefined}
          onSelect={onSelect as (value: Date[] | undefined) => void}
          {...rest}
        />
      )}
    </DayPickerStyled>
  );
};

export default DayPick;
