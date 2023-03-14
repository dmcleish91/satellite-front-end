import { Avatar } from '@geist-ui/core';
import { signOut } from 'next-auth/react';
import AvatarPopover from '../ui/AvatarPopover';
import InboxPopover from '../ui/InboxPopover';

export default function AuthenticatedHeader() {
  function logoutHandler() {
    signOut();
  }

  return (
    <div className='auth-header'>
      <div className='auth-menu'>
        <InboxPopover />
        <AvatarPopover />
      </div>
    </div>
  );
}
