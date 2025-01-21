'use client';

import { useRef } from 'react';

import clsx from 'clsx';

import StickyNavi from '@/components/StickyNavi';
import { useSticky } from '@/hooks/useSticky';
import { StickyNavPageStyled } from '@/styles/pageStyled/StickyNavPageStyled';

export default function StickyNaviPage() {
  const sectionRefs = [
    { id: 'section-1', startRef: useRef<HTMLElement>(null), endRef: useRef<HTMLElement>(null) },
    { id: 'section-2', startRef: useRef<HTMLElement>(null), endRef: useRef<HTMLElement>(null) },
    { id: 'section-3', startRef: useRef<HTMLElement>(null), endRef: useRef<HTMLElement>(null) },
  ];

  const { activeSection } = useSticky({
    sections: sectionRefs,
  });

  return (
    <StickyNavPageStyled className={clsx('StickyNavPage')}>
      <StickyNavi>
        <div>
          <nav className={`sticky-nav ${activeSection === 'section-1' ? 'fixed' : ''}`}>
            <ul>
              <li className={activeSection === 'section-1' ? 'active' : ''}>Section 1</li>
              <li className={activeSection === 'section-2' ? 'active' : ''}>Section 2</li>
              <li className={activeSection === 'section-3' ? 'active' : ''}>Section 3</li>
            </ul>
          </nav>

          <section ref={sectionRefs[0].startRef} className="start-section">
            Start Section
          </section>
          <section style={{ height: '800px' }}>Middle Content</section>
          <section ref={sectionRefs[0].endRef} className="end-section">
            End Section
          </section>

          <section ref={sectionRefs[1].startRef} className="start-section">
            Start Section1
          </section>
          <section style={{ height: '800px' }}>Middle Content1</section>
          <section ref={sectionRefs[1].endRef} className="end-section">
            End Section1
          </section>

          <section ref={sectionRefs[2].startRef} className="start-section">
            Start Section2
          </section>
          <section style={{ height: '800px' }}>Middle Content2</section>
          <section ref={sectionRefs[2].endRef} className="end-section">
            End Section2
          </section>
        </div>
      </StickyNavi>
    </StickyNavPageStyled>
  );
}
