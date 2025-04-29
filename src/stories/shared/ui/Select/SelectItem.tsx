import { useSelectContext } from '../../model/SelectContext';
import { SelectItemStyled } from './styled';

interface ItemProps extends PropsWithChildren {
  value: string;
}

const SelectItem = ({ value, children }: ItemProps) => {
  const { onValueChange, setOpen } = useSelectContext();

  const handleSelect = () => {
    onValueChange(value);
    setOpen(false);
  };

  return <SelectItemStyled onClick={handleSelect}>{children}</SelectItemStyled>;
};

export default SelectItem;
