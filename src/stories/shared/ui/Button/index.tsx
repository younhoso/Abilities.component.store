import { cx } from '@/utils/cx';

import ButtonItem from './ButtonItem';
import { ButtonStyled } from './styled';

interface Props extends PropsWithChildren {
  className?: string;
  isRippleEffect?: boolean;
}

const BaseButton = ({ className, children }: Props) => {
  return <ButtonStyled className={cx(className)}>{children}</ButtonStyled>;
};

BaseButton.displayName = 'Button';

const Button = Object.assign(BaseButton, {
  ButtonItem,
});

export { ButtonItem };

export default Button;
