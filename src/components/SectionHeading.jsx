export default function SectionHeading({ subtitle, title, description, light = false, center = true }) {
  return (
    <div className={`mb-12 ${center ? 'text-center' : ''} lg:mb-16`}>
      {subtitle && (
        <span className={`mb-3 inline-block rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-wider ${
          light
            ? 'bg-white/10 text-gold-300'
            : 'bg-gold-50 text-gold-600'
        }`}>
          {subtitle}
        </span>
      )}
      {title && (
        <h2 className={`mt-2 font-heading text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl ${
          light ? 'text-white' : 'text-navy-800'
        }`}>
          {title}
        </h2>
      )}
      {description && (
        <p className={`mx-auto mt-4 max-w-3xl text-base leading-relaxed sm:text-lg ${
          light ? 'text-gray-300' : 'text-gray-600'
        }`}>
          {description}
        </p>
      )}
    </div>
  );
}
