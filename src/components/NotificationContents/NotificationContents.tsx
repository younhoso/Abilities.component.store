import { useContext, useEffect } from 'react';

import clsx from 'clsx';

import { NotificationContext } from '@/provider/NotificationProvider';
import { NotificationContentsStyled } from '@/styles/pageStyled/NotificationContentsStyled';

export default function NotificationContents() {
  const { notifications, close } = useContext(NotificationContext);

  return (
    <NotificationContentsStyled className={clsx('NotificationContents')}>
      {notifications.map(data => {
        return (
          <div key={data.id}>
            <div>{data.id}</div>
            <div>{data.message}</div>
            <div>{data.type}</div>
            <div>{data.description}</div>

            <div
              className="notiBtn"
              onClick={() => {
                data.cancelMutation?.();
                close?.(data.id);
              }}
            >
              알림 삭제 버튼
            </div>
          </div>
        );
      })}
    </NotificationContentsStyled>
  );
}
