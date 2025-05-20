import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';

interface SectionProps {
  t: typeof import('@/lib/translations').default['vi'];
}

const HeroSection: React.FC<SectionProps> = ({ t }) => {
  const [backgroundImage, setBackgroundImage] = useState<string>("/web_image/1_tong_quan_dat_xanh_home.jpg");
  
  const scrollToOverview = () => {
    const overviewSection = document.getElementById('overview');
    if (overviewSection) {
      overviewSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative h-screen min-h-[600px] flex items-center justify-center">
      {/* Hero Background */}
      <div className="absolute inset-0 w-full h-full z-0">
        <img
          src={backgroundImage}
          alt="Privé Luxury Apartments"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30"></div>
      </div>
      {/* Hero Content */}
      <div className="container relative z-10 px-4 text-center text-white">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 animate-fade-in leading-tight">
          {t.heroTitle} <span className="block text-prive-light">{t.heroSubtitle}</span>
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto animate-fade-in delay-200 leading-relaxed sm:block hidden">
          {t.heroDescription}
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in delay-300">
          <Button 
            size="lg" 
            className="bg-prive hover:bg-prive-dark text-white sm:inline-flex hidden"
            asChild
          >
            <a href="#contact">{t.xemPhapLy}</a>
          </Button>
          <Button 
            size="lg" 
            className="bg-prive hover:bg-prive-dark text-white sm:inline-flex hidden"
            asChild
          >
            <a href="#pricing">{t.xemBangGia}</a>
          </Button>
        </div>
      </div>
      {/* Scroll Down Button */}
      <button 
        onClick={scrollToOverview}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white animate-bounce"
      >
        <ArrowDown size={30} />
      </button>
    </section>
  );
};

export default HeroSection;
