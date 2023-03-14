import { useSession } from 'next-auth/react';
import { Fragment, ReactNode } from 'react';
import AuthenticatedHeader from './AuthenticatedHeader';
import { Header } from './Header';

export default function Layout({ children }: { children: ReactNode }) {
  const { data: session, status } = useSession();

  return (
    <>
      {!session && status !== 'loading' && <Header />}
      {status === 'authenticated' && <AuthenticatedHeader />}
      <main>{children}</main>
    </>
  );
}
