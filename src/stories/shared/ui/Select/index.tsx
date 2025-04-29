import { PropsWithChildren, useEffect, useRef, useState } from 'react';

import { SelectContext } from '../../model/SelectContext';
import SelectContent from './SelectContent';
import SelectItem from './SelectItem';
import SelectTrigger from './SelectTrigger';
import { SelectStyled } from './styled';

interface CustomSelectProps extends PropsWithChildren {
  value: string;
  onValueChange: (value: string) => void;
}

const BaseSelect = ({ value, onValueChange, children }: CustomSelectProps) => {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <SelectContext.Provider value={{ value, onValueChange, open, setOpen }}>
      <SelectStyled ref={ref}>{children}</SelectStyled>
    </SelectContext.Provider>
  );
};

export const Select = Object.assign(BaseSelect, {
  SelectTrigger,
  SelectContent,
  SelectItem,
});

export { SelectTrigger, SelectContent, SelectItem };

export default Select;
