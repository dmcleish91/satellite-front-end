import MainDashboard from '@/components/MainDashboard';
import { getSession } from 'next-auth/react';
import { GetServerSideProps } from 'next/types';

export default function Dashboard() {
  return <MainDashboard />;
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getSession({ req: context.req });

  if (!session) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }

  return {
    props: {
      session,
    },
  };
};
