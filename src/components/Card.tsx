import React from 'react';
import { cn } from '../lib/utils';
import '../../src/styles/cardStyles.css';

const Card = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, children, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "rounded-sm bg-white shadow-sm",
      className
    )}
    {...props}
  >
    {children}
  </div>
))


export default Card;

