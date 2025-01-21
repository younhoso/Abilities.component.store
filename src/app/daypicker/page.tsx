'use client';

import { useState } from 'react';

import clsx from 'clsx';
import { addDays } from 'date-fns';
import { ko } from 'date-fns/locale';

import CustomDayPicker from '@/components/CustomDayPicker/CustomDayPicker';
import { DaypickerPageStyled } from '@/styles/pageStyled/DaypickerPageStyled';

export type initiallySelectedProps = {
  date: Date[];
};

const initiallySelectedDates = {
  date: [new Date(), addDays(new Date(), 0)],
};

export default function DaypickerPage() {
  const [selectedDate, setSelectedDate] = useState<initiallySelectedProps>(initiallySelectedDates);

  const handleValueChange = <T extends initiallySelectedProps, K extends keyof T>(
    key: K,
    value: T[K],
  ) => {
    setSelectedDate(prevSelectedValue => {
      return {
        ...prevSelectedValue,
        [key]: value,
      };
    });
  };

  const dayPickerProps = {
    locale: ko,
    mode: 'multiple' as const,
    numberOfMonths: 2,
    selected: selectedDate.date,
    onSelect: (s: Date[] | undefined) => handleValueChange('date', s || []),
    initiallySelectedDates,
  };

  return (
    <DaypickerPageStyled className={clsx('DaypickerPage')}>
      <h4>하나의 배열에서 여러 날짜를 선택(상태)를 유지합니다.</h4> <br />
      <CustomDayPicker {...dayPickerProps} />
    </DaypickerPageStyled>
  );
}
