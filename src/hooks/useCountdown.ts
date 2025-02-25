import { useEffect, useState } from 'react';

const useCountdown = (deadline: string) => {
  const [timeLeft, setTimeLeft] = useState<[number, number, number, number]>([0, 0, 0, 0]);

  useEffect(() => {
    const calculateTimeLeft = (): [number, number, number, number] => {
      const difference = new Date(deadline).getTime() - new Date().getTime();
      if (difference <= 0) return [0, 0, 0, 0] as const; // 튜플 타입 유지

      return [
        Math.floor(difference / (1000 * 60 * 60 * 24)), // days
        Math.floor((difference / (1000 * 60 * 60)) % 24), // hours
        Math.floor((difference / (1000 * 60)) % 60), // minutes
        Math.floor((difference / 1000) % 60), // seconds
      ] as const;
    };

    setTimeLeft(calculateTimeLeft()); // 클라이언트에서만 상태 업데이트

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [deadline]);

  return timeLeft;
};

export default useCountdown;
