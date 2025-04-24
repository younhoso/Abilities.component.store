import { DayPicker } from 'react-day-picker';

import { DayPickerStyled } from './styled';

interface SingleDatePickerProps {
  selected?: Date;
  onSelect?: (value: Date | undefined) => void;
}

const SingleDatePicker = ({ selected, onSelect }: SingleDatePickerProps) => (
  <DayPickerStyled>
    <DayPicker mode="single" selected={selected} onSelect={onSelect} />
  </DayPickerStyled>
);

export default SingleDatePicker;
