import Link from 'next/link';
import { ReactNode } from 'react';

export const GeistLink: React.FC<{ href: string; children: ReactNode }> = ({ href, children }) => {
  return (
    <Link
      href={href}
      style={{
        padding: '8px',
        width: '228px',
        borderRadius: '5px',
        transition: 'background-color 0.15s ease',
        fontSize: '14px',
        color: 'black',
      }}>
      {children}
    </Link>
  );
};
