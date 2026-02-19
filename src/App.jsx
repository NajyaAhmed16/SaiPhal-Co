import TopBar from './components/TopBar';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ServicesSection from './components/ServicesSection';
import CTASection from './components/CTASection';
import ExpertiseSection from './components/ExpertiseSection';
import TestimonialsSection from './components/TestimonialsSection';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="flex min-h-screen flex-col">
      <TopBar />
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <ServicesSection />
        <CTASection />
        <ExpertiseSection />
        <TestimonialsSection />
      </main>
      <Footer />
    </div>
  );
}
