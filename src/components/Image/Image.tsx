import clsx from 'clsx';

import { ImageResizeStyled, ImageStyled } from './styled';

type ResizedImageProps = {
  src: string;
  alt: string;
  width?: number | string;
  height?: number | string;
  quality?: number;
  placeholder?: 'blur' | 'empty';
  blurDataURL?: string;
};

export default function ImageResize({
  src,
  alt,
  width = 100,
  height = 100,
  quality = 95,
  placeholder = 'empty',
  blurDataURL,
}: ResizedImageProps) {
  return (
    <ImageResizeStyled className={clsx('Image')} width={width} height={height}>
      <ImageStyled
        src={src}
        alt={alt}
        layout="fill"
        quality={quality}
        placeholder={placeholder}
        blurDataURL={blurDataURL}
      />
    </ImageResizeStyled>
  );
}
