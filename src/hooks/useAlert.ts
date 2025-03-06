import { useState } from 'react';

type AlertProps = {
  id?: number; // id는 내부적으로 추가되므로 선택적(optional) 속성
  message: string;
  mode?: 'success' | 'error' | 'warning' | 'info'; // 더 다양한 모드 추가
  duration?: number; // duration도 선택적(optional) 속성
};

export function useAlert() {
  const [alerts, setAlerts] = useState<AlertProps[]>([]);

  const alert = ({ message, mode = 'error', duration = 2000 }: AlertProps) => {
    const id = Date.now();
    setAlerts(prev => [...prev, { id, message, mode }]); // 기존 배열 유지하며 추가
    setTimeout(() => {
      setAlerts(prev => prev.filter(alert => alert.id !== id)); // 최신 상태 유지
    }, duration);
  };

  const success = (message: string) => alert({ message, mode: 'success', duration: 2000 });
  const error = (message: string) => alert({ message, mode: 'error', duration: 2000 });

  return {
    alerts,
    alert,
    success,
    error,
  };
}
