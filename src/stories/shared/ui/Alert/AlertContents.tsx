import { ReactNode } from 'react';

import { cx } from '@/utils/cx';

import { AlertContentsStyled } from './styled';

interface Props extends PropsWithChildren {
  desc?: ReactNode;
}

const AlertContents = ({ desc, children }: Props) => {
  return (
    <AlertContentsStyled className={cx()}>
      {desc && <div className="desc">{desc}</div>}
      {children}
    </AlertContentsStyled>
  );
};

export default AlertContents;
