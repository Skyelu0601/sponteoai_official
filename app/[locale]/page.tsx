import Hero from '@/components/Hero';
import AboutSection from '@/components/AboutSection';
import ServicesSection from '@/components/ServicesSection';
import ContactSection from '@/components/ContactSection';

export default function Home() {
  return (
    <div>
      <Hero />
      <AboutSection />
      <ServicesSection />
      <ContactSection />
    </div>
  );
}

