import SectionHeading from './SectionHeading';

const steps = [
  {
    number: '01',
    title: 'Understand',
    description: 'Deep-dive into your business model, challenges, and financial landscape.',
  },
  {
    number: '02',
    title: 'Strategize',
    description: 'Craft a tailored financial roadmap aligned with your growth objectives.',
  },
  {
    number: '03',
    title: 'Execute',
    description: 'Implement solutions with precision — from compliance to reporting.',
  },
  {
    number: '04',
    title: 'Support',
    description: 'Ongoing monitoring, advisory, and proactive course corrections.',
  },
];

export default function ApproachSection() {
  return (
    <section className="section-padding bg-white">
      <div className="container-max">
        <SectionHeading
          subtitle="Our Process"
          title="Our Approach"
          description="A proven four-step methodology that delivers measurable financial outcomes for every client."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <article
              key={step.number}
              className="group relative rounded-2xl border border-gray-100 bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:border-gold-200 hover:shadow-xl"
            >
              {/* Step Number */}
              <span className="mb-4 inline-block font-heading text-4xl font-bold text-gold-400/20 transition-colors duration-300 group-hover:text-gold-400/50">
                {step.number}
              </span>

              <h3 className="mb-3 font-heading text-xl font-semibold text-navy-800">
                {step.title}
              </h3>
              <p className="text-sm leading-relaxed text-gray-500">
                {step.description}
              </p>

              {/* Connector line (hidden on last item and mobile) */}
              {index < steps.length - 1 && (
                <div className="absolute -right-3 top-1/2 hidden h-px w-6 bg-gold-300/50 lg:block" />
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
