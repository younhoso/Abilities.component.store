import { cx } from '@/utils/cx';

import AvatarFallback from './AvatarFallback';
import AvatarImage from './AvatarImage';
import { AvatarStyled } from './styled';

interface Props extends PropsWithChildren {}

const BaseAvatar = ({ children }: Props) => {
  return <AvatarStyled className={cx('avatar')}>{children}</AvatarStyled>;
};

BaseAvatar.displayName = 'Avatar';

export const Avatar = Object.assign(BaseAvatar, {
  AvatarImage,
  AvatarFallback,
});

export { AvatarImage, AvatarFallback };
