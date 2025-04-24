import { useEffect, useRef, useState } from 'react';

function useIntersectionObserver<T extends HTMLElement>({
  threshold = 0.1,
  root = null,
  rootMargin = '0px',
}: {
  threshold?: number;
  root?: Element | null;
  rootMargin?: string;
}) {
  const elementRef = useRef<T | null>(null); // 제네릭으로 요소 참조 타입 설정
  const [entry, setEntry] = useState<IntersectionObserverEntry | null>(null); // 관찰 중인 요소 정보
  const [isVisible, setIsVisible] = useState(false); // 요소의 노출 여부
  const observerRef = useRef<IntersectionObserver | null>(null); // IntersectionObserver 인스턴스

  const updateEntry = ([entry]: IntersectionObserverEntry[]): void => {
    setEntry(entry);
    setIsVisible(entry.isIntersecting); // 노출 여부 갱신
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

    // 클린업에서 사용을 위해 elementRef.current를 변수에 저장
    const currentElement = elementRef.current;

    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (observerRef.current && currentElement) {
        observerRef.current.unobserve(currentElement); // 컴포넌트 언마운트 시 옵저버 해제
      }
    };
  }, [root, rootMargin, threshold]);

  return { entry, isVisible, elementRef, observe, unobserve };
}

export default useIntersectionObserver;
