// Components
import AuthLayout from '@/layouts/auth/layout';
import { Form, Head, Link } from '@inertiajs/react';
import { Button } from '@primer/react';

export default function VerifyEmail({ status }: { status?: string }) {
    return (
        <AuthLayout title="Verify email" description="Please verify your email address by clicking on the link we just emailed to you.">
            <Head title="Email verification" />

            {status === 'verification-link-sent' && (
                <div className="mb-4 text-center text-sm font-medium text-green-600">
                    A new verification link has been sent to the email address you provided during registration.
                </div>
            )}

            <Form method="post" action={route('verification.send')} className="tw:space-y-6 tw:text-center">
                {({ processing }) => (
                    <>
                        <Button disabled={processing} loading={processing}>
                            Resend verification email
                        </Button>

                        <Link href={route('logout')} method="post" className="tw:mx-auto tw:block tw:text-sm">
                            Log out
                        </Link>
                    </>
                )}
            </Form>
        </AuthLayout>
    );
}
