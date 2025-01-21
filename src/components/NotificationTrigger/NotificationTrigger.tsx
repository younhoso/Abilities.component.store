import { MouseEvent, useContext, useEffect, useState } from 'react';

import { useRouter } from 'next/navigation';

import clsx from 'clsx';

import { NotificationContext, OpenNotificationParams } from '@/provider/NotificationProvider';

import ModalContents from '../ModalContents/ModalContents';
import ModalPortal from '../ModalPortal/ModalPortal';
import NotificationContents from '../NotificationContents/NotificationContents';
import { NotificationTriggerStyled } from './styled';

export default function NotificationTrigger() {
  const [openModal, setOpenMoal] = useState(false);
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [currentCancelMutation, setCurrentCancelMutation] = useState<(() => void) | null>(null);

  const { notifications, open, close } = useContext(NotificationContext);
  const router = useRouter();

  const handleOpenNotification = (e: MouseEvent<HTMLButtonElement>) => {
    const target = e.target as HTMLElement;
    const params: OpenNotificationParams = {
      id: `notification-${target.innerText}`,
      message: 'This is a success message!',
      type: 'success',
      description: 'Your operation was successful.',
      cancelMutation: () => {
        setShowConfirmModal(true);
        setCurrentCancelMutation(() => () => {
          router.push('/'); // 리다이렉트할 페이지
        });
      },
      undoableTimeout: 5000, // 5초 후 자동으로 알림 닫기
    };
    open?.(params);
    setOpenMoal(true);
  };

  const handleConfirm = () => {
    setShowConfirmModal(false);
    if (currentCancelMutation) currentCancelMutation(); // 현재 cancelMutation 실행
  };

  const handleCancel = () => {
    setShowConfirmModal(false);
  };

  useEffect(() => {
    const activeNotification = notifications.find(
      notification => notification.id === 'notification-Show 알림',
    );

    if (activeNotification?.undoableTimeout) {
      const timer = setTimeout(() => {
        close?.(activeNotification.id);
        setOpenMoal(false);
      }, activeNotification.undoableTimeout);

      return () => clearTimeout(timer);
    }
  }, [notifications, close]);

  return (
    <NotificationTriggerStyled className={clsx('NotificationTrigger')}>
      <button onClick={e => handleOpenNotification(e)}>Show 알림</button>
      <br />
      <button>Close 알림</button>

      {showConfirmModal && (
        <div className="confirMmodal">
          <p>정말 삭제 또는 취소 하시겠습니끼?</p>
          <button onClick={handleConfirm}>확인</button>
          <button onClick={handleCancel}>취소</button>
        </div>
      )}

      {openModal && (
        <ModalPortal>
          <ModalContents
            isShow={false}
            onClose={() => {
              close?.('notification-Show 알림'), setOpenMoal(false);
            }}
          >
            <NotificationContents />
          </ModalContents>
        </ModalPortal>
      )}
    </NotificationTriggerStyled>
  );
}
