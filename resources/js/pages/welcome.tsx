import FAQ from '@/components/home/faq';
import { Head } from '@inertiajs/react';
import { Button, SectionIntroStacked, ThemeProvider } from '@primer/react-brand';
import '@primer/react-brand/lib/css/main.css';

export default function Welcome() {
    return (
        <>
            <Head title="Welcome">
                <link rel="preconnect" href="https://rsms.me/" />
                <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
            </Head>
            <div className="tw:!m-0 tw:flex tw:min-h-screen tw:flex-col tw:!font-sans">
                <ThemeProvider>
                    <header className="tw:h-14 tw:border-b tw:border-b-[#AFB8C1]"></header>
                    <div className="tw:mx-auto tw:max-w-7xl tw:px-6 tw:pt-16 tw:pb-24 tw:sm:pb-32 tw:lg:flex tw:lg:px-8">
                        <div className="tw:mx-auto tw:max-w-2xl tw:lg:mx-0 tw:lg:max-w-xl tw:lg:flex-shrink-0">
                            <h1 className="tw:mt-10 tw:text-4xl tw:font-bold tw:tracking-tight tw:text-gray-900 tw:sm:text-6xl">
                                Turn loyal customers into brand advocates
                            </h1>
                            <p className="tw:!mt-6 tw:text-lg tw:leading-8 tw:text-slate-600">
                                Getting more repeat purchases isn’t the only benefit of using Royals for loyalty. Enjoy the added bonus of acquiring
                                new customers efficiently when shoppers refer their friends to your brand.
                            </p>
                            <div className="tw:mt-10 tw:flex tw:items-center tw:gap-x-6">
                                <Button variant="subtle">Get Started</Button>
                            </div>
                        </div>

                        {/* Image wrapper */}
                        <div className="tw:mx-auto tw:mt-16 tw:flex tw:max-w-full tw:overflow-hidden tw:sm:mt-24 tw:lg:mt-0 tw:lg:mr-0 tw:lg:ml-10 tw:lg:flex-none tw:xl:ml-32">
                            <div className="tw:w-full tw:flex-none">
                                <div className="tw:p-2 tw:lg:p-4">
                                    <img
                                        alt="App screenshot"
                                        loading="lazy"
                                        className="tw:mx-auto tw:block tw:h-auto tw:max-w-full"
                                        style={{ color: 'transparent' }}
                                        src="https://smile.io/_next/static/media/hero.9eacaeba.svg"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    <main className="tw:mx-auto tw:max-w-7xl tw:px-4 tw:pt-8">
                        <section className="tw:!font-sans">
                            <SectionIntroStacked>
                                <SectionIntroStacked.Heading>
                                    <b>Your members earn points effortlessly when they shop</b>, unlocking exclusive rewards and experiences from
                                    their favorite brands
                                </SectionIntroStacked.Heading>
                                <SectionIntroStacked.Link href="#">Explore Royals</SectionIntroStacked.Link>
                                <SectionIntroStacked.Items>
                                    <SectionIntroStacked.Item>
                                        <b>Designed for customers</b>, Royals offers a seamless loyalty platform that makes earning rewards smarter,
                                        faster, and more secure.
                                    </SectionIntroStacked.Item>
                                    <SectionIntroStacked.Item>
                                        <b>Leverage the Royals</b> platform to automate rewards, and enhance engagement with smart, context-aware
                                        offers.
                                    </SectionIntroStacked.Item>
                                    <SectionIntroStacked.Item>
                                        <b>Royals Enterprise</b> scales with your business, delivering the performance and security needed for brands
                                        of any size.
                                    </SectionIntroStacked.Item>
                                </SectionIntroStacked.Items>
                            </SectionIntroStacked>
                        </section>
                    </main>
                    <FAQ />
                </ThemeProvider>
            </div>
        </>
    );
}
