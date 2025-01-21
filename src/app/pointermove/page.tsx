'use client';

import { useState } from 'react';

import clsx from 'clsx';

import { useWindowListener } from '@/hooks/useWindowListener';
import { PointerStyled } from '@/styles/pageStyled/PointermovePageStyled';

export default function PointermovePage() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useWindowListener({
    eventType: 'pointermove',
    listener: (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    },
  });

  return (
    <div className={clsx('PointermovePage')}>
      <PointerStyled className="pointer" position={position} />
    </div>
  );
}
