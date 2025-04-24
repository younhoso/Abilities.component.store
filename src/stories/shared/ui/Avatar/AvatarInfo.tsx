import { AvatarInfoStyled } from './styled';

interface Props extends PropsWithChildren {}

const AvatarInfo = ({ children }: Props) => {
  return <AvatarInfoStyled>{children}</AvatarInfoStyled>;
};

export default AvatarInfo;
