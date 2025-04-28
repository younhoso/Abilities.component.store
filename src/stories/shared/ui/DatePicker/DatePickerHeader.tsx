import { cx } from '@/utils/cx';

import { DatePickerHeaderStyled } from './styled';

interface Props extends PropsWithChildren {}

const DatePickerHeader = ({ children }: Props) => {
  return <DatePickerHeaderStyled className={cx('')}>{children}</DatePickerHeaderStyled>;
};

export default DatePickerHeader;
