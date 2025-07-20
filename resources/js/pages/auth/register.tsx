import TextLink from '@/components/text-link';
import AuthLayout from '@/layouts/auth-layout';
import { Head } from '@inertiajs/react';
import { Button, FormControl, TextInput } from '@primer/react';

export default function Register() {
    return (
        <AuthLayout title="Create an account" description="Enter your details below to create your account">
            <Head title="Register" />
            <form className="tw:flex tw:flex-col tw:gap-6">
                <div className="tw:grid tw:gap-6">
                    <div className="tw:grid tw:gap-2">
                        <FormControl required id="name">
                            <FormControl.Label htmlFor="name">Name</FormControl.Label>
                            <TextInput name="name" block />
                        </FormControl>
                    </div>
                    <div className="tw:grid tw:gap-2">
                        <FormControl required id="email">
                            <FormControl.Label htmlFor="email">Email</FormControl.Label>
                            <TextInput name="email" placeholder="someone@example.com" block />
                        </FormControl>
                    </div>

                    <div className="tw:grid tw:gap-2">
                        <FormControl required id="password">
                            <FormControl.Label>Password</FormControl.Label>
                            <TextInput
                                type="password"
                                tabIndex={3}
                                autoComplete="new-password"
                                // value={data.password}
                                // onChange={(e) => setData('password', e.target.value)}
                                // disabled={processing}
                                placeholder="Password"
                                block
                            />
                        </FormControl>
                    </div>

                    <div className="tw:grid tw:gap-2">
                        <FormControl required id="password_confirmation">
                            <FormControl.Label>Confirm Password</FormControl.Label>
                            <TextInput
                                type="password"
                                tabIndex={4}
                                autoComplete="new-password"
                                // value={data.password_confirmation}
                                // onChange={(e) => setData('password_confirmation', e.target.value)}
                                // disabled={processing}
                                placeholder="Confirm password"
                                block
                            />
                        </FormControl>
                    </div>

                    <Button variant="primary">Create account</Button>
                </div>

                <div className="text-center text-sm text-muted-foreground">
                    Already have an account?{' '}
                    <TextLink href="/login" tabIndex={6}>
                        Log in
                    </TextLink>
                </div>
            </form>
        </AuthLayout>
    );
}
