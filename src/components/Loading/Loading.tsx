import clsx from 'clsx';

import { LoadingStyled } from './styled';

export default function Loading() {
  return <LoadingStyled className={clsx('Loading')}>로딩중</LoadingStyled>;
}
