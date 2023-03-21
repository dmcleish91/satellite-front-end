import { GeneralSettings } from '@/components/GeneralSettings';
import { Title } from '@/components/layout/Title';
import { GeistLink } from '@/components/ui/GeistLink';
import { getSession } from 'next-auth/react';
import { GetServerSideProps } from 'next/types';

export default function Dashboard() {
  return (
    <>
      <Title>Personal Account Settings</Title>
      <div className='flex flex-row justify-center p-12 bg-[#fafafa]'>
        <div className='flex flex-row space-x-4'>
          <nav className='flex flex-col'>
            <GeistLink>General</GeistLink>
            <GeistLink>Advanced</GeistLink>
            <GeistLink>Theme</GeistLink>
            <GeistLink>Other</GeistLink>
            <GeistLink>Teams</GeistLink>
          </nav>
          <div className='w-[910px] space-y-8'>
            <GeneralSettings />
          </div>
        </div>
      </div>
    </>
  );
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
