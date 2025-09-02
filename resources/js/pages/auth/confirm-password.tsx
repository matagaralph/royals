import { Input } from '@/components/input';
import InputError from '@/components/input-error';
import AuthLayout from '@/layouts/auth/layout';
import { Form, Head } from '@inertiajs/react';
import { Button, FormControl } from '@primer/react';

export default function ConfirmPassword() {
    return (
        <AuthLayout
            title="Confirm your password"
            description="This is a secure area of the application. Please confirm your password before continuing."
        >
            <Head title="Confirm password" />

            <Form method="post" action={route('password.confirm')} resetOnSuccess={['password']}>
                {({ processing, errors }) => (
                    <div className="tw:space-y-6">
                        <div className="tw:grid tw:gap-2">
                            <FormControl>
                                <FormControl.Label>Password</FormControl.Label>
                                <Input
                                    block
                                    id="password"
                                    type="password"
                                    name="password"
                                    placeholder="Password"
                                    autoComplete="current-password"
                                    autoFocus
                                />
                            </FormControl>
                            <InputError message={errors.password} />
                        </div>

                        <div className="tw:flex tw:items-center">
                            <Button type="submit" block variant="primary" loading={processing} disabled={processing}>
                                Confirm password
                            </Button>
                        </div>
                    </div>
                )}
            </Form>
        </AuthLayout>
    );
}
