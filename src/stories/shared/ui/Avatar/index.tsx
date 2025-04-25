import { Children, isValidElement } from 'react';

import { cx } from '@/utils/cx';

import AvatarFallback from './AvatarFallback';
import AvatarImage from './AvatarImage';
import AvatarInfo from './AvatarInfo';
import { AvatarExtraStyled, AvatarStyled } from './styled';

interface Props extends PropsWithChildren {
  max?: number;
  alt?: string;
  isBordered?: boolean;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

const BaseAvatarGroup = ({ max, children, ...rest }: Props) => {
  const allChildren = Children.toArray(children).filter(isValidElement);
  const visible = allChildren.slice(0, max);
  const hiddenCount = allChildren.length - visible.length;

  return (
    <AvatarStyled className={cx('avatar')}>
      {visible}
      {hiddenCount > 0 && <AvatarExtraStyled {...rest}>+{hiddenCount}</AvatarExtraStyled>}
    </AvatarStyled>
  );
};

BaseAvatarGroup.displayName = 'Avatar';

const Avatar = Object.assign(BaseAvatarGroup, {
  AvatarImage,
  AvatarFallback,
  AvatarInfo,
});

export { AvatarImage, AvatarFallback, AvatarInfo };

export default Avatar;
