import { RootLayout } from "@/components/theme-provider";
import { Head } from "@inertiajs/react";
import { Button, FormControl, TextInput } from "@primer/react";

export default function CreateAccount() {
    return (
        <RootLayout>
            <Head title="Register Account" />
            <div className="tw:fixed tw:left-1/2 tw:top-1/2 tw:mx-auto tw:flex tw:w-full tw:max-w-[354px] tw:-translate-x-1/2 tw:-translate-y-1/2 tw:flex-col">
                <form className="tw:space-y-6 tw:mt-6">
                    <div>
                        <FormControl required>
                            <FormControl.Label>Name</FormControl.Label>
                            <TextInput block placeholder="John Smith" />
                        </FormControl>
                    </div>
                    <div>
                        <FormControl required>
                            <FormControl.Label>Email</FormControl.Label>
                            <TextInput
                                block
                                className="tw:!h-8"
                                placeholder="name@domain.com"
                            />
                        </FormControl>
                    </div>
                    <div>
                        <FormControl required>
                            <FormControl.Label>Password</FormControl.Label>
                            <TextInput
                                className="tw:!h-8"
                                block
                                type="password"
                                placeholder="Password"
                            />
                        </FormControl>
                    </div>

                    <Button block variant="primary">
                        Create Account
                    </Button>
                </form>
            </div>
        </RootLayout>
    );
}
