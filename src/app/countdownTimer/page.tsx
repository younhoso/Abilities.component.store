'use client';

import clsx from 'clsx';

import useCountdown from '@/hooks/useCountdown';
import { CountdownTimerPageStyled } from '@/styles/pageStyled/CountdownTimerPageStyled';

export default function CountdownTimerPage() {
  const [days, hours, minutes, seconds] = useCountdown('2025-02-20T23:59:59');

  return (
    <CountdownTimerPageStyled className={clsx('CountdownTimerPage')}>
      <h1>
        {days}일 {hours}시간 {minutes}분 {seconds}초 남음
      </h1>
    </CountdownTimerPageStyled>
  );
}
