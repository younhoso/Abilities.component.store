import { ButtonItem } from '@/stories/shared/ui/Button';
import OptionTabs from '@/stories/shared/ui/OptionTabs';
import { getVisibleOptions } from '@/stories/widgets/Pagination/model';
import { cx } from '@/utils/cx';

import { Props } from '../types';
import { PaginationStyled } from './styled';

const Pagination = ({ currentItem, totalItems, isPageOptions = false, onChange }: Props) => {
  const rawOptions = getVisibleOptions(currentItem, totalItems);

  const visibleOptions = rawOptions.map(option => {
    if (option.type === 'page') return String(option.value);
    return option.key; // 'ellipsis-left', 'ellipsis-right'
  });

  const handleClick = (value: number) => {
    const numeric = Number(value);
    if (Number.isNaN(numeric)) return; // ellipsis 등은 무시

    if (numeric < 1 || numeric > totalItems) return;
    onChange(numeric);
  };

  return (
    <PaginationStyled className={cx('pagination')}>
      {isPageOptions && (
        <ButtonItem
          mode={currentItem === 1 ? 'disabled' : 'secondary'}
          size="md"
          onClick={() => handleClick(currentItem - 1)}
        >
          이전
        </ButtonItem>
      )}
      <OptionTabs
        options={visibleOptions}
        value={String(currentItem)}
        onChange={val => {
          handleClick(Number(val));
        }}
        className={cx('pageButton')}
        color="#fff"
        backgroundColor="#333"
      />
      {isPageOptions && (
        <ButtonItem
          mode={currentItem === totalItems ? 'disabled' : 'secondary'}
          size="md"
          onClick={() => handleClick(currentItem + 1)}
        >
          다음
        </ButtonItem>
      )}
    </PaginationStyled>
  );
};

export default Pagination;
