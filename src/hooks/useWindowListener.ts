import { useEffect } from 'react';

interface UseWindowListenerProps {
  eventType: string;
  listener: (e: MouseEvent) => void;
}

export function useWindowListener({ eventType, listener }: UseWindowListenerProps) {
  useEffect(() => {
    // EventListener 타입으로 캐스팅
    const eventListener: EventListener = e => listener(e as MouseEvent);

    window.addEventListener(eventType, eventListener);
    return () => {
      window.removeEventListener(eventType, eventListener);
    };
  }, [eventType, listener]);
}
