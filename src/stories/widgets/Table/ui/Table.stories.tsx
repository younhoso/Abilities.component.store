import type { Meta, StoryObj } from '@storybook/react';
import { useMemo, useState } from 'react';

import Table, { Body, Footer, Head } from '.';
import { Pagination } from '../../Pagination';
import { data, headersColumns } from '../constants/TableData';
import { UserRow } from '../types/user';

const meta: Meta<typeof Table> = {
  title: 'Widgets/Table',
  component: Table,
  tags: ['autodocs'],
  parameters: {
    backgrounds: {
      default: 'light',
    },
  },
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof Table>;

export const Default: Story = {
  args: {
    PAGEITEMSSIZE: 5, // 한 페이지에 항목 몇개를 보여줄것인가.
  },
  render: args => {
    const [tableData, setTableData] = useState<UserRow[]>(() => data.map(item => ({ ...item })));
    const [currentPage, setCurrentPage] = useState(1);

    const totalPages = useMemo(() => {
      return Math.ceil(tableData.length / args.PAGEITEMSSIZE!);
    }, [args.PAGEITEMSSIZE, tableData.length]);

    const pagedData = useMemo(() => {
      const start = (currentPage - 1) * args.PAGEITEMSSIZE!;
      const end = start + args.PAGEITEMSSIZE!;
      return tableData.slice(start, end);
    }, [currentPage, args.PAGEITEMSSIZE, tableData]);

    const allChecked = useMemo(() => tableData.every(row => row.checkedItem), [tableData]);

    const toggleAll = (checked: boolean) => {
      setTableData(prev => prev.map(row => ({ ...row, checkedItem: checked })));
    };

    const toggleOne = (id: number, checked: boolean) => {
      setTableData(prev =>
        prev.map(row => (row.id === id ? { ...row, checkedItem: checked } : row)),
      );
    };

    const selectedItems = tableData.filter(row => row.checkedItem);

    return (
      <>
        <Table>
          <Head headersColumns={headersColumns} allChecked={allChecked} toggleAll={toggleAll} />
          <Body
            data={pagedData}
            allData={tableData}
            headersColumns={headersColumns}
            toggleOne={toggleOne}
          />
        </Table>
        <Footer>
          <Pagination
            currentItem={currentPage}
            totalItems={totalPages}
            pageItemsSize={args.PAGEITEMSSIZE!}
            onChange={page => setCurrentPage(page)}
            isPageOptions
          />
        </Footer>
      </>
    );
  },
};
