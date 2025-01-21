import { ReactNode, useEffect, useRef, useState } from 'react';

import clsx from 'clsx';

import { CircleProgressStyle } from './styled';

export type CircleProgressProps = {
  progress: number; // A number between 0 and 100
  strokeWidth: number;
  background: string[];
  color: string[];
  duration?: number; // Animation duration in seconds
  children?: ReactNode;
  isSemi?: boolean;
};

export default function CircleProgress({
  progress,
  strokeWidth,
  background,
  color,
  children,
  duration = 0.5, // default duration of 1 second
  isSemi = false,
}: CircleProgressProps) {
  const [size, setSize] = useState<number>(0);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const progressRef = useRef<SVGPathElement | null>(null);

  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;

  const semicircleCircumference = circumference / 2;
  const strokeArray = isSemi ? semicircleCircumference : circumference;
  const strokeOffset = isSemi ? semicircleCircumference : circumference;

  const arcPath = isSemi
    ? `M ${size / 2},${size / 2} m -${radius},0 a ${radius},${radius} 0 1,1 ${2 * radius},0`
    : `M ${size / 2},${size / 2 - radius} a ${radius},${radius} 0 1,1 0,${2 * radius} a ${radius},${radius} 0 1,1 0,-${2 * radius}`;

  useEffect(() => {
    const container: HTMLDivElement | null = containerRef.current;
    const observer = new ResizeObserver(entries => {
      if (entries[0].contentRect) {
        const { width, height } = entries[0].contentRect;
        setSize(isSemi ? Math.min(width, height * 2 - strokeWidth) : Math.min(width, height));
      }
    });

    if (container) observer.observe(container);

    return () => {
      if (container) observer.unobserve(container);
    };
  }, [isSemi, strokeWidth]);

  useEffect(() => {
    if (progressRef.current && size) {
      const path = progressRef.current;
      const startTime = performance.now();
      const initialOffset = strokeOffset;
      const targetOffset = strokeOffset - (progress / 100) * strokeArray;

      const animate = (currentTime: number) => {
        const elapsedTime = (currentTime - startTime) / 1000;
        const progressFraction = Math.min(elapsedTime / duration, 1);
        const currentOffset = initialOffset + (targetOffset - initialOffset) * progressFraction;
        if (path) path.setAttribute('stroke-dashoffset', String(currentOffset));
        if (progressFraction < 1) requestAnimationFrame(animate);
      };

      requestAnimationFrame(animate);
    }
  }, [duration, progress, size, strokeArray, strokeOffset]);

  return (
    <CircleProgressStyle ref={containerRef} className={'circularProgressContainer'}>
      {size && (
        <>
          <svg
            width={size}
            height={isSemi ? size / 2 + strokeWidth / 2 : size}
            className={clsx(isSemi && 'semi')}
          >
            {/* Background Path */}
            <defs>
              <linearGradient id="backgroundGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                {background.map((c, index) => (
                  <stop
                    key={c}
                    offset={`${background.length === 1 ? 100 : (index / (background.length - 1)) * 100}%`}
                    stopColor={c}
                  />
                ))}
              </linearGradient>
            </defs>
            {/* Background Path // */}

            <defs>
              <linearGradient id="backgroudnGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                {background.length > 2 &&
                  background.map((c, index) => (
                    <stop
                      key={c}
                      offset={`${background.length === 1 ? 100 : (index / (background.length - 1)) * 100}%`}
                      stopColor={c}
                    />
                  ))}
              </linearGradient>
            </defs>
            <defs>
              <linearGradient id="colorGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                {color.map((c, index) => (
                  <stop
                    key={c}
                    offset={`${color.length === 1 ? 100 : (index / (color.length - 1)) * 100}%`}
                    stopColor={c}
                  />
                ))}
              </linearGradient>
            </defs>
            <path
              d={arcPath}
              stroke="url(#backgroundGradient)"
              fill="transparent"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeDasharray={strokeArray}
              strokeDashoffset={0}
            />
            <path
              ref={progressRef}
              d={arcPath}
              stroke="url(#colorGradient)"
              fill="transparent"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeDasharray={strokeArray}
              strokeDashoffset={strokeOffset}
            />
          </svg>
          <div className={clsx(isSemi && 'semi')}>{children}</div>
        </>
      )}
    </CircleProgressStyle>
  );
}
