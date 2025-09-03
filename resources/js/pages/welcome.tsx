import { Head } from '@inertiajs/react';
import { CopilotIcon } from '@primer/octicons-react';
import { FAQ, Pillar, SectionIntroStacked, Stack, Text, ThemeProvider } from '@primer/react-brand';
import '@primer/react-brand/lib/css/main.css';
import { GitBranchIcon, RocketIcon } from 'lucide-react';

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
                        <section className="tw:!py-12 tw:sm:!py-24">
                            <Stack direction="horizontal" alignItems="center" justifyContent="center" gap="normal">
                                <Pillar>
                                    <Pillar.Icon icon={<CopilotIcon />} color="blue" />
                                    <Pillar.Heading>Uniquely yours</Pillar.Heading>
                                    <Pillar.Description>
                                        Custom loyalty programs that adapt to your business needs, from VIP experiences to flexible earning rules.
                                    </Pillar.Description>
                                </Pillar>
                                <Pillar>
                                    <Pillar.Icon icon={<RocketIcon />} color="blue" />
                                    <Pillar.Heading>Advanced Reporting</Pillar.Heading>
                                    <Pillar.Description>
                                        Loyalty benchmarks, program performance, and all the reports your finance team needs.
                                    </Pillar.Description>
                                </Pillar>
                                <Pillar>
                                    <Pillar.Icon icon={<GitBranchIcon />} color="blue" />
                                    <Pillar.Heading>Contactless stamping</Pillar.Heading>
                                    <Pillar.Description>
                                        Eradicates the need for physical cards; promoting hygiene and safety. No more manual punch counting.
                                    </Pillar.Description>
                                </Pillar>
                            </Stack>
                        </section>
                        <FAQ className="tw:!my-12">
                            <FAQ.Heading>Frequently asked questions</FAQ.Heading>
                            <FAQ.Item>
                                <FAQ.Question>What&apos;s included in the GitHub for Startups offer?</FAQ.Question>
                                <FAQ.Answer>
                                    <p>
                                        All GitHub for Startups companies receive up to 20 seats of GitHub Enterprise for free for year one and 50%
                                        off year two. Learn more about the features and capabilities of GitHub Enterprise{' '}
                                        <a href="https://www.github.com" target="_blank" rel="noreferrer">
                                            here
                                        </a>
                                        .
                                    </p>
                                </FAQ.Answer>
                            </FAQ.Item>
                            <FAQ.Item>
                                <FAQ.Question>Who is eligible to apply?</FAQ.Question>
                                <FAQ.Answer>
                                    <p>Startups who meet the following criteria are eligible to apply for the program:</p>
                                    <ol>
                                        <li>
                                            <Text size="300" variant="muted">
                                                Must be associated with a current GitHub for Startups partner.
                                            </Text>
                                        </li>
                                        <li>
                                            <Text size="300" variant="muted">
                                                Self-funded or funded (Seed-Series A)
                                            </Text>
                                        </li>
                                        <li>
                                            <Text size="300" variant="muted">
                                                Not a current GitHub Enterprise customer
                                            </Text>
                                        </li>
                                        <li>
                                            <Text size="300" variant="muted">
                                                Must not have previously received credits for GitHub Enterprise
                                            </Text>
                                        </li>
                                    </ol>
                                </FAQ.Answer>
                            </FAQ.Item>
                            <FAQ.Item>
                                <FAQ.Question>What if my startup is not eligible? Are there other resources for me?</FAQ.Question>
                                <FAQ.Answer>
                                    <p>
                                        If you’re not currently eligible for the GitHub for Startups but would like to try GitHub Enterprise, please
                                        feel to sign up for a trial
                                        <a href="https://www.github.com" target="_blank" rel="noreferrer">
                                            here
                                        </a>
                                        {''}.
                                    </p>
                                </FAQ.Answer>
                            </FAQ.Item>
                            <FAQ.Item>
                                <FAQ.Question>How can my organization become a GitHub for Startups partner?</FAQ.Question>
                                <FAQ.Answer>
                                    <p>
                                        Any investor, accelerator, or startup support organization is eligible to apply for the GitHub for Startups
                                        program.
                                    </p>
                                    <p>
                                        <a href="https://www.github.com" target="_blank" rel="noreferrer">
                                            Apply here
                                        </a>
                                        .
                                    </p>
                                </FAQ.Answer>
                            </FAQ.Item>
                        </FAQ>
                    </main>
                </ThemeProvider>
            </div>
        </>
    );
}
