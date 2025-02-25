import { useState } from 'react';

export default function useTabs<T>(initialKey: T) {
  const [activeKey, setActiveKey] = useState<T>(initialKey);

  const tabSwitch = (key: T) => {
    setActiveKey(key);
  };

  return {
    activeKey,
    tabSwitch,
  };
}
