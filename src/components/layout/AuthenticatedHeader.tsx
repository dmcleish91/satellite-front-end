import { Avatar } from '@geist-ui/core';
import InboxPopover from '../ui/InboxPopover';

export const AuthenticatedHeader: React.FC = () => {
  return (
    <div className='auth-header'>
      <div className='auth-menu'>
        <InboxPopover />
        <Avatar text='DM' scale={1.2} />
      </div>
    </div>
  );
};
