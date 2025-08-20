import Link from 'next/link';

const navigation = {
  main: [
    { name: 'About', href: '/about' },
    { name: 'Support', href: '/support' },
    { name: 'Manage Campaigns', href: '/admin' },
    { name: 'My Rewards', href: '/shopper' },
    { name: 'Reedem Voucher', href: 'admin/issue-vouchers' },
    { name: 'Verify Reward', href: 'admin/verify-reward' },
  ],
};

export function Footer() {
  return (
    <footer className='bg-white'>
      <div className='mx-auto max-w-7xl overflow-hidden px-4 pb-8 lg:px-8'>
        <nav
          className='-mb-6 columns-2 sm:flex sm:justify-center sm:space-x-12'
          aria-label='Footer'
        >
          {navigation.main.map((item) => (
            <div key={item.name} className='pb-6'>
              <Link
                href={item.href}
                className='text-sm leading-6 text-slate-600 hover:text-slate-900'
              >
                {item.name}
              </Link>
            </div>
          ))}
        </nav>

        <p className='mt-10 text-center text-xs leading-5 text-slate-500'>
          &copy; {new Date().getFullYear()} Royals Africa. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
