// Components
import { Input } from '@/components/input';
import InputError from '@/components/input-error';
import AuthLayout from '@/layouts/auth/layout';
import { Form, Head, Link } from '@inertiajs/react';
import { Button, FormControl } from '@primer/react';

export default function ForgotPassword({ status }: { status?: string }) {
    return (
        <AuthLayout title="Forgot password" description="Enter your email to receive a password reset link">
            <Head title="Forgot password" />

            {status && <div className="tw:mb-2 tw:text-center tw:text-sm tw:font-medium tw:text-[var(--fgColor-success)]">{status}</div>}

            <div className="tw:space-y-6">
                <Form method="post" action={route('password.email')}>
                    {({ processing, errors }) => (
                        <>
                            <div className="tw:grid tw:gap-2">
                                <FormControl>
                                    <FormControl.Label>Email address</FormControl.Label>
                                    <Input block type="email" name="email" autoComplete="off" autoFocus placeholder="email@example.com" />
                                </FormControl>
                                <InputError message={errors.email} />
                            </div>

                            <div className="tw:my-6 tw:flex tw:items-center tw:justify-start">
                                <Button variant="primary" type="submit" block disabled={processing} loading={processing}>
                                    Email password reset link
                                </Button>
                            </div>
                        </>
                    )}
                </Form>

                <div className="text-[var(--fgColor-muted)] tw:space-x-1 tw:text-center tw:text-sm">
                    <span>Or, return to</span>
                    <Link href={route('login')}>log in</Link>
                </div>
            </div>
        </AuthLayout>
    );
}
