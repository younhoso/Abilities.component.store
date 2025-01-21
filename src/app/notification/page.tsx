'use client';

import clsx from 'clsx';

import NotificationTrigger from '@/components/NotificationTrigger/NotificationTrigger';
import { NotificationContextProvider } from '@/provider/NotificationProvider';
import { NotificationPageStyled } from '@/styles/pageStyled/NotificationPageStyled';

export default function NotificationPage() {
  return (
    <NotificationPageStyled className={clsx('NotificationPageStyledPage')}>
      <NotificationContextProvider>
        <NotificationTrigger />
        <div>Your main app content here</div>
      </NotificationContextProvider>
    </NotificationPageStyled>
  );
}
