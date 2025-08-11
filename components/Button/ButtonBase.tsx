import { cn } from '@/lib/utils';
import React, { forwardRef } from 'react';
import type { ButtonHTMLAttributes } from 'react';

export type ButtonBaseProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  testID?: string;
};

export const ButtonBase = forwardRef<HTMLButtonElement, ButtonBaseProps>(
  ({ children, testID, className, onClick, type = 'button', disabled = false, ...rest }, ref) => {
    return (
      <button
        className={cn('flex cursor-pointer', className)}
        data-testid={testID}
        disabled={disabled}
        ref={ref}
        type={type}
        onClick={disabled ? undefined : onClick}
        {...rest}
      >
        {children}
      </button>
    );
  }
);

ButtonBase.displayName = 'ButtonBase';
