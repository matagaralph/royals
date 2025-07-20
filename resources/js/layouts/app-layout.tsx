import { BaseStyles, ThemeProvider } from '@primer/react';
import { ReactNode } from 'react';

export default function AppLayout({ children }: { children: ReactNode }) {
    return (
        <ThemeProvider>
            <BaseStyles>
                <>
                    <AppHeader />
                    {children}
                </>
            </BaseStyles>
        </ThemeProvider>
    );
}

function AppHeader() {
    return (
        <header className='tw:border-b tw:border-b-default tw:h-14'></header>
    )
}
