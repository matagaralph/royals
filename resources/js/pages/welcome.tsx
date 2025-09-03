import FAQ from '@/components/home/faq';
import { Head } from '@inertiajs/react';
import { SectionIntroStacked, ThemeProvider } from '@primer/react-brand';
import '@primer/react-brand/lib/css/main.css';
import Footer from '@/components/home/footer';

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
                    <Footer />
                </ThemeProvider>
            </div>
        </>
    );
}
