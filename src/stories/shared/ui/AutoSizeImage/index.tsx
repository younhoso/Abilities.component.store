import clsx from 'clsx';

import { AutoSizeImageStyled } from './styled';

interface Props extends PropsWithChildren {}

const AutoSizeImage = ({ children }: Props) => {
  return <AutoSizeImageStyled className={clsx('autoSizeImage')}>{children}</AutoSizeImageStyled>;
};

export default AutoSizeImage;
