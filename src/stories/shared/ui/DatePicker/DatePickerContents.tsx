import { cx } from '@/utils/cx';

import { DatePickerContentsStyled } from './styled';

interface Props extends PropsWithChildren {}

const DatePickerContents = ({ children }: Props) => {
  return <DatePickerContentsStyled className={cx('')}>{children}</DatePickerContentsStyled>;
};

export default DatePickerContents;
