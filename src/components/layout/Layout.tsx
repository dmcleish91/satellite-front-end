import { Tabs } from '@geist-ui/core';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import { ReactNode } from 'react';
import { Header } from './Header';

export default function Layout({ children }: { children: ReactNode }) {
  const { status } = useSession();
  const router = useRouter();

  return (
    <>
      <Header />
      {status === 'authenticated' && (
        <div className='flex justify-center main-navigation'>
          <Tabs value={router.pathname} onChange={(route) => router.push(route)} style={{ width: '1210px' }}>
            <Tabs.Item label='Dashboard' value='/dashboard' />
            <Tabs.Item label='Reports' value='/reports' />
            <Tabs.Item label='Settings' value='/settings' />
          </Tabs>
        </div>
      )}
      <>{children}</>
    </>
  );
}
