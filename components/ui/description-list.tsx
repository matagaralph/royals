import { cn } from '@/lib/utils';
import { ComponentPropsWithoutRef } from 'react';

export function DescriptionList({ className, ...props }: ComponentPropsWithoutRef<'dl'>) {
  return (
    <dl
      {...props}
      className={cn(
        className,
        'grid grid-cols-1 text-base/6 sm:grid-cols-[min(50%,--spacing(80))_auto] sm:text-sm/6'
      )}
    />
  );
}

export function DescriptionTerm({ className, ...props }: ComponentPropsWithoutRef<'dt'>) {
  return (
    <dt
      {...props}
      className={cn(
        className,
        'col-start-1 border-t border-slate-950/5 pt-3 text-slate-500 first:border-none sm:border-t sm:border-slate-950/5 sm:py-3'
      )}
    />
  );
}

export function DescriptionDetails({ className, ...props }: ComponentPropsWithoutRef<'dd'>) {
  return (
    <dd
      {...props}
      className={cn(
        className,
        'pt-1 pb-3 text-slate-950 sm:border-t sm:border-slate-950/5 sm:py-3 sm:nth-2:border-none'
      )}
    />
  );
}
