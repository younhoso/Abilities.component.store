import type { Meta, StoryObj } from '@storybook/react';

import { useArgs } from '@storybook/preview-api';

import Pagination from '.';

const meta: Meta<typeof Pagination> = {
  title: 'Widgets/Pagination',
  component: Pagination,
  tags: ['autodocs'],
  parameters: {
    backgrounds: {
      default: 'light',
    },
  },
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof Pagination>;

export const Default: Story = {
  args: {
    totalItems: 110, // 데이터 총개수
    currentItem: 1, // 초기값
    pageItemsSize: 10, // 한 페이지에 항목 몇개를 보여줄것인가.
    isPageOptions: true, //양 옆에 이전,다음 버튼 노출 여부
  },
  render: args => {
    const [{ isChecked }, updateArgs] = useArgs();

    const handleChange = (newValue: number) => {
      updateArgs({ isChecked: !isChecked, currentItem: newValue });
    };

    const totalPages = Math.ceil(args.totalItems / args.pageItemsSize);

    return <Pagination {...args} totalItems={totalPages} onChange={handleChange} />;
  },
};
