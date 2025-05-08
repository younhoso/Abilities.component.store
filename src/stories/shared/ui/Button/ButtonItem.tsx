import { useRef } from 'react';

import { cx } from '@/utils/cx';

import { useRipple } from '../../hooks/useRipple';
import { ButtonSize } from '../../types/button';
import LoadingContent from './LoadingContent';
import { ButtonItemStyled } from './styled';

interface Props extends PropsWithChildren {
  mode?: 'primary' | 'secondary' | 'disabled';
  size?: ButtonSize;
  isLoading?: boolean;
  className?: string;
  isRippleEffect?: boolean;
  isRippleColor?: 'white' | 'black';
  onClick?: () => void;
}

const ButtonItem = ({
  mode = 'secondary',
  size = 'sm',
  isLoading = false,
  className,
  children,
  isRippleEffect = false,
  isRippleColor = 'white',
  onClick,
}: Props) => {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const { triggerRipple, RippleElements } = useRipple(buttonRef, isRippleEffect);

  return (
    <ButtonItemStyled
      className={cx(className)}
      size={size}
      isripplecolor={isRippleColor}
      onClick={onClick}
    >
      <button
        ref={buttonRef}
        className={cx(mode)}
        disabled={mode === 'disabled' || isLoading}
        onClick={e => triggerRipple(e)}
      >
        {RippleElements}
        <LoadingContent isLoading={isLoading}>{children}</LoadingContent>
      </button>
    </ButtonItemStyled>
  );
};

export default ButtonItem;
