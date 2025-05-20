import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '../ui/button';
import { Input } from '../ui/input';

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "../ui/popover";

const loginSchema = z.object({
  email: z.string().email('Invalid email address'),
  password: z.string().min(6, 'Password must be at least 6 characters')
});

type LoginFormData = z.infer<typeof loginSchema>;

interface LoginPopoverProps {
  children: React.ReactNode;
}

const LoginPopover: React.FC<LoginPopoverProps> = ({ children }) => {
  
  const { register, handleSubmit, formState: { errors } } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema)
  });

  return (
    <Popover>
      <PopoverTrigger asChild>
        {children}
      </PopoverTrigger>
      <PopoverContent className="w-80 bg-white/10 backdrop-blur-sm p-4 rounded-lg border-white/20">
        <div className="space-y-4">
          <div className="text-center">
            <h2 className="text-lg font-semibold text-white">Welcome back</h2>
            <p className="text-sm text-white/80">Enter your credentials to sign in</p>
          </div>

          <form className="space-y-4">
            <div className="space-y-2">
              <Input
                {...register('email')}
                type="email"
                placeholder="Email"
                className={`bg-white/20 border-white/20 text-white placeholder:text-white/50 ${errors.email ? 'border-red-500' : ''}`}
              />
              {errors.email && (
                <p className="text-sm text-red-300">{errors.email.message}</p>
              )}
            </div>

            <div className="space-y-2">
              <Input
                {...register('password')}
                type="password"
                placeholder="Password"
                className={`bg-white/20 border-white/20 text-white placeholder:text-white/50 ${errors.password ? 'border-red-500' : ''}`}
              />
              {errors.password && (
                <p className="text-sm text-red-300">{errors.password.message}</p>
              )}
            </div>

            <Button
              type="submit"
              className="w-full bg-white hover:bg-white/90 text-purple-600 font-medium"
              
            >
              'Sign in'
            </Button>
          </form>
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default LoginPopover;
