import TextLink from '@/components/text-link';
import AuthLayout from '@/layouts/auth-layout';
import { Head, useForm } from '@inertiajs/react';
import { Button, Checkbox, FormControl, TextInput } from '@primer/react';
import { FormEventHandler } from 'react';

type LoginForm = {
    email: string;
    password: string;
    remember: boolean;
};

interface LoginProps {
    status?: string;
    canResetPassword: boolean;
}

export default function Login({ status, canResetPassword }: LoginProps) {
    const { data, setData, post, processing, errors, reset } = useForm<Required<LoginForm>>({
        email: '',
        password: '',
        remember: false,
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();
        post(route('login'), {
            onFinish: () => reset('password'),
        });
    };

    return (
        <AuthLayout title="Log in to your account" description="Enter your email and password below to log in">
            <Head title="Log in" />
            <form className="tw:flex tw:flex-col tw:gap-6" onSubmit={submit}>
                <div className="tw:grid tw:gap-6">
                    <div className="tw:grid tw:gap-2">
                        <FormControl required id="email">
                            <FormControl.Label htmlFor="email">Email address</FormControl.Label>
                            <TextInput
                                type="email"
                                autoFocus
                                tabIndex={1}
                                autoComplete="email"
                                value={data.email}
                                onChange={(e) => setData('email', e.target.value)}
                                placeholder="someone@example.com"
                                block
                            />
                        </FormControl>
                    </div>
                    <div className="tw:grid tw:gap-2">
                        <FormControl required id="password">
                            <FormControl.Label htmlFor="password">Password</FormControl.Label>
                            <TextInput
                                type="password"
                                tabIndex={2}
                                autoComplete="current-password"
                                value={data.password}
                                onChange={(e) => setData('password', e.target.value)}
                                placeholder="Password"
                                block
                            />
                        </FormControl>
                    </div>
                    <div className="tw:flex tw:items-center tw:space-x-3">
                        <FormControl id="remember">
                            <FormControl.Label htmlFor="remember">Remember me</FormControl.Label>
                            <Checkbox name="remember" tabIndex={3} checked={data.remember} onClick={() => setData('remember', !data.remember)} />
                        </FormControl>
                    </div>
                    <Button block type="submit" loading={processing} disabled={processing} variant="primary">
                        Continue with email
                    </Button>
                </div>
                <div className="tw:text-muted-foreground tw:text-center tw:text-sm">
                    Don't have an account?{' '}
                    <TextLink href="/register" tabIndex={5}>
                        Sign up
                    </TextLink>
                </div>
            </form>
            {status && <div className="tw:mb-4 tw:text-center tw:text-sm tw:font-medium tw:text-green-600">{status}</div>}
        </AuthLayout>
    );
}
