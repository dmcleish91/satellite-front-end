import { Avatar } from '@geist-ui/core';
import { Popover, Transition } from '@headlessui/react';

export default function InboxPopover() {
  return (
    <Popover className='popover-position'>
      <Popover.Button className='reset'>
        <div className='popover-button'>
          <Avatar text='DM' />
        </div>
      </Popover.Button>
      <Transition
        enter='transition duration-300 ease-out'
        enterFrom='transform scale-95 opacity-0'
        enterTo='transform scale-100 opacity-100'
        leave='transition duration-75 ease-out'
        leaveFrom='transform scale-100 opacity-100'
        leaveTo='transform scale-95 opacity-0'>
        <Popover.Panel className='popover-panel'>
          <div className='popover-card popover-logout-card'>Hello World</div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
}
