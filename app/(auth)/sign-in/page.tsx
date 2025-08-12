import { Button } from '@/components/Button';
import { Input } from '@/components/ui/input';
import Link from 'next/link';

export default function LoginPage() {
  return (
    <>
      <div className='flex min-h-dvh flex-1 flex-col justify-center px-6 py-12 lg:px-8'>
        <div className='sm:mx-auto sm:w-full sm:max-w-sm'>
          <img className='mx-auto h-10 w-auto' src='./favicon.svg' alt='Your Company' />
          <h2 className='mt-10 text-center text-2xl leading-9 font-bold tracking-tight text-slate-900'>
            Sign in to your account
          </h2>
        </div>

        <div className='mt-10 sm:mx-auto sm:w-full sm:max-w-sm'>
          <form className='space-y-6' action='#' method='POST'>
            <div>
              <label htmlFor='email' className='block text-sm leading-6 font-medium text-slate-900'>
                Email address
              </label>
              <div className='mt-2'>
                <Input
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
                <label
                  htmlFor='password'
                  className='block text-sm leading-6 font-medium text-slate-900'
                >
                  Password
                </label>
                <div className='text-sm'>
                  <a href='#' className='font-semibold text-sky-600 hover:text-sky-500'>
                    Forgot password?
                  </a>
                </div>
              </div>
              <div className='mt-2'>
                <Input
                  id='password'
                  name='password'
                  type='password'
                  autoComplete='current-password'
                  placeholder='Password'
                  required
                />
              </div>
            </div>

            <div>
              <Button type='submit' className='w-full justify-center'>
                Sign In
              </Button>
            </div>
          </form>

          <p className='mt-8 text-center text-sm text-slate-500'>
            Don't have an account?
            <Link href='#' className='mx-1 leading-6 font-semibold text-sky-600 hover:text-sky-500'>
              Get access
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}
