import Link from 'next/link';
import { AuthForm } from './auth-form';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sign In',
  description: 'Sign in to your Royals account to use the platform.',
};

export default function LoginPage() {
  return (
    <>
      <div className='flex min-h-dvh flex-1 flex-col justify-center px-6 py-12 lg:px-8'>
        <div className='sm:mx-auto sm:w-full sm:max-w-sm'>
          <img className='mx-auto h-10 w-auto' src='./logo.png' alt='Royals' />
          <h2 className='mt-10 text-center text-2xl leading-9 font-bold tracking-tight text-slate-900'>
            Sign in to your account
          </h2>
        </div>

        <div className='mt-10 sm:mx-auto sm:w-full sm:max-w-sm'>
          <AuthForm />

          <p className='mt-8 text-center text-sm text-slate-500'>
            Don't have an account?
            <Link
              href='/registers'
              className='mx-1 leading-6 font-semibold text-sky-600 hover:text-sky-500'
            >
              Get access
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}
