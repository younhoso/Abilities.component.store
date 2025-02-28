import { useState } from 'react';

export default function useTabs<T>(initialKey: T) {
  const [activeKey, setActiveKey] = useState<T>(initialKey);

  const handleTabs = (key: T) => {
    setActiveKey(key);
  };

  return {
    activeKey,
    handleTabs,
  };
}
