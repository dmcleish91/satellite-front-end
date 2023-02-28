import Layout from '@/components/layout/Layout';
import { CommandPaletteImpl } from '@/components/ui/CommandPalette';
import '@/styles/globals.css';
import { CssBaseline, GeistProvider } from '@geist-ui/core';
import 'inter-ui/inter.css';
import type { AppProps } from 'next/app';
import 'react-cmdk/dist/cmdk.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <GeistProvider>
      <CssBaseline />
      <ToastContainer position='bottom-right' />
      <Layout>
        <CommandPaletteImpl />
        <Component {...pageProps} />
      </Layout>
    </GeistProvider>
  );
}
