import { MouseEvent, RefObject, useState } from 'react';

import { delay } from '@/utils/delay';

interface Ripple {
  id: string;
  left: number;
  top: number;
  size: number;
}

const RIPPLETIME = 600; // ripple 지속시간

export const useRipple = (ref: RefObject<HTMLElement>, isRippleEffect: boolean) => {
  const [ripples, setRipples] = useState<Ripple[]>([]);

  const triggerRipple = async (e: MouseEvent) => {
    if (!isRippleEffect || !ref.current) return;

    const button = ref.current;
    const rect = button.getBoundingClientRect();
    const size = Math.max(button.clientWidth, button.clientHeight);
    const id = Date.now().toString();

    const newRipple: Ripple = {
      id,
      left: e.clientX - rect.left - size / 2,
      top: e.clientY - rect.top - size / 2,
      size,
    };

    setRipples(prev => [...prev, newRipple]);

    await delay(RIPPLETIME);
    setRipples(prev => prev.filter(r => r.id !== id));
  };

  const RippleElements = ripples.map(ripple => (
    <span
      key={ripple.id}
      className="ripple"
      style={{
        width: ripple.size,
        height: ripple.size,
        left: ripple.left,
        top: ripple.top,
      }}
    />
  ));

  console.log(RippleElements);

  return { triggerRipple, RippleElements };
};
