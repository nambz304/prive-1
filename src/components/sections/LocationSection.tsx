import React from 'react';
const LocationSection = () => {
  const locationFeatures = [{
    icon: "🏙️",
    title: "Siêu kết nối",
    description: "Dự án nằm ngay trục cao tốc TPHCM - Long Thành - Dầu Giây, tuyến đường sắt cao tốc Bắc Nam, tuyến metro Cát Lái - Bến Thành - Tham Lương giúp kết nối nội thành lẫn ngoại thành TPHCM nhanh chóng"
  }, {
    icon: "🛣️",
    title: "Liền kề các khu đô thị quốc tế",
    description: "Nằm đối diện Saigon Sports City và Global City - hai khu đô thị quốc tế lớn nhất tại TPHCM. Khu vực này được định vị là New Downtown - trung tâm mới của Sài Gòn"
  }, {
    icon: "🏥",
    title: "Đón đầu các quy hoạch lớn",
    description: "Dự án đón đầu các quy hoạch lớn như: Khu liên hợp thể dục thể thao quốc gia Rạch Chiếc, cao tốc TPHCM - Long Thành - Dầu Dây mở rộng từ 4 làn -> 8 làn, nút giao An Phú, siêu nhà Gas Thủ Thiêm"
  }, {
    icon: "🌉",
    title: "3 mặt hướng thuỷ",
    description: "Được bao quanh bởi sông Giồng Ông Tố, một nhánh của sông Sài Gòn, dự án có 3 mặt hướng thuỷ, không khí trong lành như một ốc đảo biệt lập giữa lòng TPHCM"
  }];
  return <section id="location" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="section-title">
          <h2>Vị Trí Đắc Địa</h2>
          <p>
            The Privé sở hữu vị trí chiến lược tại Phường An Phú, TP. Thủ Đức, kết nối thuận tiện đến các khu vực trọng điểm
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
          <div className="animate-on-scroll">
            <h3 className="text-xl font-bold text-prive mb-6">Lợi thế vị trí</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {locationFeatures.map((feature, index) => <div key={index} className="bg-white p-5 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                  <div className="text-3xl mb-3">{feature.icon}</div>
                  <h4 className="font-semibold text-lg mb-2">{feature.title}</h4>
                  <p className="text-gray-600">{feature.description}</p>
                </div>)}
            </div>
          </div>

          <div className="animate-on-scroll">
            <div className="relative h-full min-h-[400px] rounded-lg overflow-hidden shadow-lg">
              <img alt="Vị trí dự án Privé" src="/lovable-uploads/2bcf6504-c315-418a-99c4-15564ed0ecb2.jpg" className="w-full h-full object-contain" />
              <div className="absolute bottom-0 left-0 right-0 bg-gray-900 bg-opacity-70 text-white p-4">
                
                
              </div>
            </div>
          </div>
        </div>

        {/* Removed 'Kết nối giao thông thuận tiện' section */}
      </div>
    </section>;
};
export default LocationSection;