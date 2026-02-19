import SectionHeading from './SectionHeading';
import ServiceCard from './ServiceCard';
import { services } from '../data/services';

export default function ServicesSection() {
  return (
    <section id="services" className="section-padding bg-gray-50">
      <div className="container-max">
        <SectionHeading
          subtitle="Our Services"
          title="Our Financial Planning Services"
          description="Comprehensive financial solutions tailored for SMEs and startups to drive sustainable growth and operational excellence."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-8">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}
