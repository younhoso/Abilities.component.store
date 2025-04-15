import { cx } from '@/utils/cx';

import { AvatarFallbackStyled } from './styled';

interface Props extends PropsWithChildren {}

const AvatarFallback = ({ children }: Props) => {
  return <AvatarFallbackStyled className={cx('avatarFallback')}>{children}</AvatarFallbackStyled>;
};

export default AvatarFallback;
