import { ThemeProvider } from '@/components/theme-provider';
import { ReactNode } from 'react';

export function RootLayout({ children }: { children: ReactNode }) {
    return (
        <ThemeProvider>
            <header className="tw:flex tw:h-14 tw:items-center tw:justify-between tw:border-b tw:border-b-[var(--borderColor-default)] tw:bg-white tw:px-4"></header>
            {children}
        </ThemeProvider>
    );
}
