import { Input } from '@/components/input';
import { RootLayout } from '@/layouts/app/layout';
import { Form, Head } from '@inertiajs/react';
import { Button, FormControl } from '@primer/react';

export default function Login() {
    return (
        <RootLayout>
            <Head title="Sign In" />
            <div className="tw:fixed tw:top-1/2 tw:left-1/2 tw:mx-auto tw:flex tw:w-full tw:max-w-[354px] tw:-translate-x-1/2 tw:-translate-y-1/2 tw:flex-col">
                <Form method="post" action={route('login')} resetOnSuccess={['password']} className="tw:mt-6 tw:space-y-6">
                    {({ processing, errors }) => (
                        <>
                            <div>
                                <FormControl required>
                                    <FormControl.Label>Email</FormControl.Label>
                                    <Input tabIndex={1} name="email" block type="email" placeholder="name@domain.com" autoComplete="email" />
                                </FormControl>
                            </div>

                            <div>
                                <FormControl required>
                                    <FormControl.Label>Password</FormControl.Label>
                                    <Input
                                        block
                                        name="password"
                                        tabIndex={2}
                                        type="password"
                                        placeholder="Password"
                                        autoComplete="current-password"
                                    />
                                </FormControl>
                                {errors && <p className="tw:text-sm tw:text-[var(--fgColor-danger)]">{Object.values(errors)[0] as string}</p>}
                            </div>
                            <Button disabled={processing} loading={processing} className="tw:!py-2" block variant="primary" type="submit">
                                Continue with email
                            </Button>
                        </>
                    )}
                </Form>
            </div>
        </RootLayout>
    );
}
