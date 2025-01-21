'use client';

import { useState } from 'react';

import clsx from 'clsx';

import CircleProgress from '@/components/CircleProgress/CircleProgress';
import { CircleStyled } from '@/styles/pageStyled/CircleStyled';

type CircularProgressPageProps = {
  initProgress: number;
};

const circularProgressPage: CircularProgressPageProps = {
  initProgress: 70,
};

export default function CircularProgressPage() {
  const [progress, setProgress] = useState<CircularProgressPageProps>(circularProgressPage);

  const handleValueChange = <T extends CircularProgressPageProps, K extends keyof T>(
    key: K,
    value: T[K],
  ) => {
    setProgress(prevProgressValue => {
      return {
        ...prevProgressValue,
        [key]: value,
      };
    });
  };

  return (
    <CircleStyled className={clsx('CirclePage')} value={{ color: '#76BAFF' }}>
      <div>
        <CircleProgress
          progress={progress.initProgress}
          strokeWidth={40}
          background={['#555']}
          color={['#008080', '#440893', '#ff8080']}
          duration={0.3}
        ></CircleProgress>
        <div className={'progressText'}>
          {/* <input
          type="text"
          min="0"
          max="100"
          value={progress.initProgress}
          onChange={e => handleValueChange('initProgress', Number(e.target.value))}
          className={'text'}
        /> */}
          <p className={'text'}>{progress.initProgress}</p>
          <p>총 100</p>
        </div>
      </div>

      <div>
        <CircleProgress
          progress={progress.initProgress}
          strokeWidth={40}
          background={['#555']}
          color={['#008080', '#440893', '#ff8080']}
          duration={0.3}
          isSemi
        ></CircleProgress>
        <div className={'progressText'}>
          {/* <input
          type="text"
          min="0"
          max="100"
          value={progress.initProgress}
          onChange={e => handleValueChange('initProgress', Number(e.target.value))}
          className={'text'}
        /> */}
          <p className={'text'}>{progress.initProgress}</p>
          <p>총 100</p>
        </div>
      </div>
    </CircleStyled>
  );
}
