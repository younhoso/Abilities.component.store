'use client';

import { useState } from 'react';

import dynamic from 'next/dynamic';

import clsx from 'clsx';

import ContentsDetail from '@/components/ContentsDetail/ContentsDetail';
import ModalContents from '@/components/ModalContents/ModalContents';
import { useBodyScrollLock } from '@/hooks/useBodyScrollLock';
import { PopupPageStyled } from '@/styles/pageStyled/PopupPageStyled';

const ModalPortal = dynamic(() => import('@/components/ModalPortal/ModalPortal'), { ssr: false });

type Photos = {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
};

type Contents = {
  contents: Photos;
};

export default function ContentsListCard({ contents }: Contents) {
  const [openModal, setOpenMoal] = useState(false);
  const { title, url } = contents;

  useBodyScrollLock('modal-open', openModal);

  return (
    <PopupPageStyled className={clsx('popup')}>
      <div onClick={() => setOpenMoal(true)}>
        <img src={url} alt={title} />
        <p>{title}</p>
      </div>
      {openModal && (
        <ModalPortal>
          <ModalContents isShow={true} onClose={() => setOpenMoal(false)}>
            <ContentsDetail contents={contents} />
          </ModalContents>
        </ModalPortal>
      )}
    </PopupPageStyled>
  );
}
