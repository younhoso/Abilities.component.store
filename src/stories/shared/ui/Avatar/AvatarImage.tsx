import Image, { StaticImageData } from 'next/image';

import { cx } from '@/utils/cx';

import { AvatarImageStyled } from './styled';

interface Props extends PropsWithChildren {
  src?: string | StaticImageData;
  alt?: string;
  fill?: boolean;
  className?: string;
  isBordered?: boolean;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

const AvatarImage = ({ src = '', alt = '', ...rest }: Props) => {
  return (
    <AvatarImageStyled className={cx(rest.className)} {...rest}>
      <Image src={src} alt={alt} />
    </AvatarImageStyled>
  );
};

export default AvatarImage;
