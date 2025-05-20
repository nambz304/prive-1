import React from 'react';
import { Button } from '@/components/ui/button';
import ImageGallery from '@/components/ImageGallery';
import ProjectImagesSection from './ProjectImagesSection';

interface SectionProps {
  t: typeof import('@/lib/translations').default['vi'];
}

const PricingSection: React.FC<SectionProps> = ({ t }) => {
  const pricingData = [
    {
      type: t.studioType,
      area: "50m²",
      priceRange: t.priceRangeStudio,
      areaM2: t.areaM2Studio,
    },
    {
      type: t.twoBedroomType,
      area: "71m² - 88m²",
      priceRange: t.priceRange2PN,
      areaM2: t.areaM22PN,
    },
    {
      type: t.threeBedroomType,
      area: "98m²",
      priceRange: t.priceRange3PN,
      areaM2: t.areaM23PN,
    },
    {
      type: t.duplexVillaType,
      area: "130m² - 200m²",
      priceRange: t.priceRangeDuplex,
      areaM2: t.areaM2Duplex,
    },
    {
      type: t.penthouseType,
      area: "105m² - 145m²",
      priceRange: t.priceRangePenthouse,
      areaM2: t.areaM2Penthouse,
    }
  ];

  const projectImages = [
    {
      src: "https://images.unsplash.com/photo-1598228723793-52759bba239c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
      alt: "Khu vực sảnh chờ sang trọng"
    },
    {
      src: "https://images.unsplash.com/photo-1560184897-ae75f418493e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
      alt: "Không gian sống hiện đại"
    },
    {
      src: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
      alt: "Phối cảnh tổng thể dự án Privé"
    }
  ];

  const openZalo = () => {
    window.open('https://zalo.me/0346697531', '_blank');
  };

  return (
    <section id="pricing" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <div className="section-title">
          <h2>{t.pricing}</h2>
          <p>{t.pricingDesc}</p>
        </div>

        <div className="overflow-x-auto mb-12">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-prive">
                <th className="border border-gray-600 p-3 text-left">{t.apartmentType}</th>
                <th className="border border-gray-600 p-3 text-left">{t.areaLabel}</th>
                <th className="border border-gray-600 p-3 text-left">{t.firstPayment}</th>
                <th className="border border-gray-600 p-3 text-left">{t.contact}</th>
              </tr>
            </thead>
            <tbody>
              {pricingData.map((item, index) => (
                <tr key={index} className={index % 2 === 0 ? "bg-gray-800" : ""}>
                  <td className="border border-gray-600 p-3 font-medium">{item.type}</td>
                  <td className="border border-gray-600 p-3">{item.area}</td>
                  <td className="border border-gray-600 p-3">{item.priceRange}</td>
                  <td className="border border-gray-600 p-3">
                    <Button 
                      onClick={openZalo}
                      variant="default"
                      size="sm"
                      className="bg-prive hover:bg-prive-dark w-full animate-zoom-bounce"
                    >
                      {t.getQuote}
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="text-center mt-10">
          <a
            href="https://zalo.me/0346697531"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-prive text-white py-3 px-6 rounded-lg shadow-md hover:bg-prive-dark transition-colors animate-zoom-bounce"
          >
            {t.downloadPriceList}
          </a>
        </div>

        <ProjectImagesSection images={projectImages.map(img => ({...img, alt: t[img.alt] || img.alt}))} onContact={openZalo} t={t} />

      </div>
    </section>
  );
};

export default PricingSection;
