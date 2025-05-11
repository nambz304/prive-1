
import React from 'react';
const OverviewSection = () => {
  const projectDetails = [{
    label: 'Tên dự án',
    value: 'The Privé'
  }, {
    label: 'Vị trí',
    value: 'KDC Nam Rạch Chiếc, Phường An Phú, Thành phố Thủ Đức, TP. Hồ Chí Minh'
  }, {
    label: 'Chủ đầu tư',
    value: 'Đất Xanh Group'
  }, {
    label: 'Tư vấn thiết kế',
    value: 'Ong & Ong – Singapore'
  }, {
    label: 'Đơn vị xây dựng',
    value: 'Tập đoàn Hoà Bình'
  }, {
    label: 'Diện tích',
    value: '6,7ha'
  }, {
    label: 'Quy mô',
    value: '12 block, 33-35 tầng, 3175 sản phẩm'
  }, {
    label: 'Các loại hình',
    value: 'Studio, 2PN 2WC, 3PN 2WC, Garden Unit, Garden Duplex, Penthouse'
  }, {
    label: 'Diện tích các sản phẩm',
    value: '1PN-3PN: 50m2 - 98m2, Garden Unit: 49m2 - 110m2, Garden Duplex: 130m2 - 200m2, Penthouse: 105m2 - 145m2'
  }, {
    label: 'Tiện ích nổi bật',
    value: 'Hồ bơi 3000m2, Gym, Khu BBQ, Sky Bar, Khu vui chơi trẻ em, Cinema & Karaoke, Boxing, Golf 3D...'
  }, {
    label: 'Pháp lý',
    value: 'Sổ hồng lâu dài'
  }, {
    label: 'Vật liệu bàn giao',
    value: 'Bàn giao cao cấp với thiết bị vệ sinh âm tường, tủ giày, tủ bếp trên-dưới, bếp từ, máy hút mùi...'
  }, {
    label: 'Thời gian bàn giao',
    value: 'Quý 3/2027'
  }, {
    label: 'Ngân hàng liên kết',
    value: '8 ngân hàng: Vietcombank, BIDV, Techcombank, MB Bank, TP Bank, MBV Bank, Vietinbank, VP Bank'
  }];
  return <section id="overview" className="bg-white py-20">
      <div className="container mx-auto px-4">
        <div className="section-title">
          <h2>Tổng Quan Dự Án</h2>
          <p className="mx-0">
            The Privé là dự án căn hộ cao cấp mang phong cách vừa hiện đại, vừa hòa hợp với thiên nhiên và được trang bị các tiện ích tuyệt vời
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2">
            <div className="relative rounded-lg overflow-hidden shadow-lg h-full min-h-[300px]">
              <img alt="Privé Building" className="w-full h-full object-cover" src="/lovable-uploads/9a274b96-1cc0-45bc-813e-ad4620d51bc2.jpg" />
            </div>
          </div>
          
          <div className="lg:col-span-3">
            <div className="bg-gray-900 text-white rounded-lg p-6 shadow-lg">
              <h3 className="text-xl font-semibold mb-4 text-prive">Thông Tin Chi Tiết</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4">
                {projectDetails.map((detail, index) => <div key={index} className="border-b border-gray-700 pb-3">
                    <span className="text-sm text-gray-400">{detail.label}</span>
                    <p className="font-medium text-white">{detail.value}</p>
                  </div>)}
              </div>
            </div>
            
            <div className="mt-6 prose max-w-none text-gray-700">
              <p>
                The Privé là dự án biểu tượng mới của Tập đoàn Đất Xanh tại khu vực Thành phố Thủ Đức, hứa hẹn mang đến không gian sống lý tưởng kết hợp giữa tiện nghi hiện đại và thiên nhiên xanh mát. 
                Với thiết kế kiến trúc hiện đại từ đối tác Ong & Ong, đơn vị thiết kế nổi tiếng đến từ Singapore, Privé không chỉ là nơi để ở mà còn là điểm nhấn kiến trúc của khu vực.
              </p>
              <p className="mt-4">
                Mỗi căn hộ tại The Privé đều được thiết kế tối ưu công năng, tận dụng ánh sáng tự nhiên và view thoáng đãng. 
                Cư dân sẽ được tận hưởng cuộc sống tiện nghi với hệ thống Smart Home hiện đại, vật liệu hoàn thiện cao cấp, và đặc biệt là hệ thống tiện ích đẳng cấp như hồ bơi(3 hồ bơi với tổng diện tích 3000m2), công viên ven sông, phòng gym, khu vui chơi trẻ em, khu BBQ, v.v.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default OverviewSection;
