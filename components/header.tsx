import Link from 'next/link';
import { BiChevronRight, BiMenu } from 'react-icons/bi';
import { Button } from './Button';

export function Header() {
  return (
    <div className='border-default border-b bg-white'>
      <div className='flex h-14 items-center justify-between gap-8 px-4 sm:px-6'>
        <div className='flex items-center gap-4'>
          <Link className='flex shrink-0 gap-x-3' aria-label='Home' href='/'>
            <img src='/favicon.svg' className='h-5' />
            Royals
          </Link>
        </div>
        <div className='flex items-center gap-6 max-md:hidden'>
          <Link className='text-sm/6 text-gray-950' href='/'>
            Home
          </Link>
          <Link className='text-sm/6 text-gray-950' href='/blog'>
            Campaigns
          </Link>
          <Link className='text-sm/6 text-gray-950' href='/about'>
            About
          </Link>
          <Link className='text-sm/6 text-gray-950' href='/contact'>
            Contact US
          </Link>
          <div className='h-6 w-px bg-gray-950/10'></div>
          <Link className='text-sm/6 text-gray-950' href='/contact'>
            Sign In
          </Link>

          <Button size='xs' rightSlot={<BiChevronRight className='size-4' />}>
            Get Started
          </Button>
        </div>
        <div className='flex items-center gap-2.5 md:hidden'>
          <button
            type='button'
            className='relative inline-grid size-7 place-items-center rounded-md text-gray-950'
            aria-label='Navigation'
          >
            <span className='absolute top-1/2 left-1/2 size-11 -translate-1/2 pointer-fine:hidden' />
            <BiMenu className='size-6' />
          </button>
        </div>
      </div>
    </div>
  );
}
