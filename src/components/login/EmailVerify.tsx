import { Button, Input } from '@geist-ui/core';
import { useRouter } from 'next/router';
import { Lock, Mail } from 'react-feather';

export const EmailVerify = () => {
  const router = useRouter();
  return (
    <div className='flex flex-col items-center justify-center h-[1110px] space-y-2'>
      <p className='text-3xl font-bold tracking-normal mb-7'>Log in to Continue</p>
      <Input placeholder='Email Address' scale={1.5} width='300px' />
      {/* <Input.Password placeholder='Password' scale={1.5} width='300px' /> */}
      <Button icon={<Mail />} type='success' scale={1.5} width='300px' onClick={() => router.push('/dashboard/overview')}>
        <p className='font-medium'>Magic Verification</p>
      </Button>
      <Button
        icon={<Lock />}
        type='secondary'
        scale={1.5}
        width='300px'
        style={{ marginBottom: '24px' }}
        onClick={() => router.push('/dashboard')}>
        <p className='font-medium'>Password Verification</p>
      </Button>
    </div>
  );
};
