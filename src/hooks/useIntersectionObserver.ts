import { useEffect, useRef, useState } from 'react';

function useIntersectionObserver({ threshold = 0.1, root = null, rootMargin = '0px' }) {
  const [entry, setEntry] = useState<IntersectionObserverEntry | null>(null); //현재 관찰 중인 요소 정보를 저장.
  const [isIntersecting, setIsIntersecting] = useState(false); //요소가 화면에 보이는지 여부를 boolean 값으로 저장.
  const observerRef = useRef<IntersectionObserver | null>(null); // IntersectionObserver 인스턴스를 저장하는 ref.

  const updateEntry = ([entry]: IntersectionObserverEntry[]): void => {
    setEntry(entry);
    setIsIntersecting(entry.isIntersecting);
  };

  const observe = (element: Element | null) => {
    if (observerRef.current && element) {
      observerRef.current.observe(element);
    }
  };

  const unobserve = (element: Element | null) => {
    if (observerRef.current && element) {
      observerRef.current.unobserve(element);
    }
  };

  useEffect(() => {
    const hasIOSupport = !!window.IntersectionObserver;

    if (!hasIOSupport) return;

    const observerParams = { root, rootMargin, threshold };
    const observer = new IntersectionObserver(updateEntry, observerParams);

    observerRef.current = observer;

    return () => observer.disconnect();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [root, rootMargin, JSON.stringify(threshold)]);

  return { entry, isIntersecting, observe, unobserve };
}

export default useIntersectionObserver;
