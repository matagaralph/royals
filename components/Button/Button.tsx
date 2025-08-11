import React, {
  cloneElement,
  ForwardedRef,
  forwardRef,
  isValidElement,
  PropsWithChildren,
} from 'react';
import type { ReactElement } from 'react';

import { ButtonBase, ButtonBaseProps } from './ButtonBase';
import { titleCase } from './helpers';
import { LinkBase, LinkBaseProps } from '../Link';
import { cn } from '@/lib/utils';

export type ButtonSize = '2xs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
export type ButtonTheme =
  | 'primary'
  | 'secondary'
  | 'tertiary'
  | 'quaternary'
  | 'primary-destructive'
  | 'secondary-destructive'
  | 'tertiary-destructive';

export type ButtonProps = ButtonBaseProps &
  LinkBaseProps & {
    size?: ButtonSize;
    theme?: ButtonTheme;
    leftSlot?: ReactElement;
    rightSlot?: ReactElement;
    skipCapitalization?: boolean;
  };

function getSizeClasses(size: ButtonSize) {
  switch (size) {
    case '2xs':
      return 'h-7 px-1.5 text-3xs';
    case 'xs':
      return 'h-8 px-3 text-sm';
    case 'sm':
      return 'h-9 px-4 text-sm';
    case 'md':
      return 'h-10 px-4 text-xs';
    case 'lg':
      return 'h-11 px-6 text-base';
    case 'xl':
      return 'h-12 px-6 text-base';
    case '2xl':
      return 'h-15 px-6 text-lg';
  }
}

function getThemeClasses(theme: ButtonTheme, disabled = false) {
  switch (theme) {
    case 'primary':
      return cn(
        'border-btn-primary bg-btn-primary text-btn-primary shadow-xs',
        !disabled && 'hocus:bg-btn-primary-hover active:scale-98',
        disabled && 'bg-btn-primary-disabled border-btn-primary-disabled text-btn-primary-disabled'
      );
    case 'primary-destructive':
      return cn(
        'border-btn-primary-destructive bg-btn-primary-destructive text-btn-primary-destructive shadow-xs',
        !disabled && 'hocus:bg-btn-primary-destructive-hover active:scale-98',
        disabled &&
          'bg-btn-primary-destructive-disabled border-btn-primary-destructive-disabled text-btn-primary-destructive-disabled'
      );
    case 'secondary':
      return cn(
        'border-btn-secondary bg-btn-secondary text-btn-secondary shadow-xs',
        !disabled && 'hocus:bg-btn-secondary-hover active:scale-98',
        disabled &&
          'bg-btn-secondary-disabled border-btn-secondary-disabled text-btn-secondary-disabled'
      );
    case 'secondary-destructive':
      return cn(
        'border-btn-secondary-destructive bg-btn-secondary-destructive text-btn-secondary-destructive shadow-xs',
        !disabled && 'hocus:bg-btn-secondary-destructive-hover active:scale-98',
        disabled &&
          'bg-btn-secondary-destructive-disabled border-btn-secondary-destructive-disabled text-btn-secondary-destructive-disabled'
      );
    case 'tertiary':
      return cn(
        'border-btn-tertiary bg-btn-tertiary text-btn-tertiary shadow-none',
        !disabled && 'hocus:bg-btn-tertiary-hover active:scale-98',
        disabled &&
          'bg-btn-tertiary-disabled border-btn-tertiary-disabled text-btn-tertiary-disabled'
      );
    case 'tertiary-destructive':
      return cn(
        'border-btn-tertiary-destructive bg-btn-tertiary-destructive text-btn-tertiary-destructive shadow-none',
        !disabled && 'hocus:bg-btn-tertiary-destructive-hover active:scale-98',
        disabled &&
          'bg-btn-tertiary-destructive-disabled border-btn-tertiary-destructive-disabled text-btn-tertiary-destructive-disabled'
      );
    case 'quaternary':
      return cn(
        'border-btn-quaternary bg-btn-quaternary text-btn-quaternary shadow-none',
        !disabled && 'hocus:bg-btn-quaternary-hover active:scale-98',
        disabled &&
          'bg-btn-quaternary-disabled border-btn-quaternary-disabled text-btn-quaternary-disabled'
      );
  }
}

function getIconSizeClasses(size: ButtonSize) {
  switch (size) {
    case '2xs':
      return 'icon-2xs';
    case 'xs':
      return 'icon-xs';
    case 'sm':
      return 'icon-sm';
    case 'md':
      return 'icon-md';
    case 'lg':
      return 'icon-md';
    case 'xl':
      return 'icon-lg';
    case '2xl':
      return 'icon-lg';
  }
}

function getThemedIconClasses(theme: ButtonTheme) {
  switch (theme) {
    case 'primary':
      return 'text-btn-primary-icon';
    case 'primary-destructive':
      return 'text-btn-primary-destructive-icon';
    case 'secondary':
      return 'text-btn-secondary-icon';
    case 'secondary-destructive':
      return 'text-btn-secondary-destructive-icon';
    case 'tertiary':
      return 'text-btn-tertiary-icon';
    case 'tertiary-destructive':
      return 'text-btn-tertiary-destructive-icon';
    case 'quaternary':
      return 'text-btn-quaternary-icon';
  }
}

function getButtonIconClasses(size: ButtonSize) {
  switch (size) {
    case '2xs':
      return 'px-0 w-7 justify-center items-center';
    case 'xs':
      return 'px-0 w-8 justify-center items-center';
    case 'sm':
      return 'px-0 w-9 justify-center items-center';
    case 'md':
      return 'px-0 w-10 justify-center items-center';
    case 'lg':
      return 'px-0 w-11 justify-center items-center';
    case 'xl':
      return 'px-0 w-12 justify-center items-center';
    case '2xl':
      return 'px-0 w-15 justify-center items-center';
  }
}

function isIconElement(element: ReactElement) {
  if (isValidElement<ReactElement>(element)) {
    // @ts-ignore React Portal did not have `displayName` prop, but it is a valid element
    return element.type?.displayName?.endsWith('Icon') ?? false;
  }
  return false;
}

function getIconProps(element: ReactElement, classNames: string) {
  if (!isValidElement<PropsWithChildren<{ className?: string }>>(element)) {
    return element;
  }
  return {
    ...element.props,
    className: cn(classNames, element.props.className),
  };
}

export const Button = forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(
  (
    {
      children,
      size = 'sm',
      theme = 'primary',
      skipCapitalization = false,
      href,
      disabled,
      className,
      leftSlot,
      rightSlot,
      openInNewTab,
      ...rest
    },
    ref
  ) => {
    const isLeftSlotIcon = leftSlot && isIconElement(leftSlot);
    const isRightSlotIcon = rightSlot && isIconElement(rightSlot);
    const iconClasses =
      (isLeftSlotIcon || isRightSlotIcon) &&
      cn(getIconSizeClasses(size), getThemedIconClasses(theme), disabled && 'opacity-60');
    const isSingleIconButton = (leftSlot || rightSlot) && !children;

    const twClasses = cn(
      `inline-flex border border-solid rounded-md font-medium items-center whitespace-nowrap transition gap-2`,
      size === 'xs' && 'gap-1.5',
      size === '2xs' && 'gap-1',
      size === '2xl' && 'rounded-md',
      getSizeClasses(size),
      getThemeClasses(theme, disabled),
      isSingleIconButton && getButtonIconClasses(size),
      disabled && 'cursor-default opacity-80 pointer-event-none',
      className
    );

    const content = (
      <>
        {isLeftSlotIcon ? cloneElement(leftSlot, getIconProps(leftSlot, iconClasses)) : leftSlot}
        {children && (
          <span className={cn('flex self-center leading-none text-inherit', href && 'select-none')}>
            {typeof children === 'string' && !skipCapitalization ? titleCase(children) : children}
          </span>
        )}
        {isRightSlotIcon
          ? cloneElement(rightSlot, getIconProps(rightSlot, iconClasses))
          : rightSlot}
      </>
    );

    if (href) {
      return (
        <LinkBase
          href={href}
          className={twClasses}
          disabled={disabled}
          ref={ref as ForwardedRef<HTMLAnchorElement>}
          openInNewTab={openInNewTab}
          {...rest}
        >
          {content}
        </LinkBase>
      );
    } else {
      return (
        <ButtonBase
          className={twClasses}
          disabled={disabled}
          ref={ref as ForwardedRef<HTMLButtonElement>}
          {...rest}
        >
          {content}
        </ButtonBase>
      );
    }
  }
);

Button.displayName = 'Button';
