import { Fragment, ReactNode } from 'react';
import AuthenticatedHeader from './AuthenticatedHeader';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <Fragment>
      <AuthenticatedHeader />
      <main>{children}</main>
    </Fragment>
  );
}
