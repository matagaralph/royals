import { RootLayout } from '@/layouts/app/layout';
import { Head } from '@inertiajs/react';
import { Button } from '@primer/react';

export default function Welcome() {
    // const {
    //     auth: { user },
    // } = usePage<SharedData>().props;

    return (
        <RootLayout>
            <Head title="Welcome">
                <link rel="preconnect" href="https://rsms.me/" />
                <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
            </Head>
            <main className="tw:mx-auto tw:mt-7 tw:max-w-7xl tw:px-4">
                <Button className="tw:!py-2">Hello</Button>
            </main>
        </RootLayout>
    );
}
