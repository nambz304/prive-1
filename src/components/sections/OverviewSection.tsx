
import React from 'react';

const OverviewSection = () => {
  const projectDetails = [
    { label: 'Tên dự án', value: 'Căn hộ cao cấp Privé' },
    { label: 'Vị trí', value: 'Phường An Phú, Thành phố Thủ Đức, TP. Hồ Chí Minh' },
    { label: 'Chủ đầu tư', value: 'Tập đoàn Đất Xanh' },
    { label: 'Tư vấn thiết kế', value: 'KUME Design Asia' },
    { label: 'Đơn vị xây dựng', value: 'Coteccons' },
    { label: 'Diện tích', value: '9,000m²' },
    { label: 'Quy mô', value: '2 tòa tháp, 25 tầng, 500 căn hộ' },
    { label: 'Các loại hình', value: 'Studio, 2PN 2WC, 3PN 2WC, Duplex Villa, Penthouse' },
    { label: 'Diện tích căn hộ', value: '45m² - 220m²' },
    { label: 'Tiện ích nổi bật', value: 'Hồ bơi vô cực, Gym, Spa, Khu BBQ, Sky Bar, Vườn Zen, Khu vui chơi trẻ em' },
    { label: 'Pháp lý', value: 'Sổ hồng lâu dài' },
    { label: 'Vật liệu bàn giao', value: 'Hoàn thiện cao cấp, Smart Home' },
    { label: 'Thời gian bàn giao', value: 'Quý 4/2025' },
    { label: 'Ngân hàng liên kết', value: 'Vietcombank, BIDV, Techcombank, MB Bank, TPBank' },
  ];

  return (
    <section id="overview" className="bg-white py-20">
      <div className="container mx-auto px-4">
        <div className="section-title">
          <h2>Tổng Quan Dự Án</h2>
          <p>
            Privé là dự án căn hộ cao cấp mang phong cách hiện đại, hòa hợp với thiên nhiên và được trang bị các tiện nghi đẳng cấp
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2">
            <div className="relative rounded-lg overflow-hidden shadow-lg h-full min-h-[300px]">
              <img 
                src="https://images.unsplash.com/photo-1518005020951-eccb494ad742?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80" 
                alt="Privé Building" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          <div className="lg:col-span-3">
            <div className="bg-gray-900 text-white rounded-lg p-6 shadow-lg">
              <h3 className="text-xl font-semibold mb-4 text-prive">Thông Tin Chi Tiết</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4">
                {projectDetails.map((detail, index) => (
                  <div key={index} className="border-b border-gray-700 pb-3">
                    <span className="text-sm text-gray-400">{detail.label}</span>
                    <p className="font-medium text-white">{detail.value}</p>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="mt-6 prose max-w-none text-gray-700">
              <p>
                Privé là dự án biểu tượng mới của Tập đoàn Đất Xanh tại khu vực Thành phố Thủ Đức, hứa hẹn mang đến không gian sống lý tưởng kết hợp giữa tiện nghi hiện đại và thiên nhiên xanh mát. 
                Với thiết kế kiến trúc hiện đại từ đối tác Nhật Bản KUME Design Asia, Privé không chỉ là nơi để ở mà còn là điểm nhấn kiến trúc của khu vực.
              </p>
              <p className="mt-4">
                Mỗi căn hộ tại Privé đều được thiết kế tối ưu công năng, tận dụng ánh sáng tự nhiên và view thoáng đãng. 
                Cư dân sẽ được tận hưởng cuộc sống tiện nghi với hệ thống Smart Home hiện đại, vật liệu hoàn thiện cao cấp, và đặc biệt là hệ thống tiện ích đẳng cấp như hồ bơi vô cực, phòng gym, khu vui chơi trẻ em, khu BBQ, v.v.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OverviewSection;
