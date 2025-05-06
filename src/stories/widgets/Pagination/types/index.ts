export type PageOption =
  | { type: 'page'; value: number }
  | { type: 'ellipsis'; key: 'ellipsis-left' | 'ellipsis-right' };

export type PageToken = number | 'ellipsis-left' | 'ellipsis-right';

export interface Props {
  currentItem: number;
  totalItems: number;
  pageItemsSize: number;
  isPageOptions?: boolean;
  onChange: (page: number) => void;
}
