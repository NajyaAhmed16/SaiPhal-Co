import { CheckCircle } from 'lucide-react';
import { stats } from '../data/constants';

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-navy-800">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute -right-20 -top-20 h-96 w-96 rounded-full bg-gold-400 blur-3xl" />
        <div className="absolute -bottom-32 -left-20 h-96 w-96 rounded-full bg-gold-400 blur-3xl" />
      </div>

      <div className="container-max relative section-padding">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left Content */}
          <div>
            <span className="mb-4 inline-block rounded-full bg-gold-400/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-gold-400">
              CFO Services
            </span>
            <h1 className="mb-6 font-heading text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
              Your Comprehensive{' '}
              <span className="text-gold-400">Financial Excellence</span>{' '}
              Partner
            </h1>
            <p className="mb-8 max-w-lg text-lg leading-relaxed text-gray-300">
              At CFO Services® we believe small and medium-sized businesses deserve the
              same caliber of financial expertise typically only available to large companies.
            </p>

            <ul className="mb-10 space-y-3">
              {[
                'Not just advice—we execute, monitor, and deliver outcomes.',
                'Data-driven financial insights, not just gut-based decisions.',
                'Flexible, scalable support tailored to your business stage.',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-gray-300">
                  <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-gold-400" />
                  <span className="text-sm">{item}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-4">
              <a href="/contact-us" className="btn-primary">
                Get Started Now
              </a>
              <a href="#services" className="btn-outline">
                Explore Services
              </a>
            </div>
          </div>

          {/* Right Content - Images */}
          <div className="relative hidden lg:block">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1560472355-536de3962603?w=600&q=80"
                alt="Financial planning consultation"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 rounded-xl bg-white p-4 shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=300&q=80"
                  alt="Business growth chart"
                  className="h-32 w-44 rounded-lg object-cover"
                />
              </div>
              <div className="absolute -right-4 -top-4 rounded-xl bg-white p-4 shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1591696205602-2f950c417cb9?w=300&q=80"
                  alt="Professional team"
                  className="h-28 w-40 rounded-lg object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Stats Bar */}
        <div className="mt-16 grid grid-cols-2 gap-6 rounded-2xl bg-white/5 p-8 backdrop-blur-sm sm:grid-cols-4 lg:mt-20">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="font-heading text-3xl font-bold text-gold-400 sm:text-4xl">
                {stat.value}
              </p>
              <p className="mt-1 text-sm font-medium text-gray-400">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
