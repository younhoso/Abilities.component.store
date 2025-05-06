import { cx } from '@/utils/cx';

import { ModalFooterBoxStyled } from './styled';

interface Props extends PropsWithChildren {
  className?: string;
}

const ModalFooterBox = ({ className, children }: Props) => {
  return <ModalFooterBoxStyled className={cx(className)}>{children}</ModalFooterBoxStyled>;
};

export default ModalFooterBox;
