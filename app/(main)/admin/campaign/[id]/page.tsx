import { authOptions } from '@/lib/auth';
import { getCurrentUser } from '@/lib/session';
import { Metadata } from 'next';
import { notFound, redirect } from 'next/navigation';
import Campaign from '../../partials/campaign';

type Props = {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;

  return {
    title: `Campaign #${id}`,
  };
}

export default async function CampaignPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const user = await getCurrentUser();
  if (!user) redirect(authOptions.pages?.signIn || '/sign-in');

  const data = await fetch(`https://api.royals.africa/campaigns/${id}`, {
    headers: {
      Authorization: `Bearer ${user?.access_token}`,
    },
  });
  if (!data.ok && data.status === 404) throw notFound();

  const campaign: CampaignResponse = await data.json();
  console.log(campaign);

  return (
    <main className='mx-auto max-w-7xl px-4 pt-6 sm:px-6 lg:px-8'>
      <Campaign campaign={campaign} user={user} />
    </main>
  );
}
