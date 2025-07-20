import { cn } from '@/lib/utils';
import { Link } from '@inertiajs/react';
import { ComponentProps } from 'react';

type LinkProps = ComponentProps<typeof Link>;

export default function TextLink({ className = '', children, ...props }: LinkProps) {
    return (
        <Link
            className={cn(
                'tw:text-sky-500 tw:underline tw:decoration-neutral-300 tw:underline-offset-4 tw:transition-colors tw:duration-300 tw:ease-out tw:hover:decoration-current! tw:dark:decoration-neutral-500',
                className,
            )}
            {...props}
        >
            {children}
        </Link>
    );
}
