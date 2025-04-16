import { ReactNode } from 'react';

import clsx from 'clsx';

import { AlertBodyStyled } from './styled';

interface Props extends PropsWithChildren {
  desc?: ReactNode;
}

const AlertContents = ({ desc, children }: Props) => {
  return (
    <AlertBodyStyled className={clsx('AlertBody')}>
      <div className="inner">
        {desc && <div className="desc">{desc}</div>}
        {children}
      </div>
    </AlertBodyStyled>
  );
};

export default AlertContents;
