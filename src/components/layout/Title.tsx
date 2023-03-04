import { ReactNode } from 'react';

export const Title: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div className='settings-title'>
      <div className='w-[1170px]'>
        <p className='text-3xl font-medium '>{children}</p>
      </div>
    </div>
  );
};
