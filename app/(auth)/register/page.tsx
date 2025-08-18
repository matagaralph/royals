import Link from 'next/link';
import { Metadata } from 'next';
import { RegForm } from './reg-form';

export const metadata: Metadata = {
  title: 'Sign Up',
  description: 'Sign up to start participating and managing campaigns on the platform.',
};

export default function LoginPage() {
  return (
    <>
      <div className='flex min-h-dvh flex-1 flex-col justify-center px-6 py-12 lg:px-8'>
        <div className='sm:mx-auto sm:w-full sm:max-w-sm'>
          <img className='mx-auto h-10 w-auto' src='./logo.png' alt='Royals' />
          <h2 className='mt-10 text-center text-2xl leading-9 font-bold tracking-tight text-slate-900'>
            Join Royals to participate in or manage campaigns effortlessly
          </h2>
        </div>

        <div className='mt-10 sm:mx-auto sm:w-full sm:max-w-sm'>
          <RegForm />
          <p className='mt-8 text-center text-sm text-slate-500'>
            Already have an account?
            <Link href='/sign-in' className='mx-1 leading-6 text-blue-600 hover:text-blue-500'>
              Login
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}
