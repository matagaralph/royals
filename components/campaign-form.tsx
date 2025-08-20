'use client';

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useState } from 'react';
import { GoPlus } from 'react-icons/go';
import { Button } from './Button';
import { useSession } from 'next-auth/react';
import royalsApi from '@/lib/api';
import { XiorError } from 'xior';
import { toast } from 'sonner';

interface CampaignFormData {
  name: string;
  description: string;
  start_date: string;
  end_date: string;
  min_spend_for_point: number;
  min_points_per_voucher: number;
  company_id?: number | null;
}

export function CampaignFormDialog() {
  const [open, setOpen] = useState(false);
  const { data: session } = useSession();
  const [formData, setFormData] = useState<CampaignFormData>({
    company_id: session?.user.company_id,
    name: '',
    description: '',
    start_date: '',
    end_date: '',
    min_spend_for_point: 0,
    min_points_per_voucher: 0,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
    royalsApi
      .post('/owner/campaigns', {
        ...formData,
        company_id: session?.user.company_id,
        status: 'active',
      })
      .then(() => {
        window.location.reload();
        setFormData({
          name: '',
          description: '',
          start_date: '',
          end_date: '',
          min_spend_for_point: 0,
          min_points_per_voucher: 0,
        });
      })
      .catch((err) => {
        if (err instanceof XiorError) toast.error(err.response?.data.message);
        else toast.error('Something happened try again later');
      });
  };

  const updateFormData = (field: keyof CampaignFormData, value: any) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button size='xs' leftSlot={<GoPlus className='size-4' />}>
          Create Campaign
        </Button>
      </DialogTrigger>
      <DialogContent className='bg-card text-card-foreground sm:max-w-[600px]'>
        <DialogHeader>
          <DialogTitle className='text-foreground text-xl font-semibold'>
            Create New Campaign
          </DialogTitle>
          <DialogDescription className='text-muted-foreground'>
            Set up your campaign details, dates, and reward parameters.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className='space-y-6'>
          <div className='grid grid-cols-1 gap-6 md:grid-cols-2'>
            {/* Campaign Name */}
            <div className='space-y-2'>
              <Label htmlFor='name'>Campaign Name *</Label>
              <Input
                id='name'
                value={formData.name}
                onChange={(e) => updateFormData('name', e.target.value)}
                placeholder='Enter campaign name'
                required
              />
            </div>

            <div className='space-y-2'>
              <Label htmlFor='min_spend'>Min Spend for Point *</Label>
              <Input
                id='min_spend'
                type='number'
                min='1'
                value={formData.min_spend_for_point}
                onChange={(e) =>
                  updateFormData('min_spend_for_point', Number.parseFloat(e.target.value) || 0)
                }
                placeholder='0.00'
                required
              />
            </div>
          </div>

          {/* Description */}
          <div className='space-y-2'>
            <Label htmlFor='description'>Description</Label>
            <Textarea
              id='description'
              value={formData.description}
              onChange={(e) => updateFormData('description', e.target.value)}
              placeholder='Describe your campaign objectives and details'
              className='min-h-[100px] resize-none'
              rows={4}
            />
          </div>

          <div className='grid grid-cols-1 gap-6 md:grid-cols-2'>
            {/* Start Date */}
            <div className='space-y-2'>
              <Label htmlFor='start_date'>Start Date *</Label>
              <Input
                id='start_date'
                type='date'
                value={formData.start_date}
                onChange={(e) => updateFormData('start_date', e.target.value)}
                required
              />
            </div>

            {/* End Date */}
            <div className='space-y-2'>
              <Label htmlFor='end_date'>End Date *</Label>
              <Input
                id='end_date'
                type='date'
                value={formData.end_date}
                min={formData.start_date}
                onChange={(e) => updateFormData('end_date', e.target.value)}
                required
              />
            </div>
          </div>

          {/* Min Points per Voucher */}
          <div className='space-y-2'>
            <Label htmlFor='min_points'>Min Points per Voucher</Label>
            <Input
              id='min_points'
              type='number'
              min='1'
              value={formData.min_points_per_voucher}
              onChange={(e) =>
                updateFormData('min_points_per_voucher', Number.parseInt(e.target.value) || 1)
              }
              placeholder='Enter minimum points required'
            />
          </div>

          <DialogFooter className='gap-2'>
            <Button type='button' theme='secondary' onClick={() => setOpen(false)}>
              Cancel
            </Button>
            <Button type='submit'>Submit</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
