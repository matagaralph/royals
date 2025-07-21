import AppLayout from '@/layouts/app-layout';
import { SharedData } from '@/types';
import { usePage } from '@inertiajs/react';
import { Stack } from '@primer/react';
import { InlineMessage } from '@primer/react/experimental';

export default function Dashboard() {
    const { auth } = usePage<SharedData>().props;
    return (
        <AppLayout>
            <main className="tw:mx-auto tw:max-w-7xl tw:px-4 tw:pt-8">
                <Stack>
                    <InlineMessage variant="success">Welcome {auth.user.name}</InlineMessage>
                </Stack>
            </main>
        </AppLayout>
    );
}
