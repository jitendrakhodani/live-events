import React from 'react';
import { cn } from '../../lib/utils';
import Header from './Header';

interface PageLayoutProps {
  children: React.ReactNode;
  className?: string;
}

const PageLayout: React.FC<PageLayoutProps> = ({ children, className }) => {
  return (
    <div className={cn(
      "",
      className
    )}>
      {children}
    </div>
  );
};
// linear-gradient(96deg, #53b2fe, #065af3)
export default PageLayout;
