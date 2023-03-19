import UnsubmittedOrdersTable from '@/components/data/UnsubmittedOrdersTable';
import { Text } from '@geist-ui/core';

export type TableData = {
  orderDate: string;
  type: string;
  mfcRefNumber: string;
  Customer: string;
  ShipTo: string;
  ShipDate: string;
  ArrivalDate: string;
}[];

export const tableData: TableData = [
  {
    orderDate: '2022-03-03',
    type: 'Type A',
    mfcRefNumber: 'MFC001',
    Customer: 'Customer A',
    ShipTo: 'Ship To A',
    ShipDate: '2022-03-05',
    ArrivalDate: '2022-03-10',
  },
  {
    orderDate: '2022-03-01',
    type: 'Type B',
    mfcRefNumber: 'MFC002',
    Customer: 'Customer B',
    ShipTo: 'Ship To B',
    ShipDate: '2022-03-06',
    ArrivalDate: '2022-03-12',
  },
  {
    orderDate: '2022-02-28',
    type: 'Type C',
    mfcRefNumber: 'MFC003',
    Customer: 'Customer C',
    ShipTo: 'Ship To C',
    ShipDate: '2022-03-01',
    ArrivalDate: '2022-03-03',
  },
  {
    orderDate: '2022-03-03',
    type: 'Type A',
    mfcRefNumber: 'MFC001',
    Customer: 'Customer A',
    ShipTo: 'Ship To A',
    ShipDate: '2022-03-05',
    ArrivalDate: '2022-03-10',
  },
  {
    orderDate: '2022-03-01',
    type: 'Type B',
    mfcRefNumber: 'MFC002',
    Customer: 'Customer B',
    ShipTo: 'Ship To B',
    ShipDate: '2022-03-06',
    ArrivalDate: '2022-03-12',
  },
  {
    orderDate: '2022-02-28',
    type: 'Type C',
    mfcRefNumber: 'MFC003',
    Customer: 'Customer C',
    ShipTo: 'Ship To C',
    ShipDate: '2022-03-01',
    ArrivalDate: '2022-03-03',
  },
  {
    orderDate: '2022-03-03',
    type: 'Type A',
    mfcRefNumber: 'MFC001',
    Customer: 'Customer A',
    ShipTo: 'Ship To A',
    ShipDate: '2022-03-05',
    ArrivalDate: '2022-03-10',
  },
  {
    orderDate: '2022-03-01',
    type: 'Type B',
    mfcRefNumber: 'MFC002',
    Customer: 'Customer B',
    ShipTo: 'Ship To B',
    ShipDate: '2022-03-06',
    ArrivalDate: '2022-03-12',
  },
  {
    orderDate: '2022-02-28',
    type: 'Type C',
    mfcRefNumber: 'MFC003',
    Customer: 'Customer C',
    ShipTo: 'Ship To C',
    ShipDate: '2022-03-01',
    ArrivalDate: '2022-03-03',
  },
  {
    orderDate: '2022-03-03',
    type: 'Type A',
    mfcRefNumber: 'MFC001',
    Customer: 'Customer A',
    ShipTo: 'Ship To A',
    ShipDate: '2022-03-05',
    ArrivalDate: '2022-03-10',
  },
  {
    orderDate: '2022-03-01',
    type: 'Type B',
    mfcRefNumber: 'MFC002',
    Customer: 'Customer B',
    ShipTo: 'Ship To B',
    ShipDate: '2022-03-06',
    ArrivalDate: '2022-03-12',
  },
  {
    orderDate: '2022-02-28',
    type: 'Type C',
    mfcRefNumber: 'MFC003',
    Customer: 'Customer C',
    ShipTo: 'Ship To C',
    ShipDate: '2022-03-01',
    ArrivalDate: '2022-03-03',
  },
];

export default function Dashboard() {
  return (
    <div className='flex flex-col bg-[#fafafa]'>
      <div className='w-1/2 space-y-4 p-4 overflow-x-auto h-[1200px]'>
        {tableData && (
          <>
            <Text h4>Unsubmitted Orders</Text>
            <UnsubmittedOrdersTable data={tableData} />
          </>
        )}
      </div>
    </div>
  );
}
