import { cx } from '@/utils/cx';

import { ButtonSize } from '../../types/button';
import LoadingContent from './LoadingContent';
import { ButtonItemStyled } from './styled';

interface Props extends PropsWithChildren {
  mode?: 'primary' | 'secondary' | 'disabled';
  size?: ButtonSize;
  isLoading?: boolean;
  className?: string;
  onClick?: () => void;
}

const ButtonItem = ({
  mode = 'secondary',
  size = 'sm',
  isLoading = false,
  className,
  onClick,
  children,
}: Props) => {
  return (
    <ButtonItemStyled className={cx(className)} size={size} onClick={onClick}>
      {mode === 'disabled' && (
        <button className={mode} disabled={mode === 'disabled' || isLoading}>
          <LoadingContent isLoading={isLoading}>{children}</LoadingContent>
        </button>
      )}
      {mode === 'secondary' && <button className="secondary">{children}</button>}
      {mode === 'primary' && (
        <button className="primary">
          <LoadingContent isLoading={isLoading}>{children}</LoadingContent>
        </button>
      )}
    </ButtonItemStyled>
  );
};

export default ButtonItem;
