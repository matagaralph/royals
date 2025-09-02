import AppLogoIcon from '@/components/app-logo-icon';
import { ThemeProvider } from '@/components/theme-provider';
import { Link } from '@inertiajs/react';
import { type PropsWithChildren } from 'react';

interface AuthLayoutProps {
    name?: string;
    title?: string;
    description?: string;
}

export default function AuthLayout({ children, title, description }: PropsWithChildren<AuthLayoutProps>) {
    return (
        <ThemeProvider>
            <div className="md:tw:p-10 tw:flex tw:min-h-svh tw:flex-col tw:items-center tw:justify-center tw:gap-6 tw:bg-[var(--bgColor-default)] tw:p-6">
                <div className="tw:w-full tw:max-w-sm">
                    <div className="tw:flex tw:flex-col tw:gap-8">
                        <div className="tw:flex tw:flex-col tw:items-center tw:gap-4">
                            <Link href={route('home')} className="tw:flex tw:flex-col tw:items-center tw:gap-2 tw:font-medium">
                                <div className="tw:mb-1 tw:flex tw:h-9 tw:w-9 tw:items-center tw:justify-center tw:rounded-md">
                                    <AppLogoIcon className="dark:tw:text-white tw:size-9 tw:fill-current tw:text-[var(--foreground)]" />
                                </div>
                                <span className="tw:sr-only">{title}</span>
                            </Link>

                            <div className="tw:space-y-2 tw:text-center">
                                <h1 className="tw:text-xl tw:font-medium">{title}</h1>
                                <p className="tw:text-center tw:text-sm tw:text-[var(--fgColor-muted)]">{description}</p>
                            </div>
                        </div>
                        {children}
                    </div>
                </div>
            </div>
        </ThemeProvider>
    );
}
