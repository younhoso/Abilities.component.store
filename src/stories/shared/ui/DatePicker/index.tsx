import { DayPicker } from 'react-day-picker';

import { ko } from 'date-fns/locale';

import { Mode, PickerProps } from '../../types/datePicker';
import DatePickerContents from './DatePickerContents';
import DatePickerHeader from './DatePickerHeader';
import DayPickerModeSelector from './DayPickerModeSelector';
import DayPickerNav from './DayPickerNav';
import { DayPickerStyled } from './styled';

const BaseDatePicker = <M extends Mode>({
  mode,
  handlePrevMonth,
  handleNextMonth,
  today,
  selected,
  setCurrentMonth,
}: PickerProps<M>) => {
  return (
    <DayPickerStyled className="single">
      <DatePickerHeader>
        <h3>캘린더</h3>
        <DayPickerNav
          today={today}
          handlePrevMonth={handlePrevMonth}
          handleNextMonth={handleNextMonth}
        />
      </DatePickerHeader>

      {mode === 'single' && (
        <DayPicker
          mode={mode}
          locale={ko}
          weekStartsOn={0}
          month={today}
          selected={selected as Date | undefined}
          onMonthChange={setCurrentMonth}
          required={false}
          showOutsideDays
        />
      )}
    </DayPickerStyled>
  );
};

const SingleDatePicker = Object.assign(BaseDatePicker, {
  DatePickerHeader,
  DayPickerNav,
  DatePickerContents,
});

export { DatePickerHeader, DayPickerNav, DatePickerContents };

export default SingleDatePicker;
