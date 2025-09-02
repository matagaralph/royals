import { cn } from '@/lib/utils';
import { TextInput, type TextInputProps } from '@primer/react';

export function Input(props: TextInputProps) {
    const { className, ...rest } = props;

    return <TextInput {...rest} className={cn('tw:!h-9', className)} />;
}
