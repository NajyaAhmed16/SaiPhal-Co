import { ArrowRight } from 'lucide-react';

export default function CTASection() {
  return (
    <section className="relative overflow-hidden bg-navy-800">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute left-0 top-0 h-full w-1/3 bg-gradient-to-r from-gold-400/10 to-transparent" />
        <div className="absolute bottom-0 right-0 h-64 w-64 rounded-full bg-gold-400/5 blur-3xl" />
      </div>

      <div className="container-max relative section-padding">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-6 font-heading text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
            &ldquo;What gets captured, gets measured &amp;{' '}
            <span className="text-gold-400">What gets measured, gets improved</span>&rdquo;
          </h2>
          <p className="mx-auto mb-10 max-w-2xl text-lg text-gray-400">
            Let us help you capture, measure, and improve your financial performance with data-driven strategies.
          </p>
          <a
            href="/contact-us"
            className="btn-primary inline-flex items-center gap-2 px-8 py-4 text-base"
          >
            Get Started Now
            <ArrowRight className="h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  );
}
