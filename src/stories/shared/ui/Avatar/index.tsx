import { cx } from '@/utils/cx';

import AvatarFallback from './AvatarFallback';
import AvatarImage from './AvatarImage';
import AvatarInfo from './AvatarInfo';
import { AvatarStyled } from './styled';

interface Props extends PropsWithChildren {}

const BaseAvatar = ({ children }: Props) => {
  return <AvatarStyled className={cx('avatar')}>{children}</AvatarStyled>;
};

BaseAvatar.displayName = 'Avatar';

const Avatar = Object.assign(BaseAvatar, {
  AvatarImage,
  AvatarFallback,
  AvatarInfo,
});

export { AvatarImage, AvatarFallback, AvatarInfo };

export default Avatar;
