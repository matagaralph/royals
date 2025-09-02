import { cn } from '@/lib/utils';
import { type HTMLAttributes } from 'react';

export default function InputError({ message, className = '', ...props }: HTMLAttributes<HTMLParagraphElement> & { message?: string }) {
    return message ? (
        <p {...props} className={cn('tw:!my-0 tw:text-sm tw:text-[var(--fgColor-danger)]', className)}>
            {message}
        </p>
    ) : null;
}
