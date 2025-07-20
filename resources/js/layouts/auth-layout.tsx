import AppLogoIcon from '@/components/app-logo-icon';
import { Link } from '@inertiajs/react';
import { BaseStyles, ThemeProvider } from '@primer/react';
import { type PropsWithChildren } from 'react';

interface AuthLayoutProps {
    name?: string;
    title?: string;
    description?: string;
}

export default function AuthLayout({ children, title, description }: PropsWithChildren<AuthLayoutProps>) {
    return (
        <ThemeProvider>
            <BaseStyles>
                <div className="tw:flex tw:min-h-svh tw:flex-col tw:items-center tw:justify-center tw:gap-6 tw:bg-default tw:p-6 md:tw:p-10">
                    <div className="tw:w-full tw:max-w-sm">
                        <div className="tw:flex tw:flex-col tw:gap-8">
                            <div className="tw:flex tw:flex-col tw:items-center tw:gap-4">
                                <Link href='/' className="tw:flex tw:flex-col tw:items-center tw:gap-2 tw:font-medium">
                                    <div className="tw:mb-1 tw:flex tw:h-9 tw:w-9 tw:items-center tw:justify-center tw:rounded-md">
                                        <AppLogoIcon className="tw:size-9 tw:fill-current tw:text-orange-500 dark:tw:text-white" />
                                    </div>
                                    <span className="tw:sr-only">{title}</span>
                                </Link>

                                <div className="tw:space-y-2 tw:text-center">
                                    <h1 className="tw:text-xl tw:font-medium">{title}</h1>
                                    <p className="tw:text-center tw:text-sm tw:text-muted">{description}</p>
                                </div>
                            </div>
                            {children}
                        </div>
                    </div>
                </div>
            </BaseStyles>
        </ThemeProvider>

    );
}
