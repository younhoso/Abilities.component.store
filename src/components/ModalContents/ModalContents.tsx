import { ReactNode } from 'react';

import clsx from 'clsx';

import { ModalContentsStyled } from './styled';

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
        className={clsx('PostModal')}
        backgroundcolor={`rgba(0, 0, 0, 0.7)`}
      >
        {isShow && <button onClick={() => onClose?.(false)}>닫기</button>}
        <div className="contentItem">{children}</div>
      </ModalContentsStyled>
    </>
  );
}
