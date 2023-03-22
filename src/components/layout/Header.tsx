import { Button, Link } from '@geist-ui/core';
import { signOut, useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import { Gitlab } from 'react-feather';
import AvatarPopover from '../ui/AvatarPopover';
import InboxPopover from '../ui/InboxPopover';

export const Header: React.FC = () => {
  const { data: session, status } = useSession();
  const router = useRouter();

  function logoutHandler() {
    signOut();
  }

  return (
    <div className='main-header'>
      <div className='flex flex-row justify-between items-center h-12 w-[1170px] px-5'>
        <div className='logo-container'>
          <Gitlab size={24} /> <div className='text-xl font-bold'>SPA Template</div>
        </div>
        <div className='login-menu'>
          {!session && status !== 'loading' && (
            <>
              <Link href='#' style={{ fontSize: '14px', fontWeight: '500' }}>
                Contact
              </Link>
              <Button auto scale={2 / 3} style={{ fontSize: '14px', fontWeight: '500' }} onClick={() => router.push('/')}>
                Sign in
              </Button>
            </>
          )}

          {status === 'authenticated' && (
            <>
              <InboxPopover />
              <AvatarPopover />
            </>
          )}
        </div>
      </div>
    </div>
  );
};
