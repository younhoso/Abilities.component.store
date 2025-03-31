import { useEffect, useRef } from 'react';

import clsx from 'clsx';

import { FadeContentStyled } from './styled';

interface Props extends PropsWithChildren {
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
  isObserver?: boolean;
}

const FadeContent = ({ delay = 0, direction, isObserver = false, children }: Props) => {
  const observeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isObserver) return;

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting && observeRef.current) {
          const contentElement = observeRef.current.querySelector(
            `.${clsx('content')}`,
          ) as HTMLDivElement;
          contentElement.style.animationDelay = `${delay}s`;
          contentElement.classList.add(clsx('animate'));
          observer.unobserve(entry.target);
        }
      });
    });

    if (observeRef.current) {
      observer.observe(observeRef.current);
    }

    return () => observer.disconnect();
  }, [delay, isObserver]);

  if (isObserver) {
    return (
      <FadeContentStyled ref={observeRef} className={clsx(direction)}>
        <div className={clsx('content', direction)}>{children}</div>
      </FadeContentStyled>
    );
  }

  return (
    <FadeContentStyled className={clsx(direction)}>
      <div className={clsx('content animate', direction)} style={{ animationDelay: `${delay}s` }}>
        {children}
      </div>
    </FadeContentStyled>
  );
};

export default FadeContent;
