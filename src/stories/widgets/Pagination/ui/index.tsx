import LeftIcon from 'public/icons/leftIcon.svg';
import RightIcon from 'public/icons/rightIcon.svg';

import ButtonItem from '@/stories/shared/ui/Button/ButtonItem';
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
          className={cx('buttonItem')}
        >
          <LeftIcon />
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
        backgroundColor="red"
      />
      {isPageOptions && (
        <ButtonItem
          mode={currentItem === totalItems ? 'disabled' : 'secondary'}
          size="md"
          onClick={() => handleClick(currentItem + 1)}
          className={cx('buttonItem')}
        >
          {/* {ICONS_DATAS.RightIcon.icon} */}
          <RightIcon />
        </ButtonItem>
      )}
    </PaginationStyled>
  );
};

export default Pagination;
