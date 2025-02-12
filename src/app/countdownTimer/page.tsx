'use client';

import clsx from 'clsx';

import useCountdown from '@/hooks/useCountdown';
import { CountdownTimerPageStyled } from '@/styles/pageStyled/CountdownTimerPageStyled';

export default function CountdownTimerPage() {
  const timeLeft = useCountdown('2025-02-12T23:59:59');

  if (!timeLeft) return <p>로딩중...</p>;

  return (
    <CountdownTimerPageStyled className={clsx('CountdownTimerPage')}>
      <h1>
        {timeLeft.days}일 {timeLeft.hours}시간 {timeLeft.minutes}분 {timeLeft.seconds}초 남음
      </h1>
    </CountdownTimerPageStyled>
  );
}
