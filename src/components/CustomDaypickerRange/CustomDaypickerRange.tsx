'use client';

import { DateRange, PropsRange } from 'react-day-picker';

import { Locale } from 'date-fns';

import { initialRangeProps } from '@/app/daypickerRange/page';

import { CustomDaypickerRangeStyled } from './styled';

type CustomDaypickerRangeProps = {
  locale: Locale;
  mode: PropsRange['mode'];
  numberOfMonths?: number;
  selected: DateRange;
  onSelect: (v: DateRange) => void;
  showOutsideDays: boolean;
  initialRange: initialRangeProps;
};

export default function CustomDaypickerRange(props: CustomDaypickerRangeProps) {
  const { selected } = props;

  return <CustomDaypickerRangeStyled {...props} selected={selected} required={true} />;
}
