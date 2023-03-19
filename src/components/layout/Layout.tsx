import { Tabs } from '@geist-ui/core';
import { useSession } from 'next-auth/react';
import router from 'next/router';
import { ReactNode } from 'react';
import AuthenticatedHeader from './AuthenticatedHeader';
import { Header } from './Header';

export default function Layout({ children }: { children: ReactNode }) {
  const { data: session, status } = useSession();

  return (
    <>
      {!session && status !== 'loading' && <Header />}
      {status === 'authenticated' && <AuthenticatedHeader />}
      {status === 'authenticated' && (
        <Tabs value={router.pathname} onChange={(route) => router.push(route)} style={{ backgroundColor: '#fafafa' }}>
          <Tabs.Item label='Overview' value='/dashboard/overview' />
          <Tabs.Item label='Reports' value='/dashboard/reports' />
          <Tabs.Item label='Settings' value='/dashboard/settings' />
        </Tabs>
      )}
      <main>{children}</main>
    </>
  );
}
