import { ArrowRight } from 'lucide-react';

export default function ServiceCard({ service }) {
  const Icon = service.icon;

  return (
    <article className="group relative flex flex-col overflow-hidden rounded-2xl bg-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={service.image}
          alt={service.title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-900/60 to-transparent" />
        <div className="absolute bottom-4 left-4">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gold-400/90 text-navy-900 backdrop-blur-sm">
            <Icon className="h-5 w-5" />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-6">
        <h3 className="mb-3 font-heading text-lg font-semibold text-navy-800 transition-colors group-hover:text-gold-500">
          {service.title}
        </h3>
        <p className="mb-4 flex-1 text-sm leading-relaxed text-gray-600">
          {service.description}
        </p>
        <a
          href={service.link}
          className="inline-flex items-center gap-2 text-sm font-semibold text-gold-500 transition-all duration-300 group-hover:gap-3 hover:text-gold-600"
        >
          Learn More
          <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
        </a>
      </div>
    </article>
  );
}
