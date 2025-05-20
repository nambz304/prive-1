import React, { useEffect, useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingButtons from '@/components/FloatingButtons';
import HeroSection from '@/components/sections/HeroSection';
import OverviewSection from '@/components/sections/OverviewSection';
import LocationSection from '@/components/sections/LocationSection';
import AmenitiesSection from '@/components/sections/AmenitiesSection';
import FloorPlansSection from '@/components/sections/FloorPlansSection';
import SampleRoomSection from '@/components/sections/SampleRoomSection';
import PricingSection from '@/components/sections/PricingSection';
import PolicySection from '@/components/sections/PolicySection';
import ContactSection from '@/components/sections/ContactSection';
import translations from '@/lib/translations';

// Helper function to handle animation on scroll
const handleScrollAnimation = () => {
  const elements = document.querySelectorAll('.animate-on-scroll');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animated');
      }
    });
  }, { threshold: 0.1 });
  
  elements.forEach((element) => {
    observer.observe(element);
  });
};

const Index = () => {
  // Add SEO meta tags
  useEffect(() => {
    document.title = 'Privé - Căn Hộ Cao Cấp Tại TP. Thủ Đức';
    
    // Set meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Dự án căn hộ cao cấp Privé tại Thủ Đức - Không gian sống đẳng cấp với tiện ích hiện đại từ Tập đoàn Đất Xanh. Liên hệ ngay để nhận tư vấn và báo giá chi tiết.');
    } else {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      metaDescription.setAttribute('content', 'Dự án căn hộ cao cấp Privé tại Thủ Đức - Không gian sống đẳng cấp với tiện ích hiện đại từ Tập đoàn Đất Xanh. Liên hệ ngay để nhận tư vấn và báo giá chi tiết.');
      document.head.appendChild(metaDescription);
    }
    
    // Set meta keywords
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      metaKeywords = document.createElement('meta');
      metaKeywords.setAttribute('name', 'keywords');
      metaKeywords.setAttribute('content', 'Privé, căn hộ cao cấp, bất động sản, Thủ Đức, Đất Xanh, chung cư, nhà ở, đầu tư');
      document.head.appendChild(metaKeywords);
    }

    // Initialize scroll animation
    handleScrollAnimation();
    
    // Clean up
    return () => {
      // Remove meta tags
      if (document.head.contains(metaKeywords)) {
        document.head.removeChild(metaKeywords);
      }
    };
  }, []);

  const [lang, setLang] = useState<'vi' | 'en'>('vi');
  const t = translations[lang] as any;

  return (
    <div className="flex min-h-screen flex-col">
      <Header lang={lang} setLang={setLang} t={t} />
      <main className="flex-grow">
        <HeroSection t={t} />
        <OverviewSection t={t} />
        <LocationSection t={t} />
        <AmenitiesSection t={t} />
        <FloorPlansSection t={t} />
        <PricingSection t={t} />
        <PolicySection t={t} />
        <SampleRoomSection t={t} />
        <ContactSection t={t} />
      </main>
      <FloatingButtons t={t} />
      <Footer t={t} />
    </div>
  );
};

export default Index;

// In your main page or App, ensure you pass t={t} to all these components:
// <FloorPlansSection t={t} />
// <SampleRoomSection t={t} />
// <ProjectImagesSection t={t} />
// <ProgressSection t={t} />
// <ContactForm t={t} />
// <ViewingForm t={t} />
// <FloatingButtons t={t} />
