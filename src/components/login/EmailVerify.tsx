import { Button, Input } from '@geist-ui/core';
import { useRouter } from 'next/router';
import { Lock, Mail } from 'react-feather';

export const EmailVerify = () => {
  const router = useRouter();
  return (
    <div className='flex flex-col items-center justify-center h-[1110px] space-y-2 bg-[#fafafa]'>
      <p className='text-3xl font-bold tracking-normal mb-7'>Log in to Continue</p>
      <Input placeholder='Email Address' scale={1.5} width='300px' />
      <Button
        icon={<Mail />}
        type='success-light'
        scale={1.5}
        width='300px'
        style={{ fontWeight: '500' }}
        onClick={() => router.push('/dashboard/overview')}>
        Magic Verification
      </Button>
      <Button
        icon={<Lock />}
        type='secondary-light'
        scale={1.5}
        width='300px'
        style={{ fontWeight: '500', marginBottom: '24px' }}
        onClick={() => router.push('/dashboard')}>
        Password Verification
      </Button>
    </div>
  );
};
