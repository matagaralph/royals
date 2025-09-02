import { Input } from '@/components/input';
import InputError from '@/components/input-error';
import AuthLayout from '@/layouts/auth/layout';
import { Form, Head } from '@inertiajs/react';
import { Button, FormControl } from '@primer/react';

interface ResetPasswordProps {
    token: string;
    email: string;
}

export default function ResetPassword({ token, email }: ResetPasswordProps) {
    return (
        <AuthLayout title="Reset password" description="Please enter your new password below">
            <Head title="Reset password" />

            <Form
                method="post"
                action={route('password.store')}
                transform={(data) => ({ ...data, token, email })}
                resetOnSuccess={['password', 'password_confirmation']}
            >
                {({ processing, errors }) => (
                    <div className="tw:grid tw:gap-6">
                        <div className="tw:grid tw:gap-2">
                            <FormControl>
                                <FormControl.Label>Email</FormControl.Label>
                                <Input block type="email" name="email" autoComplete="email" value={email} className="tw:mt-1" disabled />
                            </FormControl>
                            <InputError message={errors.email} className="mt-2" />
                        </div>

                        <div className="tw:grid tw:gap-2">
                            <FormControl>
                                <FormControl.Label>Password</FormControl.Label>
                                <Input
                                    block
                                    type="password"
                                    name="password"
                                    autoComplete="new-password"
                                    className="tw:mt-1"
                                    autoFocus
                                    placeholder="Password"
                                />
                            </FormControl>
                            <InputError message={errors.password} />
                        </div>

                        <div className="tw:grid tw:gap-2">
                            <FormControl>
                                <FormControl.Label>Confirm password</FormControl.Label>
                                <Input
                                    block
                                    id="password_confirmation"
                                    type="password"
                                    name="password_confirmation"
                                    autoComplete="new-password"
                                    className="mt-1 block w-full"
                                    placeholder="Confirm password"
                                />
                            </FormControl>
                            <InputError message={errors.password_confirmation} className="mt-2" />
                        </div>

                        <Button variant="primary" type="submit" className="tw:mt-4 tw:w-full" disabled={processing} loading={processing}>
                            Reset password
                        </Button>
                    </div>
                )}
            </Form>
        </AuthLayout>
    );
}
