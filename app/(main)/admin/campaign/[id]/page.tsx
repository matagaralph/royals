import { Metadata } from 'next';
import Campaign from '../../partials/campaign';
import { getCurrentUser } from '@/lib/session';
import { notFound, redirect } from 'next/navigation';
import { authOptions } from '@/lib/auth';

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const { id } = await params;
  return {
    title: `Campaign #${id}`,
  };
}

export default async function CampaignPage({ params }: { params: Promise<{ id: string }> }) {
  const user = await getCurrentUser();
  if (!user) redirect(authOptions.pages?.signIn || '/sign-in');

  const { id } = await params;
  const data = await fetch(`https://royals-8981b378f321.herokuapp.com/api/campaigns/${id}`, {
    headers: {
      Authorization: `Bearer ${user?.access_token}`,
    },
  });
  if (!data.ok && data.status === 404) throw notFound();

  const campaign = await data.json();
  return (
    <main className='mx-auto max-w-7xl px-4 pt-6 sm:px-6 lg:px-8'>
      <Campaign campaign={campaign} user={user} />
    </main>
  );
}
