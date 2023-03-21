import { ReactNode } from 'react';

export const GeistLink: React.FC<{ onClick?: () => void; children: ReactNode }> = ({ onClick, children }) => {
  return (
    <div
      className='geist-link'
      role={'button'}
      onClick={onClick}
      style={{
        cursor: 'pointer',
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
