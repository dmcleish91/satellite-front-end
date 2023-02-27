import { ReactNode } from 'react';

export const Title: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div className='flex p-4 h-24 items-center justify-center border-b-2 border-gray-200'>
      <div className='w-[1200px]'>
        <p className='text-3xl font-medium '>{children}</p>
      </div>
    </div>
  );
};
