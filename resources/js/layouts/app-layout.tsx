import { BaseStyles, ThemeProvider } from '@primer/react';
import { ReactNode } from 'react';

export default function AppLayout({ children }: { children: ReactNode }) {
    return (
        <ThemeProvider>
            <BaseStyles>{children}</BaseStyles>
        </ThemeProvider>
    );
}
