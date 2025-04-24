import Image, { StaticImageData } from 'next/image';

import clsx from 'clsx';

import { AutoSizeImageStyled } from './styled';

interface Props extends PropsWithChildren {
  src: string | StaticImageData;
  alt: string;
  width?: number;
  height?: number;
  fill?: boolean;
  className?: string;
}

const AutoSizeImage = ({ src = '', alt = '', ...rest }: Props) => {
  return (
    <AutoSizeImageStyled className={clsx('autoSizeImage')}>
      <Image src={src} alt={alt} {...rest} />
    </AutoSizeImageStyled>
  );
};

export default AutoSizeImage;
