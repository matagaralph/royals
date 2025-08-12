'use client';
import { Button } from '@/components/Button';
import { Input } from '@/components/ui/input';
import { signIn } from 'next-auth/react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useRef, useState, FormEvent } from 'react';

export function AuthForm() {
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const [error, setError] = useState('');
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');
    const email = emailRef.current?.value;
    const password = passwordRef.current?.value;
    const signInResult = await signIn('credentials', {
      email: email,
      password: password,
      redirect: false,
      callbackUrl: '/',
    });

    if (!signInResult?.ok) {
      setError(signInResult?.error as string);
      setIsLoading(false);
      return;
    }

    router.replace('/');
  };

  return (
    <form className='space-y-6' onSubmit={handleSubmit}>
      <div>
        <label htmlFor='email' className='block text-sm leading-6 font-medium text-slate-900'>
          Email address or phone
        </label>
        <div className='mt-2'>
          <Input
            aria-invalid={error ? true : false}
            ref={emailRef}
            type='email'
            id='email'
            name='email'
            placeholder='you@example.com'
            required
          />
        </div>
      </div>

      <div>
        <div className='flex items-center justify-between'>
          <label htmlFor='password' className='block text-sm leading-6 font-medium text-slate-900'>
            Password
          </label>
          <div className='text-sm'>
            <Link href='/password/reset' className='font-semibold text-sky-600 hover:text-sky-500'>
              Forgot password?
            </Link>
          </div>
        </div>
        <div className='mt-2'>
          <Input
            aria-invalid={error ? true : false}
            ref={passwordRef}
            id='password'
            name='password'
            type='password'
            autoComplete='current-password'
            placeholder='Password'
            required
          />
        </div>
        {error && <p className='mt-2 text-sm text-red-400'>{error}</p>}
      </div>

      <div>
        <Button type='submit' disabled={isLoading} className='w-full justify-center'>
          Sign In
        </Button>
      </div>
    </form>
  );
}
