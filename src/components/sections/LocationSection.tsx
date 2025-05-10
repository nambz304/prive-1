
import React from 'react';

const LocationSection = () => {
  const nearbyPlaces = [
    {
      category: "Giao thông",
      places: [
        "Metro Bến Thành - Suối Tiên (5 phút)",
        "Cao tốc Long Thành - Dầu Giây (8 phút)",
        "Sân bay Quốc tế Long Thành (25 phút)",
        "Trung tâm Q.1 (15 phút)"
      ]
    },
    {
      category: "Giáo dục",
      places: [
        "Đại học Fulbright (5 phút)",
        "Trường Quốc tế BVIS (7 phút)",
        "Trường Quốc tế Úc (AIS) (10 phút)",
        "Đại học RMIT (15 phút)"
      ]
    },
    {
      category: "Y tế",
      places: [
        "Bệnh viện Quốc tế Vinmec (8 phút)",
        "Bệnh viện FV (12 phút)",
        "Bệnh viện Thủ Đức (15 phút)"
      ]
    },
    {
      category: "Mua sắm & Giải trí",
      places: [
        "TTTM Vincom Mega Mall (5 phút)",
        "TTTM AEON Mall (10 phút)",
        "Thảo Điền Pearl (8 phút)",
        "Sân Golf Thủ Đức (10 phút)"
      ]
    }
  ];

  return (
    <section id="location" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="section-title">
          <h2>Vị Trí Đắc Địa</h2>
          <p>
            Tọa lạc tại vị trí đắc địa của Thành phố Thủ Đức, Privé sở hữu kết nối thuận tiện đến các tiện ích xung quanh và trung tâm thành phố
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="order-2 lg:order-1">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-6 text-prive">Kết Nối Tiện Ích</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {nearbyPlaces.map((category, idx) => (
                  <div key={idx} className="space-y-3">
                    <h4 className="font-medium text-lg">{category.category}</h4>
                    <ul className="space-y-2">
                      {category.places.map((place, placeIdx) => (
                        <li key={placeIdx} className="flex items-start">
                          <span className="text-prive mr-2">•</span>
                          <span className="text-gray-600">{place}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="mt-6 prose max-w-none">
              <p className="text-gray-600">
                Privé tọa lạc tại vị trí đắc địa thuộc phường An Phú, Thành phố Thủ Đức - khu vực đang phát triển năng động nhất của TP. Hồ Chí Minh. Từ dự án, cư dân có thể dễ dàng kết nối đến các khu vực trọng điểm của thành phố thông qua hệ thống giao thông thuận tiện.
              </p>
              <p className="text-gray-600 mt-4">
                Đặc biệt, vị trí của Privé nằm trong khu vực có quy hoạch đồng bộ, hạ tầng hoàn thiện, và là điểm giao thoa giữa không gian sống hiện đại và thiên nhiên xanh mát từ sông Sài Gòn. Đây là khu vực có giá trị bất động sản tăng trưởng bền vững, hứa hẹn mang lại tiềm năng sinh lời cao cho các nhà đầu tư.
              </p>
            </div>
          </div>
          
          <div className="order-1 lg:order-2">
            <div className="rounded-lg overflow-hidden shadow-lg h-full min-h-[400px]">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15676.459490879176!2d106.72151083955079!3d10.800720400000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3175298ff81d5561%3A0xe6276c08bc55925!2zUHJpdsOpIFRodQ!5e0!3m2!1sen!2s!4v1715098730852!5m2!1sen!2s" 
                width="100%" 
                height="450" 
                style={{ border: 0 }}
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Maps Location"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
