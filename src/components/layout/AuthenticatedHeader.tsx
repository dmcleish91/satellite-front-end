import { Avatar } from '@geist-ui/core';
import InboxPopover from '../ui/InboxPopover';

export default function AuthenticatedHeader() {
  return (
    <div className='auth-header'>
      <div className='auth-menu'>
        <InboxPopover />
        <Avatar text='DM' scale={1.2} />
      </div>
    </div>
  );
}
