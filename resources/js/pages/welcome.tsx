import { Head } from "@inertiajs/react";
import { RootLayout } from "@/components/theme-provider";
import { Button } from "@primer/react";

export default function Welcome() {
    return (
        <RootLayout>
            <Head title="Welcome">
                <link rel="preconnect" href="https://rsms.me/" />
                <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
            </Head>
            <main className="tw:max-w-7xl tw:mx-auto tw:mt-7">
                <Button>Hello</Button>
            </main>
        </RootLayout>
    );
}
