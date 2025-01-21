'use client';

import { useState } from 'react';

import clsx from 'clsx';

import Alert from '@/components/Alert';

export default function AlertPage() {
  const [openModal, setOpenMoal] = useState(false);

  return (
    <div className={clsx('Alert')}>
      <div onClick={() => setOpenMoal(true)}>
        <button>Alert 버튼</button>
      </div>

      <Alert isOpenModal={openModal} setOpenMoal={setOpenMoal} />
    </div>
  );
}
