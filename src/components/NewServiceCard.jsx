import { Link } from 'react-router-dom';
import ServiceIcon from './ServiceIcon';

export default function ServiceCard({ service }) {
  return (
    <Link
      to={`/services/${service.id}`}
      className="group flex flex-col rounded-2xl border border-gray-100 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-gold-200 hover:shadow-xl"
    >
      <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-navy-800 text-gold-400 transition-colors duration-300 group-hover:bg-gold-400 group-hover:text-navy-900">
        <ServiceIcon name={service.icon} />
      </div>
      <h3 className="mb-3 font-heading text-lg font-semibold text-navy-800 transition-colors group-hover:text-gold-500">
        {service.title}
      </h3>
      <p className="text-sm leading-relaxed text-gray-500">
        {service.description}
      </p>
      <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-gold-500 transition-all duration-300 group-hover:gap-2.5">
        Learn More
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1">
          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
        </svg>
      </span>
    </Link>
  );
}
