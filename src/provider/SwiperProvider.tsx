import { Children, ReactNode } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import clsx from 'clsx';
import 'swiper/css';

type SwiperProviderProps = {
  children: ReactNode;
  className?: string;
};

export default function SwiperProvider({ children, className }: SwiperProviderProps) {
  return (
    <Swiper spaceBetween={0} slidesPerView={1} className={clsx(className)}>
      {Children.map(children, (child, index) => {
        return <SwiperSlide key={index}>{child}</SwiperSlide>;
      })}
    </Swiper>
  );
}
