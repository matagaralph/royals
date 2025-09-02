import { RootLayout } from '@/layouts/app/layout';
import { Head, usePage } from '@inertiajs/react';

export default function Campaigns() {
    const { campaigns } = usePage().props;
    console.log(campaigns);
    return (
        <RootLayout>
            <Head title="Campaigns" />
            <main className="tw:mx-auto tw:max-w-7xl tw:px-4 tw:pt-8"></main>
        </RootLayout>
    );
}
