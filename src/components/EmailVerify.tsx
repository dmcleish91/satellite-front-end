import { Button, Input } from '@geist-ui/core';
import { Mail } from 'react-feather';

export const EmailVerify = () => {
  return (
    <div className='flex flex-col items-center justify-center h-[1110px] space-y-2'>
      <p className='text-4xl font-bold tracking-normal mb-6'>Log in to Continue</p>
      <Input placeholder='Email Address' scale={1.5} width='300px' />
      {/* <Input.Password placeholder='Password' scale={1.5} width='300px' /> */}
      <Button icon={<Mail />} type='success' scale={1.5} width='300px'>
        <p className='font-medium'>Continue with Email</p>
      </Button>
    </div>
  );
};
