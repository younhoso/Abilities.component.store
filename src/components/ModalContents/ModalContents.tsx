import { ReactNode } from 'react';

import {
  ModalCloseButtonStyled,
  ModalContentsBoxStyled,
  ModalContentsStyled,
} from '@/stories/widgets/Modal/ui/styled';
import { cx } from '@/utils/cx';

type ModalContentsProps = {
  isShow: boolean;
  onClose?: (v: boolean) => void;
  children: ReactNode;
};

export default function ModalContents({ isShow, onClose, children }: ModalContentsProps) {
  return (
    <>
      <ModalContentsStyled
        onClick={e => {
          if (e.target === e.currentTarget && onClose) {
            onClose?.(false);
          }
        }}
        className={cx('PostModal')}
        backgroundcolor={`rgba(0, 0, 0, 0.7)`}
      >
        {isShow && (
          <ModalCloseButtonStyled onClick={() => onClose?.(false)}>닫기</ModalCloseButtonStyled>
        )}
        <ModalContentsBoxStyled className="contentItem">{children}</ModalContentsBoxStyled>
      </ModalContentsStyled>
    </>
  );
}
