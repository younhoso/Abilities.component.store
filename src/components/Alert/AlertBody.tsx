import { ReactNode } from 'react';

import clsx from 'clsx';

import { AlertBodyStyled } from './styled';

type AlertBody = {
  title?: ReactNode;
  isClose?: boolean;
  onClose: (v: boolean) => void;
  children: ReactNode;
};

export default function AlertBody({ title, isClose = false, onClose, children }: AlertBody) {
  return (
    <AlertBodyStyled className={clsx('AlertBody')}>
      <div className="inner">
        {title && <div className="title">{title}</div>}
        {isClose && (
          <div className="close" onClick={() => onClose?.(false)}>
            닫기
          </div>
        )}
        {children}
      </div>
    </AlertBodyStyled>
  );
}
