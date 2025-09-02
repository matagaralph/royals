import { ThemeProvider } from '@/components/theme-provider';
import { ReactNode } from 'react';

export function RootLayout({ children }: { children: ReactNode }) {
    return (
        <ThemeProvider>
            <header className="tw:h-14 tw:border-b tw:border-b-[var(--borderColor-default)]"></header>
            {children}
        </ThemeProvider>
    );
}
