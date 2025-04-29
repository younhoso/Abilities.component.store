import { useSelectContext } from '../../model/SelectContext';
import { SelectContentStyled } from './styled';

interface Props extends PropsWithChildren {}

const SelectContent = ({ children }: Props) => {
  const { open } = useSelectContext();
  if (!open) return null;

  return <SelectContentStyled>{children}</SelectContentStyled>;
};

export default SelectContent;
