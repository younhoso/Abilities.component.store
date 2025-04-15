import Image, { StaticImageData } from 'next/image';

import { cx } from '@/utils/cx';

import { AvatarImageStyled } from './styled';

interface Props {
  src: string | StaticImageData;
  alt: string;
  resize?: boolean;
  width?: number;
  height?: number;
  fill?: boolean;
  className?: string;
}

const AvatarImage = ({ src = '', alt = '', resize = false || undefined, ...rest }: Props) => {
  return (
    <AvatarImageStyled resize={resize} className={cx('avatarImage')}>
      <Image src={src} alt={alt} {...rest} />
    </AvatarImageStyled>
  );
};

export default AvatarImage;
