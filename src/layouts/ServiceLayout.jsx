import { Link } from 'react-router-dom';
import ServiceIcon from '../components/ServiceIcon';

export default function ServiceLayout({ service }) {
  if (!service) return null;

  return (
    <>
      {/* Hero Header */}
      <section className="relative overflow-hidden bg-navy-800">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-gold-400 blur-3xl" />
          <div className="absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-gold-400 blur-3xl" />
        </div>

        <div className="container-max relative px-4 py-20 sm:px-6 md:py-28 lg:px-8">
          <Link
            to="/"
            className="mb-6 inline-flex items-center gap-2 text-sm text-gray-400 transition-colors hover:text-gold-400"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-4 w-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
            </svg>
            Back to Home
          </Link>

          <div className="flex items-start gap-5">
            <div className="hidden h-16 w-16 flex-shrink-0 items-center justify-center rounded-2xl bg-gold-400/10 text-gold-400 sm:flex">
              <ServiceIcon name={service.icon} />
            </div>
            <div>
              <h1 className="font-heading text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
                {service.title}
              </h1>
              <p className="mt-4 max-w-2xl text-lg leading-relaxed text-gray-300">
                {service.intro}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Offerings */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-8 font-heading text-2xl font-bold text-navy-800 sm:text-3xl">
              What We Offer
            </h2>
            <ul className="space-y-4">
              {service.offerings.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="mt-0.5 h-5 w-5 flex-shrink-0 text-gold-400">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                  </svg>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-navy-800">
        <div className="absolute inset-0">
          <div className="absolute left-0 top-0 h-full w-1/3 bg-gradient-to-r from-gold-400/10 to-transparent" />
        </div>

        <div className="container-max relative px-4 py-16 text-center sm:px-6 md:py-20 lg:px-8">
          <h2 className="mb-4 font-heading text-2xl font-bold text-white sm:text-3xl">
            Ready to Get Started?
          </h2>
          <p className="mx-auto mb-8 max-w-xl text-gray-400">
            Schedule a complimentary consultation and discover how we can strengthen your financial foundation.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="https://calendly.com/suyog-narvekar-cfoservices"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary px-8 py-4"
            >
              Book a Free Consultation
            </a>
            <Link to="/" className="btn-outline px-8 py-4">
              View All Services
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
