import { Button, Input } from '@geist-ui/core';
import { useRouter } from 'next/router';
import { Lock } from 'react-feather';
import { signIn } from 'next-auth/react';
import { useState } from 'react';

export const PasswordVerify = () => {
  const router = useRouter();
  const { username } = router.query;

  const [formData, setFormData] = useState({ email: (username as string) || '', password: '' });
  const [isLoading, setIsLoading] = useState(false);

  function changeHandler(event: React.ChangeEvent<HTMLInputElement>) {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  }

  async function login(event: React.FormEvent) {
    setIsLoading(true);
    event.preventDefault();
    const result = await signIn('credentials', { redirect: false, email: formData.email, password: formData.password });
    if (!result?.error) {
      router.replace('/dashboard');
    }
    setIsLoading(false);
  }

  return (
    <div className='flex flex-col items-center justify-center h-[1110px] bg-[#fafafa]'>
      <p className='text-3xl font-bold tracking-normal mb-7'>Log in to Continue</p>
      <form className='flex flex-col space-y-2' onSubmit={login}>
        <Input name='email' placeholder='Email Address' scale={1.5} width='300px' value={formData.email} onChange={changeHandler} />
        <Input name='password' placeholder='Password' scale={1.5} width='300px' value={formData.password} onChange={changeHandler} />
        <Button
          icon={<Lock />}
          type='secondary-light'
          scale={1.5}
          width='300px'
          style={{ fontWeight: '500', marginBottom: '24px' }}
          onClick={login}
          loading={isLoading}>
          Password Verification
        </Button>
      </form>
    </div>
  );
};
