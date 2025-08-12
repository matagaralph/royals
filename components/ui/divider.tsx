import { cn } from '@/lib/utils';

export function Divider({
  soft = false,
  className,
  ...props
}: { soft?: boolean } & React.ComponentPropsWithoutRef<'hr'>) {
  return (
    <hr
      role='presentation'
      {...props}
      className={cn(
        className,
        'w-full border-t',
        soft && 'border-slate-950/5',
        !soft && 'border-slate-950/10'
      )}
    />
  );
}
