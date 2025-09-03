import { Link } from '@inertiajs/react';

export default function Footer() {
    return (
        <footer className="tw:border-t tw:border-t-[#AFB8C1] tw:bg-white">
            <div className="tw:mx-auto tw:w-full tw:max-w-screen-xl tw:p-4 tw:md:py-8">
                <div className="tw:sm:flex tw:sm:items-center tw:sm:justify-between">
                    <Link
                        href="https://flowbite.com/"
                        className="tw:mb-4 tw:flex tw:items-center tw:space-x-3 tw:no-underline tw:sm:mb-0 tw:rtl:space-x-reverse"
                    >
                        <img src="https://flowbite.com/docs/images/logo.svg" className="tw:h-8" alt="Flowbite Logo" />
                        <span className="tw:self-center tw:text-2xl tw:font-semibold tw:whitespace-nowrap">Royals</span>
                    </Link>
                    <ul className="tw:mb-6 tw:flex tw:list-none tw:flex-wrap tw:items-center tw:text-sm tw:font-medium tw:text-gray-500 tw:sm:mb-0">
                        <li>
                            <Link href="#" className="tw:me-4 tw:text-slate-500 tw:no-underline tw:md:me-6">
                                About
                            </Link>
                        </li>
                        <li>
                            <a href="#" className="tw:me-4 tw:text-slate-500 tw:no-underline tw:md:me-6">
                                Privacy Policy
                            </a>
                        </li>
                        <li>
                            <a href="#" className="tw:me-4 tw:text-slate-500 tw:no-underline tw:md:me-6">
                                Licensing
                            </a>
                        </li>
                        <li>
                            <a href="#" className="tw:text-slate-500 tw:no-underline">
                                Contact
                            </a>
                        </li>
                    </ul>
                </div>
                <hr className="tw:my-6 tw:!border-slate-200 tw:sm:mx-auto tw:lg:my-8" />
                <span className="tw:block tw:text-sm tw:text-gray-500 tw:sm:text-center">
                    © {new Date().getFullYear()}
                    <Link href="/" className="tw:mx-1 tw:no-underline">
                        Royals™
                    </Link>
                    . All Rights Reserved.
                </span>
            </div>
        </footer>
    );
}
