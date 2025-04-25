'use client';

import { useEffect, useState } from 'react';

import Image from 'next/image';

import clsx from 'clsx';

import Bottomsheet from '@/components/Bottomsheet/Bottomsheet';
import SwiperProvider from '@/provider/SwiperProvider';
import { PopupBottomsheetPageStyled } from '@/styles/pageStyled/PopupBottomsheetPageStyled';

import popupImage1 from '../../../public/images/popupImage1.png';
import popupImage2 from '../../../public/images/popupImage2.png';

const images = [
  { id: 1, src: popupImage1, label: 'Image 1' },
  { id: 2, src: popupImage2, label: 'Image 2' },
];

export default function PopupBottomsheetPage() {
  const [openModal, setOpenMoal] = useState(false);

  useEffect(() => {
    setOpenMoal(true);
  }, []);

  return (
    <PopupBottomsheetPageStyled className={clsx('PopupBottomsheetPage')}>
      <Bottomsheet
        mode={'popupBottomsheet'}
        openModal={openModal}
        setOpenMoal={v => setOpenMoal(v)}
      >
        <SwiperProvider className={clsx('popupBottomsheetInner')}>
          {images.map(item => {
            return (
              <li key={item.id} className={clsx('popupBottomsheetItem')}>
                <Image src={item.src} alt={item.label} style={{ width: '100%', height: '100%' }} />
              </li>
            );
          })}
        </SwiperProvider>
        <div className="buttonWrapper">
          <button className="setSkipTodayBtn">오늘 하루 보지 않기</button>
          <button className="popupCloseBtn" onClick={() => setOpenMoal(false)}>
            닫기
          </button>
        </div>
      </Bottomsheet>

      <div onClick={() => setOpenMoal(true)}>
        <button>PopupBottomsheetPage 버튼</button>
      </div>
    </PopupBottomsheetPageStyled>
  );
}
