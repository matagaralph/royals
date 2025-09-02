import { Head } from '@inertiajs/react';
import { FAQ, SectionIntroStacked, Text, ThemeProvider } from '@primer/react-brand';
import '@primer/react-brand/lib/css/main.css';

export default function Welcome() {
    return (
        <>
            <Head title="Welcome">
                <link rel="preconnect" href="https://rsms.me/" />
                <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
            </Head>
            <div className="tw:!m-0 tw:flex tw:min-h-screen tw:flex-col">
                <ThemeProvider>
                    <header className="tw:h-14 tw:border-b tw:border-b-red-500"></header>
                    <main className="tw:mx-auto tw:max-w-7xl tw:px-4 tw:pt-8">
                        <section>
                            <SectionIntroStacked>
                                <SectionIntroStacked.Heading>
                                    <b>Over 90% of Fortune 100 companies and more than 150 million developers rely on GitHub</b> to deliver scalable,
                                    reliable, and secure solutions for teams of all sizes.
                                </SectionIntroStacked.Heading>
                                <SectionIntroStacked.Link href="#">Explore GitHub</SectionIntroStacked.Link>
                                <SectionIntroStacked.Items>
                                    <SectionIntroStacked.Item>
                                        <b>Designed for developers</b>, GitHub offers seamless collaboration tools that make teamwork smarter, faster,
                                        and more secure.
                                    </SectionIntroStacked.Item>
                                    <SectionIntroStacked.Item>
                                        <b>Leverage GitHub Copilot to automate tasks</b>, and enhance productivity with smart, context-aware code
                                        suggestions.
                                    </SectionIntroStacked.Item>
                                    <SectionIntroStacked.Item>
                                        <b>GitHub Enterprise scales with your organization</b>, delivering the performance and security needed for
                                        teams of any size.
                                    </SectionIntroStacked.Item>
                                </SectionIntroStacked.Items>
                            </SectionIntroStacked>
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
