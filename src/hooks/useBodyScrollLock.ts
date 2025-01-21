import { useEffect } from 'react';

export const useBodyScrollLock = (className: string, isLocked: boolean) => {
  useEffect(() => {
    if (isLocked) {
      document.body.classList.add(className);
    } else {
      document.body.classList.remove(className);
    }

    return () => {
      document.body.classList.remove(className);
    };
  }, [className, isLocked]);
};
