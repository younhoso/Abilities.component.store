import { IconData } from '@/stories/shared/types/icon';
import { cx } from '@/utils/cx';

import { IconStyled } from './styled';

export default function Icon({ icon, label = '', size = 20 }: IconData) {
  return (
    <IconStyled className={cx('iconItem')} size={size}>
      {icon}
      <p className={cx('label')}>{label}</p>
    </IconStyled>
  );
}
