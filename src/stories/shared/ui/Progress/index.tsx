import { useEffect, useState } from 'react';

import { cx } from '@/utils/cx';
import { delay } from '@/utils/delay';

import { Bar, BarWrapper, Label, ProgressStyled } from './styled';

interface Props {
  value?: number;
  size?: 'sm' | 'md' | 'lg';
  color?: 'default' | 'primary' | 'secondary' | 'success' | 'danger' | 'warning';
  isIndeterminate?: boolean;
  label?: string;
  className?: string;
}

const Progress = ({
  value = 0,
  size = 'md',
  color = 'default',
  isIndeterminate = false,
  label,
  className,
}: Props) => {
  const [internalValue, setInternalValue] = useState(0);

  useEffect(() => {
    if (!isIndeterminate) {
      let mounted = true;
      (async () => {
        await delay(100);
        if (mounted) setInternalValue(value);
      })();

      return () => {
        mounted = false;
      };
    }
  }, [value, isIndeterminate]);

  return (
    <ProgressStyled className={cx(className)}>
      {label && <Label>{label}</Label>}
      <BarWrapper size={size}>
        <Bar value={internalValue} color={color} isIndeterminate={isIndeterminate} />
      </BarWrapper>
    </ProgressStyled>
  );
};

export default Progress;
