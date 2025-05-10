
import React from 'react';

const LocationSection = () => {
  const locationFeatures = [
    {
      icon: "🏙️",
      title: "Trung tâm Thủ Đức",
      description: "Vị trí đắc địa ngay trung tâm thành phố Thủ Đức, dễ dàng kết nối với các khu vực trọng điểm của TP.HCM."
    },
    {
      icon: "🛣️",
      title: "Kết nối giao thông",
      description: "Liền kề các trục đường lớn như Xa Lộ Hà Nội, Mai Chí Thọ, Vành Đai 2, giúp cư dân di chuyển thuận tiện."
    },
    {
      icon: "🏥",
      title: "Tiện ích xung quanh",
      description: "Gần các trung tâm thương mại, trường học quốc tế, bệnh viện hàng đầu, công viên và khu vui chơi giải trí."
    },
    {
      icon: "🌉",
      title: "Cầu nối trung tâm",
      description: "Chỉ 15 phút đến trung tâm Quận 1, 10 phút đến Quận 2 và 20 phút đến sân bay Tân Sơn Nhất."
    }
  ];

  return (
    <section id="location" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="section-title">
          <h2>Vị Trí Đắc Địa</h2>
          <p>
            Privé sở hữu vị trí chiến lược tại Phường An Phú, TP. Thủ Đức, kết nối thuận tiện đến các khu vực trọng điểm
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
          <div className="animate-on-scroll">
            <h3 className="text-xl font-bold text-prive mb-6">Lợi thế vị trí</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {locationFeatures.map((feature, index) => (
                <div key={index} className="bg-white p-5 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                  <div className="text-3xl mb-3">{feature.icon}</div>
                  <h4 className="font-semibold text-lg mb-2">{feature.title}</h4>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="animate-on-scroll">
            <div className="relative h-full min-h-[400px] rounded-lg overflow-hidden shadow-lg">
              <img 
                src="/lovable-uploads/9a274b96-1cc0-45bc-813e-ad4620d51bc2.jpg"
                alt="Vị trí dự án Privé" 
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gray-900 bg-opacity-70 text-white p-4">
                <h4 className="font-semibold mb-1">55 Vũ Tông Phan</h4>
                <p className="text-sm">Phường An Phú, TP. Thủ Đức, TP. Hồ Chí Minh</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-bold text-prive mb-4">Kết nối giao thông thuận tiện</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-4 border border-gray-200 rounded-lg">
              <h4 className="font-semibold">Sân bay Tân Sơn Nhất</h4>
              <p className="text-gray-600">20 phút di chuyển</p>
            </div>
            <div className="p-4 border border-gray-200 rounded-lg">
              <h4 className="font-semibold">Trung tâm Quận 1</h4>
              <p className="text-gray-600">15 phút di chuyển</p>
            </div>
            <div className="p-4 border border-gray-200 rounded-lg">
              <h4 className="font-semibold">Khu đô thị Thủ Thiêm</h4>
              <p className="text-gray-600">10 phút di chuyển</p>
            </div>
            <div className="p-4 border border-gray-200 rounded-lg">
              <h4 className="font-semibold">Metro Số 1</h4>
              <p className="text-gray-600">5 phút di chuyển</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
