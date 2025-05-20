import React from 'react';
import PageLayout from '../components/layout/PageLayout';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

import { useNavigate } from 'react-router-dom';

const registerSchema = z.object({
  username: z.string().min(2, 'Username must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  password: z.string().min(6, 'Password must be at least 6 characters')
});

type RegisterFormData = z.infer<typeof registerSchema>;

function Register() {
  const navigate = useNavigate();
  
  const { register, handleSubmit, formState: { errors } } = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema)
  });

  

  return (
    <PageLayout>
      <div className="flex items-center justify-center flex-grow w-full px-4 mt-4">
        <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg w-full max-w-md">
          <div className="flex flex-col space-y-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tight text-white">Create an account</h1>
            <p className="text-sm text-white/80">Enter your details to get started</p>
          </div>

          <form  className="space-y-4">
            <div className="space-y-4">
              <div className="space-y-2">
                <Input
                  id="username"
                  placeholder="Username"
                  type="text"
                  autoCapitalize="none"
                  autoComplete="username"
                  autoCorrect="off"
                  className={`bg-white/20 border-white/20 text-white placeholder:text-white/50 ${errors.username ? 'border-red-500' : ''}`}
                  {...register('username')}
                />
                {errors.username && (
                  <p className="text-sm text-red-300">{errors.username.message}</p>
                )}
              </div>

              <div className="space-y-2">
                <Input
                  id="email"
                  placeholder="name@example.com"
                  type="email"
                  autoCapitalize="none"
                  autoComplete="email"
                  autoCorrect="off"
                  className={`bg-white/20 border-white/20 text-white placeholder:text-white/50 ${errors.email ? 'border-red-500' : ''}`}
                  {...register('email')}
                />
                {errors.email && (
                  <p className="text-sm text-red-300">{errors.email.message}</p>
                )}
              </div>

              <div className="space-y-2">
                <Input
                  id="password"
                  placeholder="Password"
                  type="password"
                  autoCapitalize="none"
                  autoComplete="new-password"
                  className={`bg-white/20 border-white/20 text-white placeholder:text-white/50 ${errors.password ? 'border-red-500' : ''}`}
                  {...register('password')}
                />
                {errors.password && (
                  <p className="text-sm text-red-300">{errors.password.message}</p>
                )}
              </div>

              <Button
                type="submit"
                variant="ghost" 
                className="mx-auto text-white btn" 
               
              >
                'Sign Up'
              </Button>
            </div>
          </form>
        </div>
      </div>
    </PageLayout>
  );
};

export default Register;
