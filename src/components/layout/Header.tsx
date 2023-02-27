import { Button, Link } from '@geist-ui/core';
import { useState } from 'react';
import { Gitlab, Moon, Sun } from 'react-feather';

export const Header: React.FC<{ themeSwitcher: () => void }> = ({ themeSwitcher }) => {
  const [icon, setIcon] = useState(<Sun />);

  const themeIcon = () => {
    themeSwitcher();
    setIcon(icon.type === Sun ? <Moon /> : <Sun />);
  };

  return (
    <div className='flex flex-row justify-between items-center border-b-2 border-gray-200 h-[64px] px-[27%]'>
      <div className='flex flex-row items-center space-x-2'>
        <Gitlab size={24} /> <p className='text-xl font-bold'>Spa Mockup</p>
      </div>
      <div className='flex items-center space-x-4'>
        <Link href='#' style={{ fontSize: '14px', fontWeight: '500' }}>
          Contact
        </Link>
        <Button auto scale={2 / 3} style={{ fontSize: '14px', fontWeight: '500' }}>
          Sign in
        </Button>
        {/* <div className='flex flex-row space-x-4'>
          <Button iconRight={icon} auto scale={2 / 3} px={0.6} onClick={themeIcon} />
        </div> */}
      </div>
    </div>
  );
};
