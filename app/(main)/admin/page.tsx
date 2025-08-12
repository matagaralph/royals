import { authOptions } from '@/lib/auth';
import { getCurrentUser } from '@/lib/session';
import { redirect } from 'next/navigation';
import { Overview } from './partials/overview';

export default function OwnerIndexPage() {
  const user = getCurrentUser();
  if (!user) redirect(authOptions.pages?.signIn || '/sign-in');
  return (
    <main className='mx-auto max-w-7xl px-4 pt-8 pb-12 sm:px-6 lg:px-8'>
      <Overview />
    </main>
  );
}
