'use client';

import { PropsMulti } from 'react-day-picker';

import { Locale } from 'date-fns';

import { DayPickerStyled } from './styled';

type CustomDayPickerProps = {
  locale: Locale;
  mode: PropsMulti['mode'];
  numberOfMonths?: number;
  selected: Date[];
  onSelect: (v: Date[] | undefined) => void;
  initiallySelectedDates: { date: Date[] };
};

export default function CustomDayPicker(props: CustomDayPickerProps) {
  const { selected, onSelect } = props;

  return (
    <DayPickerStyled
      {...props}
      selected={selected}
      onSelect={(dates: Date[] | undefined) => onSelect(dates || [])}
    />
  );
}
