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

interface CampaignFormData {
  name: string;
  description: string;
  start_date: string;
  end_date: string;
  min_spend_for_point: number;
  min_points_per_voucher: number;
}

export function CampaignFormDialog() {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState<CampaignFormData>({
    name: '',
    description: '',
    start_date: '',
    end_date: '',
    min_spend_for_point: 0,
    min_points_per_voucher: 0,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Campaign data:', formData);
    // Handle form submission here
    setOpen(false);
    // Reset form
    setFormData({
      name: '',
      description: '',
      start_date: '',
      end_date: '',
      min_spend_for_point: 0,
      min_points_per_voucher: 0,
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
              <Label htmlFor='name' className='text-foreground text-sm font-medium'>
                Campaign Name *
              </Label>
              <Input
                id='name'
                value={formData.name}
                onChange={(e) => updateFormData('name', e.target.value)}
                placeholder='Enter campaign name'
                className='bg-input border-border focus:ring-ring'
                required
              />
            </div>

            {/* Min Spend for Point */}
            <div className='space-y-2'>
              <Label htmlFor='min_spend' className='text-foreground text-sm font-medium'>
                Min Spend for Point ($) *
              </Label>
              <Input
                id='min_spend'
                type='number'
                min='0'
                step='0.01'
                value={formData.min_spend_for_point}
                onChange={(e) =>
                  updateFormData('min_spend_for_point', Number.parseFloat(e.target.value) || 0)
                }
                placeholder='0.00'
                className='bg-input border-border focus:ring-ring'
                required
              />
            </div>
          </div>

          {/* Description */}
          <div className='space-y-2'>
            <Label htmlFor='description' className='text-foreground text-sm font-medium'>
              Description
            </Label>
            <Textarea
              id='description'
              value={formData.description}
              onChange={(e) => updateFormData('description', e.target.value)}
              placeholder='Describe your campaign objectives and details'
              className='bg-input border-border focus:ring-ring min-h-[100px] resize-none'
              rows={4}
            />
          </div>

          <div className='grid grid-cols-1 gap-6 md:grid-cols-2'>
            {/* Start Date */}
            <div className='space-y-2'>
              <Label htmlFor='start_date' className='text-foreground text-sm font-medium'>
                Start Date *
              </Label>
              <Input
                id='start_date'
                type='date'
                value={formData.start_date}
                onChange={(e) => updateFormData('start_date', e.target.value)}
                className='bg-input border-border focus:ring-ring'
                required
              />
            </div>

            {/* End Date */}
            <div className='space-y-2'>
              <Label htmlFor='end_date' className='text-foreground text-sm font-medium'>
                End Date *
              </Label>
              <Input
                id='end_date'
                type='date'
                value={formData.end_date}
                min={formData.start_date}
                onChange={(e) => updateFormData('end_date', e.target.value)}
                className='bg-input border-border focus:ring-ring'
                required
              />
            </div>
          </div>

          {/* Min Points per Voucher */}
          <div className='space-y-2'>
            <Label htmlFor='min_points' className='text-foreground text-sm font-medium'>
              Min Points per Voucher *
            </Label>
            <Input
              id='min_points'
              type='number'
              min='1'
              value={formData.min_points_per_voucher}
              onChange={(e) =>
                updateFormData('min_points_per_voucher', Number.parseInt(e.target.value) || 0)
              }
              placeholder='Enter minimum points required'
              className='bg-input border-border focus:ring-ring max-w-xs'
              required
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
