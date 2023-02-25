import { Button, Input, Link } from '@geist-ui/core';
import { Mail } from 'react-feather';

export const EmailVerify = () => {
  return (
    <div className='flex flex-col items-center justify-center h-[1110px] space-y-2'>
      <p className='text-3xl font-bold tracking-normal mb-7'>Log in to Continue</p>
      <Input placeholder='Email Address' scale={1.5} width='300px' />
      {/* <Input.Password placeholder='Password' scale={1.5} width='300px' /> */}
      <Button icon={<Mail />} type='success' scale={1.5} width='300px' style={{ marginBottom: '24px' }}>
        <p className='font-medium'>Continue with Email</p>
      </Button>
      <Link href='#' color>
        ← Other Login Options
      </Link>
    </div>
  );
};
