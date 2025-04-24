import { DayPicker } from 'react-day-picker';

import { DayPickerStyled } from './styled';

interface MultipleDatePickerProps {
  selected?: Date[];
  onSelect?: (value: Date[] | undefined) => void;
}

const MultipleDatePicker = ({ selected, onSelect }: MultipleDatePickerProps) => (
  <DayPickerStyled>
    <DayPicker mode="multiple" selected={selected} onSelect={onSelect} />
  </DayPickerStyled>
);

export default MultipleDatePicker;
