import React from 'react';
import ImageGallery from '../ImageGallery';

const AmenitiesSection = ({ t }) => {
  const amenities = [
    {
      category: t.relaxHealth,
      items: [
        t.pool,
        t.gym,
        t.tennisBasketball,
        t.cinemaKaraoke,
        t.park,
        t.flowerGarden,
      ]
    },
    {
      category: t.entertainmentCommunity,
      items: [
        t.multiPurposeRoom,
        t.outdoorBBQ,
        t.kidsPlayground,
        t.library,
        t.golfRoom,
      ]
    },
    {
      category: t.securityConvenience,
      items: [
        t.security24_7,
        t.securityCameras,
        t.securityCard,
        t.smartParking,
      ]
    },
    {
      category: t.shoppingServices,
      items: [
        t.miniSupermarket,
        t.restaurant,
        t.riversideCafe,
        t.pharmacy,
        t.electricCarCharging,
      ]
    }
  ];

  const images = [
    {
      src: "/web_image/4_tien_ich/gym.jpg",
      alt: "Kiến trúc Privé"
    },
    {
      src: "/web_image/4_tien_ich/Golf_3D.jpg",
      alt: "Không gian sống"
    },
    {
      src: "/web_image/4_tien_ich/ho_boi_lumina.jpg",
      alt: "Cảnh quan xung quanh"
    },
    {
      src: "/web_image/4_tien_ich/BBQ.jpg",
      alt: "Không gian thư giãn"
    },
    {
      src: "/web_image/4_tien_ich/vui_choi_tre_em.jpg",
      alt: "Nội thất hiện đại"
    },
    {
      src: "/web_image/4_tien_ich/tram_sac_xe_dien.jpg",
      alt: "Kiến trúc độc đáo"
    }
  ];

  return (
    <section id="amenities" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="section-title">
          <h2>{t.amenities}</h2>
          <p>{t.amenitiesDesc}</p>
        </div>

        <div className="mb-16">
          <ImageGallery images={images} columns={3} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {amenities.map((amenity, index) => (
            <div key={index} className="bg-gray-50 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold mb-4 text-prive">{amenity.category}</h3>
              <ul className="space-y-2">
                {amenity.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-center">
                    <span className="w-2 h-2 bg-prive rounded-full mr-3"></span>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12">
          <img
            src="/web_image/mbt_1_tienIch.jpg"
            alt="Tiện ích dự án Privé"
            className="w-full lg:w-4/5 h-auto rounded-lg shadow-md mx-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default AmenitiesSection;
