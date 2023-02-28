import { ReactNode } from 'react';

export const GeistLink: React.FC<{ route: string; children: ReactNode }> = ({ route, children }) => {
  return (
    <div
      className='geist-link'
      role={'button'}
      onClick={() => console.log('geist link clicked')}
      style={{
        padding: '8px',
        width: '228px',
        borderRadius: '5px',
        transition: 'background-color 0.15s ease',
        fontSize: '14px',
        color: 'black',
      }}>
      {children}
    </div>
  );
};
