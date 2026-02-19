export default function ExpertiseCard({ item }) {
  const Icon = item.icon;

  return (
    <article className="group flex flex-col rounded-2xl bg-white p-8 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-gold-50 text-gold-500 transition-colors duration-300 group-hover:bg-gold-400 group-hover:text-white">
        <Icon className="h-7 w-7" />
      </div>
      <h3 className="mb-4 font-heading text-xl font-semibold text-navy-800">
        {item.title}
      </h3>
      <p className="text-sm leading-relaxed text-gray-600">
        {item.description}
      </p>
    </article>
  );
}
