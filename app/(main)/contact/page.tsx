import { Button } from '@/components/Button';
import { Footer } from '@/components/footer';
import { ChevronRight, Mail, MessageCircle } from 'lucide-react';

export default function ContactUsPage() {
  return (
    <>
      <section className='bg-white px-4 py-24'>
        <div className='mx-auto max-w-4xl text-center'>
          <h2 className='mb-6 text-5xl font-semibold text-slate-900'>How can we help?</h2>

          {/* Subtitle */}
          <p className='text-secondary-foreground mx-auto mb-16 max-w-2xl text-lg'>
            Get in touch with our sales and support teams for demos, onboarding support, or product
            questions.
          </p>

          <div className='mx-auto grid max-w-3xl gap-6 md:grid-cols-2'>
            {/* Sales card */}
            <div className='border-default rounded-lg border bg-white p-8 text-left shadow-xs transition-colors hover:border-slate-300'>
              <div className='mb-4 flex items-center gap-3'>
                <div className='h-6 w-6 text-slate-700'>
                  <Mail className='h-6 w-6 text-slate-400' />
                </div>
                <h3 className='text-xl font-semibold text-slate-900'>Sales</h3>
              </div>

              <p className='text-secondary-foreground mb-6'>
                Speak to our sales team about plans, pricing, or request a demo.
              </p>

              <Button theme='secondary'>
                Talk to sales
                <ChevronRight className='ml-1 h-4 w-4' />
              </Button>
            </div>

            <div className='border-default rounded-lg border bg-white p-8 text-left shadow-xs transition-colors hover:border-slate-300'>
              <div className='mb-4 flex items-center gap-3'>
                <div className='h-6 w-6 text-slate-700'>
                  <MessageCircle className='h-6 w-6 text-slate-400' />
                </div>
                <h3 className='text-lg leading-6 font-semibold text-slate-900'>Help & support</h3>
              </div>

              <p className='text-secondary-foreground mb-6'>
                Ask product questions, report problems, or leave feedback.
              </p>

              <Button theme='secondary'>
                Contact support
                <ChevronRight className='ml-1 h-4 w-4' />
              </Button>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
