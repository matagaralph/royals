import { BaseStyles, ThemeProvider as PrimerThemeProvider } from '@primer/react';
import { ReactNode } from 'react';

export function ThemeProvider({ children }: { children: ReactNode }) {
    return (
        <PrimerThemeProvider colorMode="light">
            <BaseStyles>{children}</BaseStyles>
        </PrimerThemeProvider>
    );
}
