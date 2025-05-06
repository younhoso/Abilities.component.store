import { PAGE_SIZE } from '../constants';
import { PageOption, PageToken } from '../types';

export const getVisibleOptions = (current: number, total: number): PageOption[] => {
  if (total <= PAGE_SIZE) {
    return Array.from({ length: total }, (_, i) => ({ type: 'page', value: i + 1 }));
  }

  const getRange = (start: number, count: number): number[] => {
    return Array.from({ length: count }, (_, i) => start + i);
  };

  const lastPage = total;
  const showLeftEdge = current <= PAGE_SIZE;
  const showRightEdge = current >= total - (PAGE_SIZE - 1);

  const middlePages = (values: PageToken[]): PageOption[] =>
    values.map(v =>
      typeof v === 'number' ? { type: 'page', value: v } : { type: 'ellipsis', key: v },
    );

  if (showLeftEdge) {
    return middlePages([...getRange(1, PAGE_SIZE), 'ellipsis-right', lastPage]);
  }

  if (showRightEdge) {
    return middlePages([1, 'ellipsis-left', ...getRange(total - (PAGE_SIZE - 1), PAGE_SIZE)]);
  }

  return middlePages([
    1,
    'ellipsis-left',
    current - 1,
    current,
    current + 1,
    'ellipsis-right',
    lastPage,
  ]);
};
