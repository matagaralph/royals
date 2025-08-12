'use client';
import { Button } from '@/components/Button';
import { Badge } from '@/components/ui/badge';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import royalsApi from '@/lib/api';
import { currencyFormatter } from '@/lib/utils';
import { useQuery } from '@tanstack/react-query';
import { format } from 'date-fns';
import Link from 'next/link';
import { GoPlus } from 'react-icons/go';

export function Overview() {
  const { data: campaigns, isLoading } = useQuery<Campaign[], Error>({
    queryKey: ['campaigns'],
    queryFn: () => royalsApi.get<Campaign[]>('/campaigns').then((res) => res.data),
  });

  if (isLoading) return <p className='text-sm'>Loading...</p>;

  if (!campaigns || campaigns.length === 0) {
    return (
      <div className='flex items-center justify-center p-12'>
        <button
          type='button'
          className='relative block w-full rounded-lg border-2 border-dashed border-gray-300 p-12 text-center hover:border-gray-400 focus:ring-2 focus:ring-sky-500 focus:ring-offset-2 focus:outline-none'
        >
          <svg
            className='mx-auto h-12 w-12 text-gray-400'
            stroke='currentColor'
            fill='none'
            viewBox='0 0 48 48'
            aria-hidden='true'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M8 14v20c0 4.418 7.163 8 16 8 1.381 0 2.721-.087 4-.252M8 14c0 4.418 7.163 8 16 8s16-3.582 16-8M8 14c0-4.418 7.163-8 16-8s16 3.582 16 8m0 0v14m0-4c0 4.418-7.163 8-16 8S8 28.418 8 24m32 10v6m0 0v6m0-6h6m-6 0h-6'
            />
          </svg>
          <span className='mt-2 block text-sm font-semibold text-gray-900'>
            Create a new campaign
          </span>
        </button>
      </div>
    );
  }

  return (
    <>
      <div className='mb-6 flex items-center justify-between'>
        <h2 className='text-2xl font-semibold text-gray-900'>Campaigns</h2>
        <Button leftSlot={<GoPlus className='size-4' />}>Create Campaign</Button>
      </div>
      <Table dense striped className='[--gutter:--spacing(6)] sm:[--gutter:--spacing(8)]'>
        <TableHead>
          <TableRow>
            <TableHeader>Name</TableHeader>
            <TableHeader>Points/Voucher</TableHeader>
            <TableHeader>Active From</TableHeader>
            <TableHeader>Spend/Point</TableHeader>
            <TableHeader>Status</TableHeader>
            <TableHeader>End Date</TableHeader>
          </TableRow>
        </TableHead>
        <TableBody>
          {campaigns &&
            campaigns.map((campaign) => (
              <TableRow key={campaign.id}>
                <TableCell className='font-medium text-sky-500'>
                  <Link href={`/admin/campaign/${campaign.id}`}>{campaign.name}</Link>
                </TableCell>
                <TableCell>{campaign.min_points_per_voucher}</TableCell>
                <TableCell>{format(campaign.start_date, 'dd MMM HH:mm')}</TableCell>
                <TableCell>{currencyFormatter.format(campaign.min_spend_for_point)}</TableCell>
                <TableCell>
                  <Badge color={campaign.status === 'active' ? 'fuchsia' : 'yellow'}>
                    {campaign.status}
                  </Badge>
                </TableCell>
                <TableCell>{format(campaign.end_date, 'dd MMM HH:mm')}</TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </>
  );
}
