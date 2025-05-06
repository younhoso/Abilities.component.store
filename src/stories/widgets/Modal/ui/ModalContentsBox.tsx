import { ModalContentsBoxStyled } from './styled';

interface Props extends PropsWithChildren {}

const ModalContentsBox = ({ children }: Props) => {
  return <ModalContentsBoxStyled>{children}</ModalContentsBoxStyled>;
};

export default ModalContentsBox;
