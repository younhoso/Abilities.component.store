import { ReactNode } from 'react';

import { cx } from '@/utils/cx';

import { ButtonItemStyled } from './styled';

interface Props {
  mode: 'primary' | 'secondary' | 'disabled';
  isLoading?: boolean;
  className?: string;
  children: ReactNode;
}

const ButtonItem = ({ mode = 'secondary', isLoading = false, className, children }: Props) => {
  const content = isLoading ? (
    <span className="loading">
      {/* 로딩 스피너나 텍스트 */}
      <svg className="spinner" fill="none" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" className="path" />
        <path fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
      </svg>
      Loading
    </span>
  ) : (
    children
  );

  return (
    <ButtonItemStyled className={cx(className)}>
      {mode === 'disabled' && (
        <button className={mode} disabled={mode === 'disabled' || isLoading}>
          {content}
        </button>
      )}
      {mode === 'secondary' && <button className="secondary">{children}</button>}
      {mode === 'primary' && <button className="primary">{content}</button>}
    </ButtonItemStyled>
  );
};

export default ButtonItem;
