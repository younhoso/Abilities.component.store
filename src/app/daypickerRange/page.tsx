'use client';

import { useState } from 'react';
import { DateRange } from 'react-day-picker';

import clsx from 'clsx';
import { addDays } from 'date-fns';
import { ko } from 'date-fns/locale';

import CustomDaypickerRange from '@/components/CustomDaypickerRange/CustomDaypickerRange';
import { DaypickerRangePageStyled } from '@/styles/pageStyled/DaypickerRangePageStyled';

export type initialRangeProps = {
  date: DateRange;
};

const initialRange: initialRangeProps = {
  date: {
    from: new Date(),
    to: addDays(new Date(), 7),
  },
};

export default function DaypickerRangePage() {
  const [range, setRange] = useState<initialRangeProps>(initialRange);

  const handleValueChange = <T extends initialRangeProps, K extends keyof T>(
    key: K,
    value: T[K],
  ) => {
    setRange(prevRangeValue => {
      return {
        ...prevRangeValue,
        [key]: value,
      };
    });
  };

  return (
    <DaypickerRangePageStyled className={clsx('DaypickerRangePage')}>
      <h4>하나의 객체에서 부터(from)~까지(to) 선택(상태)를 유지합니다.</h4> <br />
      <CustomDaypickerRange
        locale={ko}
        numberOfMonths={2}
        mode={'range'}
        selected={range.date}
        onSelect={(v: DateRange) => handleValueChange('date', v)}
        showOutsideDays={true}
        initialRange={initialRange}
      />
    </DaypickerRangePageStyled>
  );
}
