import React from 'react';
import { Button } from '@/components/ui/button';
import ImageGallery from '@/components/ImageGallery';

const ProjectImagesSection = ({ images, onContact, t }: { images: { src: string; alt: string }[]; onContact: () => void; t: any }) => {
  const additionalImages = [
    { src: "/web_image/7_HinhAnhDuAn/tongQuan2.jpg", alt: t.corridorAlt },
    { src: "/web_image/7_HinhAnhDuAn/tongQuan3.jpg", alt: t.pickleballAlt },
    { src: "/web_image/7_HinhAnhDuAn/viewTPHCM.jpg", alt: t.sportAlt }
  ];

  return (
    <section id="project-images" className="py-20 bg-gray-800 rounded-lg p-8">
      <h3 className="text-2xl font-semibold mb-6 text-prive">{t.projectImagesTitle}</h3>
      <ImageGallery images={[...images, ...additionalImages]} columns={3} className="mb-8" />
      <div className="text-center">
        <p className="mb-6 text-gray-300">{t.projectImagesDesc}</p>
        <Button 
          size="lg" 
          className="bg-prive hover:bg-prive-dark animate-zoom-bounce"
          onClick={onContact}
        >
          {t.getQuote}
        </Button>
      </div>
    </section>
  );
};

export default ProjectImagesSection;
