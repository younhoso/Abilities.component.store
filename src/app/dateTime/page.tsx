import clsx from 'clsx';

import DateTime from '@/components/DateTime/DateTime';
import { DateTimePageStyled } from '@/styles/pageStyled/DateTimePageStyled';

export default function DateTimePage() {
  const date = '2024-08-29T00:00:00.000Z';

  return (
    <DateTimePageStyled className={clsx('dateTimePage')}>
      <DateTime format="YYYY년 M월 D일 HH : mm : ss">{date}</DateTime>
    </DateTimePageStyled>
  );
}
