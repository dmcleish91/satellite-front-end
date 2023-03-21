import { TableData } from '@/pages/dashboard';
import { Button, Table } from '@geist-ui/core';

export default function UnsubmittedOrdersTable({ data }: { data: TableData }) {
  const renderAction = () => {
    const removeHandler = () => {
      console.log('Date Deleted!');
    };
    return (
      <Button type='success-light' auto scale={1 / 3} font='12px' onClick={removeHandler}>
        GO TO
      </Button>
    );
  };

  return (
    <Table data={data}>
      <Table.Column prop='orderDate' label='Order Date' />
      <Table.Column prop='type' label='Type' />
      <Table.Column prop='mfcRefNumber' label='MFC Ref #' />
      <Table.Column prop='Customer' label='Customer' />
      <Table.Column prop='ShipTo' label='Ship To' />
      <Table.Column prop='ShipDate' label='Ship Date' />
      <Table.Column prop='ArrivalDate' label='Arrival Date' />
      <Table.Column prop='operation' label='operation' width={150} render={renderAction} />
    </Table>
  );
}
