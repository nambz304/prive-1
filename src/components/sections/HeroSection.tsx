
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';

const HeroSection = () => {
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
          src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2000&q=80"
          alt="Privé Luxury Apartments"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50"></div>
      </div>
      
      {/* Hero Content */}
      <div className="container relative z-10 px-4 text-center text-white">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 animate-fade-in leading-tight">
          PRIVÉ <span className="block text-prive-light">Cuộc Sống Đẳng Cấp</span>
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto animate-fade-in delay-200 leading-relaxed">
          Trải nghiệm không gian sống cao cấp với thiết kế hiện đại 
          và tiện ích đẳng cấp tại trung tâm Thành phố Thủ Đức
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in delay-300">
          <Button 
            size="lg" 
            className="bg-prive hover:bg-prive-dark text-white"
            asChild
          >
            <a href="#contact">Liên hệ ngay</a>
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            className="border-white text-white hover:bg-white/20"
            asChild
          >
            <a href="#overview">Tìm hiểu thêm</a>
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
