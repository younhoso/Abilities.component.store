import { useEffect, useState } from 'react';

function useDelayedActive(isOpen: boolean, delay: number) {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let timer: number | NodeJS.Timeout | undefined;
    if (isOpen) {
      timer = setTimeout(() => setIsActive(true), delay); // delay 딜레이 후 isActive 추가
    } else {
      setIsActive(false); // 모달이 닫힐 때 즉시 isActive 제거
    }
    return () => clearTimeout(timer); // 컴포넌트 언마운트 시 타이머 클리어
  }, [isOpen, delay]);

  return isActive;
}

export default useDelayedActive;
