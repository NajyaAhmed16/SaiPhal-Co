import SectionHeading from './SectionHeading';
import ExpertiseCard from './ExpertiseCard';
import { expertiseItems, expertiseIntro } from '../data/expertise';

export default function ExpertiseSection() {
  return (
    <section className="section-padding bg-white">
      <div className="container-max">
        <SectionHeading
          subtitle="Creative Freedom & Financial Excellence"
          title="Our Expertise"
          description={expertiseIntro}
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-8">
          {expertiseItems.map((item) => (
            <ExpertiseCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
