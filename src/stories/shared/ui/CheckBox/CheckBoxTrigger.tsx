import { CheckBoxTriggerStyled } from './styled';

interface Props extends PropsWithChildren {}

const CheckBoxTrigger = ({ children }: Props) => {
  return <CheckBoxTriggerStyled>{children}</CheckBoxTriggerStyled>;
};

export default CheckBoxTrigger;
