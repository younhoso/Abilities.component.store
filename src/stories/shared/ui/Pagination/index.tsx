import { useEffect, useState } from 'react';

import { cx } from '@/utils/cx';

import OptionTabs from '../OptionTabs';
import { PageButton, PaginationStyled } from './styled';

interface Props {
  currentPage: number;
  totalPages: number;
  onChange: (page: number) => void;
}

const Pagination = ({ currentPage, totalPages, onChange }: Props) => {
  const [currentTab, setCurrentTab] = useState(String(currentPage));

  const handleClick = (page: number) => {
    if (page < 1 || page > totalPages) return;
    onChange(page);
  };

  const visibleOptions = Array.from({ length: totalPages }, (_, i) => String(i + 1)).slice(0, 5);

  useEffect(() => {
    setCurrentTab(String(currentPage));
  }, [currentPage]);

  return (
    <PaginationStyled className={cx('pagination')}>
      <PageButton onClick={() => handleClick(currentPage - 1)} disabled={currentPage === 1}>
        이전
      </PageButton>
      <OptionTabs
        options={visibleOptions}
        value={currentTab as (typeof visibleOptions)[number]}
        onChange={val => {
          setCurrentTab(val);
          handleClick(Number(val));
        }}
        className={cx('pageButton')}
        color="#fff"
        backgroundColor="#333"
      />
      <PageButton
        onClick={() => handleClick(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        다음
      </PageButton>
    </PaginationStyled>
  );
};

export default Pagination;
