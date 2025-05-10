import type { Meta, StoryObj } from '@storybook/react';
import { useMemo, useState } from 'react';

import { CheckBoxItem } from '@/stories/shared/ui/CheckBox';

import Table, { Body, BodyCell, Footer, Head, HeaderCell, Row } from '.';
import { Pagination } from '../../Pagination';
import { PAGEITEMSSIZE, data, headersColumns } from '../constants/TableData';
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
  render: () => {
    const [tableData, setTableData] = useState<UserRow[]>(() => data.map(item => ({ ...item })));
    const [currentPage, setCurrentPage] = useState(1);

    const totalPages = useMemo(() => {
      return Math.ceil(tableData.length / PAGEITEMSSIZE);
    }, [tableData]);

    const pagedData = useMemo(() => {
      const start = (currentPage - 1) * PAGEITEMSSIZE;
      const end = start + PAGEITEMSSIZE;
      return tableData.slice(start, end);
    }, [tableData, currentPage]);

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
    console.log(selectedItems);

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
            pageItemsSize={PAGEITEMSSIZE}
            onChange={page => setCurrentPage(page)}
            isPageOptions
          />
        </Footer>
      </>
    );
  },
};
