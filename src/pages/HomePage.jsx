import HeroSection from '../components/HeroSection';
import NewServicesSection from '../components/NewServicesSection';
import ApproachSection from '../components/ApproachSection';
import TestimonialsCarousel from '../components/TestimonialsCarousel';
import CTASection from '../components/CTASection';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <NewServicesSection />
      <ApproachSection />
      <TestimonialsCarousel />
      <CTASection />
    </>
  );
}
