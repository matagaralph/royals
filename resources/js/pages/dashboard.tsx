import AppLayout from '@/layouts/app-layout';
import { Button } from '@primer/react';

export default function Dashboard() {
    return (
        <AppLayout>
            <header className="tw:h-14 tw:border-b tw:border-b-default"></header>
            <main className="tw:mx-auto tw:max-w-7xl tw:px-4 tw:pt-8">
                <Button>Button</Button>
            </main>
        </AppLayout>
    );
}
