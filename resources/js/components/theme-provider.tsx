import { ReactNode } from "react";
import { BaseStyles, ThemeProvider } from "@primer/react";

export function RootLayout({ children }: { children: ReactNode }) {
    return (
        <ThemeProvider colorMode="light">
            <BaseStyles>{children}</BaseStyles>
        </ThemeProvider>
    );
}
