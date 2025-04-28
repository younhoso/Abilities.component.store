import { DayPicker } from 'react-day-picker';

import { format } from 'date-fns';
import { ko } from 'date-fns/locale';

import { DatePickerHeader, DayPickerNav } from '.';
import { PickerProps } from '../../types/datePicker';
import Button, { ButtonItem } from '../Button';
import { DayPickerStyled } from './styled';

const MultipleDatePicker = ({
  mode,
  handlePrevMonth,
  handleNextMonth,
  today,
  selected,
  setCurrentMonth,
}: PickerProps<'multiple'>) => (
  <DayPickerStyled className="multiple">
    <DatePickerHeader>
      <h3>캘린더</h3>
      <DayPickerNav
        today={today}
        handlePrevMonth={handlePrevMonth}
        handleNextMonth={handleNextMonth}
      />
    </DatePickerHeader>

    {mode === 'multiple' && (
      <DayPicker
        mode="multiple"
        locale={ko}
        weekStartsOn={0}
        month={today}
        onMonthChange={setCurrentMonth}
        selected={selected as Date[] | undefined}
        required={false}
      />
    )}
  </DayPickerStyled>
);

export default MultipleDatePicker;
