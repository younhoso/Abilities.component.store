import { ReactNode } from 'react';

import clsx from 'clsx';

import { ModalContentsStyled, ModalContentsStyledBox } from './styled';

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
      className={clsx('PostModal')}
      backgroundcolor={`rgba(0, 0, 0, 0.7)`}
    >
      {isShow && <button onClick={() => onClose?.(false)}>닫기</button>}
      <ModalContentsStyledBox>{children}</ModalContentsStyledBox>
    </ModalContentsStyled>
  </>
);

export default ModalContents;
