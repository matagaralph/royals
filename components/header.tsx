'use client';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { signOut, useSession } from 'next-auth/react';
import Link from 'next/link';
import { BiChevronRight, BiMenu } from 'react-icons/bi';
import { FiLogOut } from 'react-icons/fi';
import { GoInbox, GoPerson } from 'react-icons/go';
import { Button } from './Button';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from './ui/navigation-menu';

export function Header() {
  const { data: session } = useSession();
  return (
    <div className='border-default border-b bg-white'>
      <div className='flex h-14 items-center justify-between gap-8 px-4 sm:px-6'>
        <div className='flex items-center gap-4'>
          <Link className='flex shrink-0 gap-x-3 text-base font-medium' aria-label='Home' href='/'>
            <img src='/logo.png' className='h-5' />
            Royals
          </Link>
        </div>
        <div className='flex items-center gap-6 max-md:hidden'>
          <Link className='text-sm/6 text-gray-950' href='/'>
            Home
          </Link>
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Campaigns</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className='grid w-[200px] gap-4'>
                    <li>
                      <NavigationMenuLink asChild>
                        <Link href='/admin'>My Campaigns</Link>
                      </NavigationMenuLink>
                      <NavigationMenuLink asChild>
                        <Link href='#'>Reedem Vouchers</Link>
                      </NavigationMenuLink>
                      <NavigationMenuLink asChild>
                        <Link href='#'>Verify Reward</Link>
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          <Link className='text-sm/6 text-gray-950' href='/about'>
            About
          </Link>
          <Link className='text-sm/6 text-gray-950' href='/contact'>
            Contact US
          </Link>
          <div className='h-6 w-px bg-gray-950/10'></div>
          {session ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Avatar>
                  <AvatarImage src='/avatar.png' />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
              </DropdownMenuTrigger>
              <DropdownMenuContent className='mr-2 w-48'>
                <DropdownMenuLabel className='p-0 font-normal'>
                  <div className='flex items-center gap-2 px-1 py-1.5 text-left text-sm'>
                    <div className='grid flex-1 text-left text-sm leading-tight'>
                      <span className='truncate font-medium'>{session.user.name}</span>
                      <span className='text-muted-foreground truncate text-xs'>
                        {session.user.email}
                      </span>
                    </div>
                  </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <GoPerson />
                  Account
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <GoInbox />
                  Notifications
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem variant='destructive' onClick={() => signOut()}>
                  <FiLogOut />
                  Sign Out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <>
              <Link className='text-sm/6 text-gray-950' href='/sign-in'>
                Sign In
              </Link>

              <Button
                size='xs'
                className='rounded-full'
                rightSlot={<BiChevronRight className='size-4' />}
              >
                Get Started
              </Button>
            </>
          )}
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
