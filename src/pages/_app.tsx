import Layout from '@/components/layout/Layout';
import { CssBaseline, GeistProvider } from '@geist-ui/core';
import type { AppProps } from 'next/app';
import { ToastContainer } from 'react-toastify';
import { SessionProvider } from 'next-auth/react';
import { motion, AnimatePresence } from 'framer-motion';
import '@/styles/globals.css';
import 'inter-ui/inter.css';
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from 'next/router';

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  return (
    <GeistProvider>
      <CssBaseline />
      <ToastContainer position='bottom-right' />
      <SessionProvider session={pageProps.session}>
        <Layout>
          <AnimatePresence mode='wait'>
            <motion.div
              key={router.route}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { duration: 0.1 } }}
              exit={{ opacity: 0, transition: { duration: 0.1 } }}>
              <Component {...pageProps} />
            </motion.div>
          </AnimatePresence>
        </Layout>
      </SessionProvider>
    </GeistProvider>
  );
}
