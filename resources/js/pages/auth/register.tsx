import { Input } from '@/components/input';
import InputError from '@/components/input-error';
import AuthLayout from '@/layouts/auth/layout';
import { Form, Head, Link } from '@inertiajs/react';
import { Button, FormControl } from '@primer/react';

export default function Register() {
    return (
        <AuthLayout title="Create an account" description="Enter your details below to create your account">
            <Head title="Register" />
            <Form
                method="post"
                action={route('register')}
                resetOnSuccess={['password', 'password_confirmation']}
                disableWhileProcessing
                className="tw:flex tw:flex-col tw:gap-6"
            >
                {({ processing, errors }) => (
                    <>
                        <div className="tw:grid tw:gap-6">
                            <div className="tw:grid tw:gap-2">
                                <FormControl>
                                    <FormControl.Label>Name</FormControl.Label>
                                    <Input
                                        block
                                        id="name"
                                        type="text"
                                        required
                                        autoFocus
                                        tabIndex={1}
                                        autoComplete="name"
                                        name="name"
                                        placeholder="Full name"
                                    />
                                </FormControl>
                                <InputError message={errors.name} className="mt-2" />
                            </div>

                            <div className="tw:grid tw:gap-2">
                                <FormControl>
                                    <FormControl.Label>Email address</FormControl.Label>
                                    <Input
                                        block
                                        id="email"
                                        type="email"
                                        required
                                        tabIndex={2}
                                        autoComplete="email"
                                        name="email"
                                        placeholder="email@example.com"
                                    />
                                </FormControl>
                                <InputError message={errors.email} />
                            </div>

                            <div className="tw:grid tw:gap-2">
                                <FormControl>
                                    <FormControl.Label>New Password</FormControl.Label>
                                    <Input
                                        block
                                        id="password"
                                        type="password"
                                        required
                                        tabIndex={3}
                                        autoComplete="new-password"
                                        name="password"
                                        placeholder="Password"
                                    />
                                </FormControl>
                                <InputError message={errors.password} />
                            </div>

                            <div className="tw:grid tw:gap-2">
                                <FormControl>
                                    <FormControl.Label>Password confirmation</FormControl.Label>
                                    <Input
                                        block
                                        id="password_confirmation"
                                        type="password"
                                        required
                                        tabIndex={4}
                                        autoComplete="new-password"
                                        name="password_confirmation"
                                        placeholder="Confirm password"
                                    />
                                </FormControl>

                                <InputError message={errors.password_confirmation} />
                            </div>

                            <Button type="submit" loading={processing} variant="primary" className="tw:mt-2" tabIndex={5}>
                                Create account
                            </Button>
                        </div>

                        <div className="tw:text-center tw:text-sm tw:text-[var(--fgColor-muted)]">
                            Already have an account?
                            <Link className="tw:mx-1" href={route('login')} tabIndex={6}>
                                Log in
                            </Link>
                        </div>
                    </>
                )}
            </Form>
        </AuthLayout>
    );
}
