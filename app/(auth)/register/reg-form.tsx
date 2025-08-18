'use client';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Button } from '@/components/Button';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import royalsApi from '@/lib/api';
import { toast } from 'sonner';
import { XiorError } from 'xior';
import { useRouter } from 'next/navigation';

export function RegForm() {
  const [wantsToManageCampaigns, setWantsToManageCampaigns] = useState(false);
  const [errorMessage, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();

  const { register, handleSubmit } = useForm();

  const onSubmit = async (data: any) => {
    setIsSubmitting(true);
    setMessage('');

    const formData = {
      name: data.name,
      email: data.email,
      password: data.password,
      ...(wantsToManageCampaigns && {
        company_name: data.company_name,
        role: 'owner',
      }),
    };

    console.log(formData);

    royalsApi
      .post('/register', formData)
      .then(() => {
        setIsSubmitting(false);
        toast.success('Your new account was setup you can now login.');
        router.replace('/sign-in');
      })
      .catch((err) => {
        if (err instanceof XiorError) setMessage(err.response?.data.message);
        else setMessage(err.message);
        setIsSubmitting(false);
      });
  };

  return (
    <form className='space-y-6' onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor='name' className='block text-sm leading-6 font-medium text-slate-900'>
          Name
        </label>
        <div className='mt-2'>
          <Input
            type='text'
            id='name'
            placeholder='John Smith'
            {...register('name', { required: true })}
          />
        </div>
      </div>
      <div>
        <label htmlFor='email' className='block text-sm leading-6 font-medium text-slate-900'>
          Email address
        </label>
        <div className='mt-2'>
          <Input
            type='email'
            id='email'
            placeholder='you@example.com'
            {...register('email', { required: true })}
          />
        </div>
      </div>

      <div>
        <label htmlFor='password' className='block text-sm leading-6 font-medium text-slate-900'>
          Password
        </label>
        <div className='mt-2'>
          <Input
            type='password'
            id='password'
            placeholder='Password'
            {...register('password', { required: true })}
          />
        </div>
        {errorMessage && <p className='text-icon-danger mt-1 text-sm'>{errorMessage}</p>}
      </div>

      {wantsToManageCampaigns && (
        <div>
          <label
            htmlFor='company_name'
            className='block text-sm leading-6 font-medium text-slate-900'
          >
            Company Name
          </label>
          <div className='mt-2'>
            <Input
              type='text'
              id='company_name'
              placeholder='Organisation Name'
              {...register('company_name', { required: wantsToManageCampaigns })}
            />
          </div>
        </div>
      )}

      <div className='flex items-center gap-3'>
        <Checkbox
          id='campaigns'
          checked={wantsToManageCampaigns}
          onCheckedChange={(checked) => setWantsToManageCampaigns(checked === true)}
        />
        <Label htmlFor='campaigns'>I want to create and manage loyalty campaigns</Label>
      </div>

      <Button type='submit' className='w-full justify-center' disabled={isSubmitting}>
        {isSubmitting ? 'Creating account...' : 'Continue'}
      </Button>
    </form>
  );
}
