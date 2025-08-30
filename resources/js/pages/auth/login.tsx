import { RootLayout } from "@/components/theme-provider";
import { Button, FormControl, TextInput } from "@primer/react";
import { Head } from "@inertiajs/react";

export default function Login() {
    return (
        <RootLayout>
            <Head title="Sign In" />
            <div className="tw:fixed tw:left-1/2 tw:top-1/2 tw:mx-auto tw:flex tw:w-full tw:max-w-[354px] tw:-translate-x-1/2 tw:-translate-y-1/2 tw:flex-col">
                <form className="tw:space-y-6 tw:mt-6">
                    <div>
                        <FormControl required>
                            <FormControl.Label>Email</FormControl.Label>
                            <TextInput
                                className="tw:!h-9"
                                block
                                placeholder="name@domain.com"
                            />
                        </FormControl>
                    </div>
                    <div>
                        <FormControl required>
                            <FormControl.Label>Password</FormControl.Label>
                            <TextInput
                                className="tw:!h-9"
                                block
                                placeholder="Password"
                            />
                        </FormControl>
                    </div>

                    <Button block variant="primary">
                        Continue with email
                    </Button>
                </form>
            </div>
        </RootLayout>
    );
}
