import { ReactNode } from 'react';

import { cx } from '@/utils/cx';

import { ModalCloseButtonStyled, ModalContentsStyled } from './styled';

interface ModalContentsProps {
  isShow: boolean;
  onClose?: (v: boolean) => void;
  children: ReactNode;
}

const ModalContents = ({ isShow, onClose, children }: ModalContentsProps) => (
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
      <div className={cx('modalContentsInner')}>
        {children}
        {isShow && (
          <ModalCloseButtonStyled onClick={() => onClose?.(false)}>닫기</ModalCloseButtonStyled>
        )}
      </div>
    </ModalContentsStyled>
  </>
);

export default ModalContents;
