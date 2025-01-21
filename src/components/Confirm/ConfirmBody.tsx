import { ReactNode } from 'react';

import clsx from 'clsx';

import { ConfirmBodyStyled } from './styled';

type ConfirmBody = {
  isClose?: Boolean;
  children: ReactNode;
};

export default function ConfirmBody({ isClose = false, children }: ConfirmBody) {
  return (
    <ConfirmBodyStyled className={clsx('ConfirmBody')}>
      <div className="inner">
        {children}
        {isClose && (
          <div className="close" onClick={() => {}}>
            닫기
          </div>
        )}
      </div>
    </ConfirmBodyStyled>
  );
}
