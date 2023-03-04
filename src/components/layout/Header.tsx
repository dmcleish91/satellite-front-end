import { Button, Link } from '@geist-ui/core';
import { useRouter } from 'next/router';
import { Gitlab } from 'react-feather';

export const Header: React.FC = () => {
  const router = useRouter();

  return (
    <div className='flex flex-row justify-center items-center w-full border-b-2 border-gray-200'>
      <div className='flex flex-row justify-between items-center h-[48px] w-[1170px] px-5'>
        <div className='flex flex-row items-center space-x-2'>
          <Gitlab size={24} /> <p className='text-xl font-bold'>Spa Mockup</p>
        </div>
        <div className='flex items-center space-x-4'>
          <Link href='#' style={{ fontSize: '14px', fontWeight: '500' }}>
            Contact
          </Link>
          <Button auto scale={2 / 3} style={{ fontSize: '14px', fontWeight: '500' }} onClick={() => router.push('/')}>
            Sign in
          </Button>
        </div>
      </div>
    </div>
  );
};
