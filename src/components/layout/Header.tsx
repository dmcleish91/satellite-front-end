import { Button, Link } from '@geist-ui/core';
import { Gitlab } from 'react-feather';

export const Header = () => {
  return (
    <div className='flex flex-row justify-between items-center border-b-2 border-gray-200 h-[64px] px-[27%]'>
      <div className='flex flex-row items-center space-x-2'>
        <Gitlab size={24} /> <p className='text-xl font-bold'>Gitlabs Mockup</p>
      </div>
      <div className='flex items-center space-x-4'>
        <Link href='#' style={{ fontSize: '14px', fontWeight: '500' }}>
          Contact
        </Link>
        <Button auto scale={2 / 3} style={{ fontSize: '14px', fontWeight: '500' }}>
          Sign in
        </Button>
      </div>
    </div>
  );
};
