import React from 'react';
import { Button } from '@/components/ui/button';
import ImageGallery from '@/components/ImageGallery';

const SampleRoomSection = ({ t }) => {
  // These images would need to be replaced with actual project images
  const images = [
    {
      src: "/lovable-uploads/9a274b96-1cc0-45bc-813e-ad4620d51bc2.jpg",
      alt: t.sampleRoomAlt
    },
    {
      src: "/lovable-uploads/9a274b96-1cc0-45bc-813e-ad4620d51bc2.jpg",
      alt: t.sampleRoomAlt
    },
    {
      src: "/lovable-uploads/9a274b96-1cc0-45bc-813e-ad4620d51bc2.jpg",
      alt: t.sampleRoomAlt
    },
    {
      src: "/lovable-uploads/9a274b96-1cc0-45bc-813e-ad4620d51bc2.jpg",
      alt: t.sampleRoomAlt
    },
    {
      src: "/lovable-uploads/9a274b96-1cc0-45bc-813e-ad4620d51bc2.jpg",
      alt: t.sampleRoomAlt
    },
    {
      src: "/lovable-uploads/9a274b96-1cc0-45bc-813e-ad4620d51bc2.jpg",
      alt: t.sampleRoomAlt
    }
  ];

  const openZalo = () => {
    window.open('https://zalo.me/0346697531', '_blank');
  };

  return (
    <section id="sample-room" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="section-title">
          <h2>{t.sampleRoomTitle}</h2>
          <p>{t.sampleRoomDesc}</p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-12">
          <div>
            <h3 className="text-xl font-bold text-prive mb-4">{t.euroStyle}</h3>
            <p className="text-gray-600 mb-4">{t.sampleRoomP1}</p>
            <p className="text-gray-600 mb-4">{t.sampleRoomP2}</p>
            <p className="text-gray-600 mb-4">{t.sampleRoomP3}</p>
            <p className="text-gray-600 mb-4">{t.sampleRoomP4}</p>
            <div className="hidden lg:flex justify-center mt-4">
              <Button 
                onClick={openZalo} 
                className="bg-prive hover:bg-prive-dark text-white w-full lg:w-auto"
              >
                {t.bookSampleVisit}
              </Button>
            </div>
          </div>
          
          <div className="relative rounded-lg overflow-hidden shadow-lg">
            <img
              src="/web_image/6_nhaMau.jpg"
              alt={t.sampleRoomAlt}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="lg:hidden mt-4 flex justify-center">
            <Button 
              onClick={openZalo} 
              className="bg-prive hover:bg-prive-dark text-white w-full lg:w-auto"
            >
              {t.bookSampleVisit}
            </Button>
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default SampleRoomSection;
