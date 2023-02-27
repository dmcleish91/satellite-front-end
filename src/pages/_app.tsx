import Layout from '@/components/layout/Layout';
import '@/styles/globals.css';
import { CssBaseline, GeistProvider } from '@geist-ui/core';
import 'inter-ui/inter.css';
import type { AppProps } from 'next/app';
import { useState } from 'react';

export default function App({ Component, pageProps }: AppProps) {
  const [themeType, setThemeType] = useState('light');
  const switchThemes = () => {
    setThemeType((last) => (last === 'dark' ? 'light' : 'dark'));
  };

  return (
    <GeistProvider themeType={themeType}>
      <CssBaseline />
      <Layout switchTheme={switchThemes}>
        <Component {...pageProps} />
      </Layout>
    </GeistProvider>
  );
}
