import { Quote } from 'lucide-react';

export default function TestimonialCard({ testimonial }) {
  return (
    <article className="flex flex-col rounded-2xl bg-white p-6 shadow-md transition-all duration-300 hover:shadow-lg sm:p-8">
      <Quote className="mb-4 h-8 w-8 text-gold-400/40" />
      <blockquote className="mb-6 flex-1 text-sm italic leading-relaxed text-gray-600">
        &ldquo;{testimonial.quote}&rdquo;
      </blockquote>
      <div className="mt-auto border-t border-gray-100 pt-4">
        <p className="font-semibold text-navy-800">{testimonial.name}</p>
        <p className="text-xs text-gray-500">{testimonial.company}</p>
      </div>
    </article>
  );
}
