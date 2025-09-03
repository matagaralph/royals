const faqs = [
    {
        question: 'Points expiration',
        answer: 'Encourage customers to use their points, while keeping your books in check.',
    },
    {
        question: 'Reports & analytics',
        answer: 'Encourage customers to use their points, while keeping your books in check.',
    },
    {
        question: 'Purchases',
        answer: 'Reward points on every purchase so your customers have an extra reason to buy again.',
    },
    // More questions...
];

export default function FAQ() {
    return (
        <div className="tw:bg-white tw:py-24 tw:sm:py-32">
            <div className="tw:mx-auto tw:max-w-7xl tw:px-6 tw:lg:px-8">
                <div className="tw:mx-auto tw:grid tw:max-w-2xl tw:grid-cols-1 tw:gap-x-8 tw:gap-y-16 tw:sm:gap-y-20 tw:lg:mx-0 tw:lg:max-w-none tw:lg:grid-cols-3">
                    <div>
                        <h2 className="tw:text-base tw:leading-7 tw:font-semibold tw:text-indigo-600">Everything you need</h2>
                        <p className="tw:mt-2 tw:text-3xl tw:font-bold tw:tracking-tight tw:text-gray-900 tw:sm:text-4xl">
                            All the advanced features you need
                        </p>
                        <p className="tw:!mt-6 tw:text-base tw:leading-7 tw:text-gray-600">
                            Your Royals loyalty program comes packed with advanced features. Launch with industry best practices as the default, or
                            customize your program to fit your business.
                        </p>
                    </div>
                    <dl className="tw:col-span-2 tw:grid tw:grid-cols-1 tw:gap-x-8 tw:gap-y-10 tw:text-base tw:leading-7 tw:text-gray-600 tw:sm:grid-cols-2 tw:lg:gap-y-16">
                        <div className="tw:relative tw:pl-9">
                            <dt className="tw:font-semibold tw:text-gray-900">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                    aria-hidden="true"
                                    className="tw:absolute tw:top-1 tw:left-0 tw:h-5 tw:w-5 tw:text-indigo-500"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                                Points expiration
                            </dt>
                            <dd className="tw:mt-2">Encourage customers to use their points, while keeping your books in check.</dd>
                        </div>
                        <div className="tw:relative tw:pl-9">
                            <dt className="tw:font-semibold tw:text-gray-900">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                    aria-hidden="true"
                                    className="tw:absolute tw:top-1 tw:left-0 tw:h-5 tw:w-5 tw:text-indigo-500"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                                Accelerated earning
                            </dt>
                            <dd className="tw:mt-2">Reward 2x, 3x, or 5x the points for your most loyal customers based on their VIP status.</dd>
                        </div>
                        <div className="tw:relative tw:pl-9">
                            <dt className="tw:font-semibold tw:text-gray-900">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                    aria-hidden="true"
                                    className="tw:absolute tw:top-1 tw:left-0 tw:h-5 tw:w-5 tw:text-indigo-500"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                                Partial refund support
                            </dt>
                            <dd className="tw:mt-2">Ensure points given on an order are adjusted based on returns, refunds, or partial refunds.</dd>
                        </div>
                        <div className="tw:relative tw:pl-9">
                            <dt className="tw:font-semibold tw:text-gray-900">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                    aria-hidden="true"
                                    className="tw:absolute tw:top-1 tw:left-0 tw:h-5 tw:w-5 tw:text-indigo-500"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                                Name your points
                            </dt>
                            <dd className="tw:mt-2">Make your points feel uniquely yours by naming them something that fits your brand.</dd>
                        </div>
                        <div className="tw:relative tw:pl-9">
                            <dt className="tw:font-semibold tw:text-gray-900">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                    aria-hidden="true"
                                    className="tw:absolute tw:top-1 tw:left-0 tw:h-5 tw:w-5 tw:text-indigo-500"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                                Earning limits
                            </dt>
                            <dd className="tw:mt-2">Tune how often customers can earn on social media, and other actions.</dd>
                        </div>

                        <div className="tw:relative tw:pl-9">
                            <dt className="tw:font-semibold tw:text-gray-900">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                    aria-hidden="true"
                                    className="tw:absolute tw:top-1 tw:left-0 tw:h-5 tw:w-5 tw:text-indigo-500"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                                Reports &amp; analytics
                            </dt>
                            <dd className="tw:mt-2">Full visibility into sales influenced by Royals, along with earning and redeeming analytics.</dd>
                        </div>
                    </dl>
                </div>
            </div>
        </div>
    );
}
