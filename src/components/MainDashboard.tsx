import { GeneralSettings } from '@/components/GeneralSettings';
import { Title } from '@/components/layout/Title';
import { GeistLink } from '@/components/ui/GeistLink';
import { TableData } from '@/pages/dashboard';
import { Tabs, Text } from '@geist-ui/core';
import Head from 'next/head';
import { useRouter } from 'next/router';
import UnsubmittedOrdersTable from './data/UnsubmittedOrdersTable';

export default function MainDashboard({ tableData }: { tableData?: TableData }) {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>SPA-Geist-Dashboard</title>
        <meta name='description' content='Generated by create next app' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      {/* <EmailVerify /> */}
    </>
  );
}
