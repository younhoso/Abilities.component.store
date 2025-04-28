import { DateRange, DayPicker } from 'react-day-picker';

import { ko } from 'date-fns/locale';

import { DatePickerHeader, DayPickerNav } from '.';
import { PickerProps } from '../../types/datePicker';
import { DayPickerStyled } from './styled';

const RangeDatePicker = ({
  mode,
  handlePrevMonth,
  handleNextMonth,
  today,
  selected,
  setCurrentMonth,
}: PickerProps<'range'>) => (
  <DayPickerStyled className="range">
    <DatePickerHeader>
      <h3>캘린더</h3>
      <DayPickerNav
        today={today}
        handlePrevMonth={handlePrevMonth}
        handleNextMonth={handleNextMonth}
      />
    </DatePickerHeader>

    {mode === 'range' && (
      <DayPicker
        mode={mode}
        locale={ko}
        weekStartsOn={0}
        month={today}
        selected={selected as DateRange | undefined}
        onMonthChange={setCurrentMonth}
        required={false}
      />
    )}
  </DayPickerStyled>
);

export default RangeDatePicker;
