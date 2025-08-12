'use client';

import { Button } from '@/components/Button';
import { capitalize } from '@/components/Button/helpers';
import { Badge } from '@/components/ui/badge';
import {
  DescriptionDetails,
  DescriptionList,
  DescriptionTerm,
} from '@/components/ui/description-list';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Divider } from '@/components/ui/divider';
import { Heading, Subheading } from '@/components/ui/heading';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
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
import { User } from 'next-auth';
import Link from 'next/link';
import { useState } from 'react';
import { GoCalendar, GoChevronLeft, GoCreditCard, GoPersonAdd } from 'react-icons/go';
import { toast } from 'sonner';

export default function Campaign({ campaign, user }: { campaign: CampaignResponse; user: User }) {
  return (
    <>
      <div className='max-lg:hidden'>
        <Link href='/admin' className='inline-flex items-center gap-2 text-sm/6 text-slate-500'>
          <GoChevronLeft className='size-4 fill-slate-400' />
          Campaigns
        </Link>
      </div>
      <div className='mt-4 lg:mt-8'>
        <div className='flex items-center gap-4'>
          <Heading>Campaign #{campaign.id}</Heading>
          <Badge color='lime'>{capitalize(campaign.status)}</Badge>
        </div>
        <div className='isolate mt-2.5 flex flex-wrap justify-between gap-x-6 gap-y-4'>
          <div className='flex flex-wrap gap-x-10 gap-y-4 py-1.5'>
            <span className='flex items-center gap-3 text-base/6 text-slate-950 sm:text-sm/6'>
              <GoCalendar className='size-4 shrink-0 fill-slate-400' />
              <span>{format(campaign.start_date, 'dd MMM HH:mm')}</span>
            </span>
            <span className='flex items-center gap-3 text-base/6 text-slate-950 sm:text-sm/6'>
              <GoCreditCard className='size-4 shrink-0 fill-slate-400' />
              <span>{currencyFormatter.format(campaign.min_spend_for_point)}</span>
            </span>
            <span className='flex items-center gap-3 text-base/6 text-slate-950 sm:text-sm/6'>
              <GoCalendar className='size-4 shrink-0 fill-slate-400' />
              <span>{format(campaign.end_date, 'dd MMM HH:mm')}</span>
            </span>
          </div>
          <div className='flex gap-4'>
            <Button size='xs' theme='secondary'>
              Issue Voucher
            </Button>

            <AssignIssuer role={user.role} campaign_id={campaign.id} />
          </div>
        </div>
        <div className='mt-12'>
          <Subheading>Summary</Subheading>
          <Divider className='mt-4' />
          <DescriptionList>
            <DescriptionTerm>Duration</DescriptionTerm>
            <DescriptionDetails>143 days</DescriptionDetails>
            <DescriptionTerm>Number of vouchers</DescriptionTerm>
            <DescriptionDetails>5</DescriptionDetails>
            <DescriptionTerm>Points per Voucher</DescriptionTerm>
            <DescriptionDetails>10</DescriptionDetails>
            <DescriptionTerm>Assigned Issuers</DescriptionTerm>
            <DescriptionDetails>2</DescriptionDetails>
          </DescriptionList>
        </div>
        <div className='mt-12'>
          <Subheading>Rewards</Subheading>
          <Divider className='mt-4' />
          {campaign.rewards ? (
            <Table>
              <TableHead>
                <TableRow>
                  <TableHeader>Reward ID</TableHeader>
                  <TableHeader>Created At</TableHeader>
                  <TableHeader>Points Required</TableHeader>
                  <TableHeader className='relative w-0'>
                    <span className='sr-only'>Actions</span>
                  </TableHeader>
                </TableRow>
              </TableHead>
              <TableBody>
                {campaign.rewards.map((rewared) => (
                  <TableRow key={rewared.id}>
                    <TableCell>{rewared.id}</TableCell>
                    <TableCell>{format(rewared.created_at, 'yyyy-MM-dd HH:mm')}</TableCell>
                    <TableCell>{rewared.points_required}</TableCell>
                    <TableCell className='text-destructive cursor-pointer'>Delete</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          ) : (
            <p className='text-center text-sm'>No rewards</p>
          )}
        </div>
      </div>
    </>
  );
}

function AssignIssuer({ role, campaign_id }: { role: string; campaign_id: number }) {
  const { data: issuers } = useQuery<Issuer[], Error>({
    queryKey: ['issuers'],
    queryFn: () => royalsApi.get<Issuer[]>(`/owner/company/issuers`).then((res) => res.data),
  });
  const [selectedIssuerId, setSelectedIssuerId] = useState<string | null>(null);

  return (
    <>
      <Dialog>
        <DialogTrigger asChild>
          <Button
            size='xs'
            disabled={role === 'issuer'}
            leftSlot={<GoPersonAdd className='size-4' />}
          >
            Assign Issuer
          </Button>
        </DialogTrigger>
        <DialogContent className='sm:max-w-[425px]'>
          <DialogHeader>
            <DialogTitle>Manage Campaign</DialogTitle>
            <DialogDescription>
              You can manage or add members in your account settings.
            </DialogDescription>
          </DialogHeader>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              royalsApi
                .post(`/owner/campaigns/${campaign_id}/assign-issuer`, {
                  user_id: parseInt(selectedIssuerId!),
                })
                .then((res) => {
                  toast.success(res.data.message);
                  window.location.reload();
                })
                .catch(() => toast.error('Something went wrong, try again later.'));
            }}
          >
            <div className='grid gap-4'>
              <div className='mb-3 grid gap-3'>
                <Label htmlFor='name-1'>Select user</Label>
                <Select onValueChange={(value) => setSelectedIssuerId(value)}>
                  <SelectTrigger className='w-full'>
                    <SelectValue placeholder='Select the member' />
                  </SelectTrigger>
                  <SelectContent>
                    {issuers &&
                      issuers.map((issuer) => (
                        <SelectItem key={issuer.id} value={issuer.id.toString()}>
                          {issuer.name}
                        </SelectItem>
                      ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
            <DialogFooter>
              <DialogClose asChild>
                <Button size='xs' theme='secondary'>
                  Cancel
                </Button>
              </DialogClose>
              <Button size='xs' type='submit'>
                Save
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
}
