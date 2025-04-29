import { useSelectContext } from '../../model/SelectContext';
import { SelectTriggerStyled } from './styled';

const SelectTrigger = () => {
  const { value, open, setOpen } = useSelectContext();

  return (
    <SelectTriggerStyled onClick={() => setOpen(!open)}> {value || '선택'}</SelectTriggerStyled>
  );
};

export default SelectTrigger;
