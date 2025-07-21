import TextLink from '@/components/text-link';
import AuthLayout from '@/layouts/auth-layout';
import { Head, useForm } from '@inertiajs/react';
import { Button, FormControl, TextInput } from '@primer/react';
import { FormEventHandler } from 'react';
import { route } from 'ziggy-js';

type RegisterForm = {
    name: string;
    email: string;
    password: string;
    password_confirmation: string;
};

export default function Register() {
    const { data, setData, post, processing, errors, reset, clearErrors } = useForm<Required<RegisterForm>>({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();
        post(route('register'), {
            onFinish: () => reset('password', 'password_confirmation'),
        });
    };

    return (
        <AuthLayout title="Create an account" description="Enter your details below to create your account">
            <Head title="Register" />
            <form className="tw:flex tw:flex-col tw:gap-6" onSubmit={submit}>
                <div className="tw:grid tw:gap-6">
                    <div className="tw:grid tw:gap-2">
                        <FormControl required id="name" disabled={processing}>
                            <FormControl.Label htmlFor="name">Name</FormControl.Label>
                            <TextInput
                                type="text"
                                autoFocus
                                tabIndex={1}
                                autoComplete="name"
                                value={data.name}
                                onChange={(e) => {
                                    setData('name', e.target.value);
                                    if (errors.name) clearErrors('name');
                                }}
                                placeholder="Full name"
                                block
                            />
                            {errors.name && <FormControl.Validation variant="error">{errors.name}</FormControl.Validation>}
                        </FormControl>
                    </div>
                    <div className="tw:grid tw:gap-2">
                        <FormControl required id="email" disabled={processing}>
                            <FormControl.Label htmlFor="email">Email</FormControl.Label>
                            <TextInput
                                type="email"
                                tabIndex={2}
                                autoComplete="email"
                                value={data.email}
                                onChange={(e) => {
                                    setData('email', e.target.value);
                                    if (errors.email) clearErrors('email');
                                }}
                                placeholder="email@example.com"
                                block
                            />
                            {errors.email && <FormControl.Validation variant="error">{errors.email}</FormControl.Validation>}
                        </FormControl>
                    </div>

                    <div className="tw:grid tw:gap-2">
                        <FormControl required id="password" disabled={processing}>
                            <FormControl.Label>Password</FormControl.Label>
                            <TextInput
                                type="password"
                                tabIndex={3}
                                autoComplete="new-password"
                                value={data.password}
                                onChange={(e) => {
                                    setData('password', e.target.value);
                                    if (errors.password) clearErrors('password');
                                }}
                                placeholder="Password"
                                block
                            />
                            {errors.password && <FormControl.Validation variant="error">{errors.password}</FormControl.Validation>}
                        </FormControl>
                    </div>

                    <div className="tw:grid tw:gap-2">
                        <FormControl required id="password_confirmation" disabled={processing}>
                            <FormControl.Label>Confirm Password</FormControl.Label>
                            <TextInput
                                type="password"
                                tabIndex={4}
                                autoComplete="new-password"
                                value={data.password_confirmation}
                                onChange={(e) => {
                                    setData('password_confirmation', e.target.value);
                                    if (errors.password_confirmation) clearErrors('password_confirmation');
                                }}
                                placeholder="Confirm password"
                                block
                            />
                            {errors.password_confirmation && (
                                <FormControl.Validation variant="error">{errors.password_confirmation}</FormControl.Validation>
                            )}
                        </FormControl>
                    </div>

                    <Button variant="primary" type="submit" block>
                        Create account
                    </Button>
                </div>

                <div className="tw:text-center tw:text-sm tw:text-muted">
                    Already have an account?{' '}
                    <TextLink href="/login" tabIndex={6}>
                        Log in
                    </TextLink>
                </div>
            </form>
        </AuthLayout>
    );
}
