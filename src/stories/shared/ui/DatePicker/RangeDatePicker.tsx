import { DateRange, DayPicker } from 'react-day-picker';

import { DayPickerStyled } from './styled';

interface RangeDatePickerProps {
  selected?: DateRange;
  onSelect?: (value: DateRange | undefined) => void;
}

const RangeDatePicker = ({ selected, onSelect }: RangeDatePickerProps) => (
  <DayPickerStyled>
    <DayPicker mode="range" selected={selected} onSelect={onSelect} />
  </DayPickerStyled>
);

export default RangeDatePicker;
