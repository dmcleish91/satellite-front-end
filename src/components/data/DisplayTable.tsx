import { TableData } from '@/pages/dashboard/overview';
import { Button, Table } from '@geist-ui/core';

export const TableConfig = {
  unsubmittedOrders: {
    colums: ['Order Date', 'Type', 'MFC Ref #', 'Customer', 'Ship To', 'Ship Date', 'Arrival Date'],
  },
} as const;

export const DisplayTable: React.FC<{ data: TableData }> = ({ data }) => {
  const renderAction = () => {
    const removeHandler = () => {
      console.log('Date Deleted!');
    };
    return (
      <Button type='success' auto scale={1 / 3} font='12px' onClick={removeHandler}>
        GO TO
      </Button>
    );
  };

  return (
    <Table data={data}>
      <Table.Column prop='operation' label='operation' width={150} render={renderAction} />
    </Table>
  );
};
