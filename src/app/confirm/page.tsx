'use client';

import { useState } from 'react';

import clsx from 'clsx';

import Confirm from '@/components/Confirm';

export default function ConfirmPage() {
  const [openModal, setOpenMoal] = useState(false);

  return (
    <div className={clsx('confirm')}>
      <div onClick={() => setOpenMoal(true)}>
        <button>confirm 버튼</button>
      </div>

      <Confirm isOpenModal={openModal} setOpenMoal={setOpenMoal} />
    </div>
  );
}
