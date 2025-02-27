import { RefObject, useCallback, useEffect, useState } from 'react';

type StickySection = {
  id: string; // 섹션을 고유하게 식별할 ID
  startRef: RefObject<HTMLElement>;
  endRef: RefObject<HTMLElement>;
};

type UseStickyOptions = {
  sections: StickySection[]; // 섹션 배열
  offset?: number; // 네비게이션 높이 오프셋
};

export const useSticky = ({ sections, offset = 0 }: UseStickyOptions) => {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  const handleScroll = useCallback(() => {
    const scrollTop = window.scrollY;

    let currentActiveSection: string | null = null;

    sections.forEach(section => {
      const startEl = section.startRef.current;
      const endEl = section.endRef.current;

      if (startEl && endEl) {
        const startOffset = startEl.offsetTop;
        const endOffset = endEl.offsetTop;

        if (scrollTop >= startOffset && scrollTop <= endOffset - offset) {
          currentActiveSection = section.id; // 섹션의 고유 ID 설정
        }
      }
    });

    setActiveSection(currentActiveSection);
  }, [sections, offset]);

  useEffect(() => {
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  return { activeSection };
};
