import { Fragment, ReactNode } from 'react';
import { Header } from './Header';

export default function Layout({ switchTheme, children }: { switchTheme: () => void; children: ReactNode }) {
  return (
    <Fragment>
      <Header themeSwitcher={switchTheme} />
      <main>{children}</main>
    </Fragment>
  );
}
