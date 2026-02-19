import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import SectionHeading from './SectionHeading';
import TestimonialCard from './TestimonialCard';
import { testimonials } from '../data/testimonials';

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const itemsPerPage = typeof window !== 'undefined' && window.innerWidth >= 1024 ? 3 : typeof window !== 'undefined' && window.innerWidth >= 640 ? 2 : 1;
  const maxIndex = Math.max(0, testimonials.length - itemsPerPage);

  const prev = () => setCurrentIndex((i) => Math.max(0, i - 1));
  const next = () => setCurrentIndex((i) => Math.min(maxIndex, i + 1));

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-max">
        <div className="mb-8 flex flex-col items-center justify-between gap-4 sm:flex-row">
          <div>
            <SectionHeading
              subtitle="Testimonials"
              title="What Our Clients Say"
              description="Clients met financial goals and gave positive feedback."
              center={false}
            />
          </div>
          <div className="flex gap-2">
            <button
              onClick={prev}
              disabled={currentIndex === 0}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 text-navy-800 transition-all hover:border-gold-400 hover:bg-gold-400 hover:text-white disabled:cursor-not-allowed disabled:opacity-40"
              aria-label="Previous testimonials"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={next}
              disabled={currentIndex >= maxIndex}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 text-navy-800 transition-all hover:border-gold-400 hover:bg-gold-400 hover:text-white disabled:cursor-not-allowed disabled:opacity-40"
              aria-label="Next testimonials"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        <div className="overflow-hidden">
          <div
            className="flex gap-6 transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${currentIndex * (100 / itemsPerPage)}%)`,
            }}
          >
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="w-full flex-shrink-0 sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]"
              >
                <TestimonialCard testimonial={testimonial} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
