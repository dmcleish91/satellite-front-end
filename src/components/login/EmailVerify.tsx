import { Button, Input } from '@geist-ui/core';
import { useRouter } from 'next/router';
import { Lock, Mail } from 'react-feather';
import { signIn } from 'next-auth/react';
import { useState } from 'react';

export const EmailVerify = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({ email: '' });
  const [isLoading, setIsLoading] = useState(false);

  function changeHandler(event: React.ChangeEvent<HTMLInputElement>) {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  }

  async function login(event: React.FormEvent) {
    setIsLoading(true);
    event.preventDefault();
    const result = await signIn('credentials', { redirect: false, email: formData.email });
    if (!result?.error) {
      router.replace('/dashboard');
    }
    setIsLoading(false);
  }

  function redirectToLoginPage(username?: string) {
    if (username && username.trim() !== '') {
      router.push(`/login?username=${encodeURIComponent(username)}`);
    } else {
      router.push('/login');
    }
  }

  const bgColor = 'bg-[#fafafa]';

  return (
    <div className='flex flex-col items-center justify-center h-[1110px]'>
      <p className='text-3xl font-bold tracking-normal mb-7'>Log in to Continue</p>
      <form className='flex flex-col space-y-2' onSubmit={login}>
        <Input name='email' placeholder='Email Address' scale={1.5} width='300px' value={formData.email} onChange={changeHandler} />
        <Button
          icon={<Mail />}
          scale={1.5}
          width='300px'
          style={{ fontWeight: '500' }}
          htmlType='submit'
          loading={isLoading}
          onClick={login}>
          Magic Verification
        </Button>
        <Button
          icon={<Lock />}
          type='secondary-light'
          scale={1.5}
          width='300px'
          style={{ fontWeight: '500', marginBottom: '24px' }}
          onClick={() => redirectToLoginPage(formData.email)}
          loading={isLoading}>
          Password Verification
        </Button>
      </form>
    </div>
  );
};
