
import React from 'react';
import { Button } from '@/components/ui/button';

const PricingSection = () => {
  const pricingData = [
    {
      type: "Căn hộ 1 Phòng Ngủ",
      area: "50m² - 60m²",
      priceRange: "2.5 - 3.2 tỷ",
      pricePerM2: "50 - 53 triệu/m²",
      features: [
        "Phù hợp cho người độc thân, cặp đôi",
        "Thiết kế hiện đại, tối ưu không gian",
        "Ban công riêng",
        "View thành phố hoặc sông"
      ]
    },
    {
      type: "Căn hộ 2 Phòng Ngủ",
      area: "75m² - 85m²",
      priceRange: "3.8 - 4.5 tỷ",
      pricePerM2: "50 - 53 triệu/m²",
      features: [
        "Lý tưởng cho gia đình trẻ",
        "2 phòng tắm",
        "Không gian sinh hoạt chung rộng rãi",
        "Ban công lớn, view đẹp"
      ]
    },
    {
      type: "Căn hộ 3 Phòng Ngủ",
      area: "100m² - 120m²",
      priceRange: "5.0 - 6.3 tỷ",
      pricePerM2: "50 - 53 triệu/m²",
      features: [
        "Dành cho gia đình nhiều thế hệ",
        "Không gian sống rộng rãi",
        "Thiết kế hiện đại, thông thoáng",
        "View panorama"
      ]
    },
    {
      type: "Penthouse & Sky Villa",
      area: "160m² - 200m²",
      priceRange: "8.5 - 12 tỷ",
      pricePerM2: "53 - 60 triệu/m²",
      features: [
        "Đẳng cấp sang trọng bậc nhất",
        "Thiết kế độc đáo, cao cấp",
        "Tầm nhìn không giới hạn",
        "Tiện ích riêng biệt"
      ]
    }
  ];

  const paymentPlans = [
    {
      name: "Tiêu chuẩn",
      description: "30% đến khi nhận nhà, 70% giải ngân khi nhận nhà",
      detail: "Đặt cọc 50 triệu, ký HĐMB 15%, 15% sau 6 tháng, 70% khi nhận nhà"
    },
    {
      name: "Thanh toán nhanh",
      description: "Thanh toán 95% giá trị căn hộ, chiết khấu 8%",
      detail: "Áp dụng cho khách hàng thanh toán sớm 95% giá trị căn hộ trong vòng 15 ngày kể từ ngày ký HĐMB"
    },
    {
      name: "Hỗ trợ ngân hàng",
      description: "Hỗ trợ vay đến 70% giá trị căn hộ, ân hạn nợ gốc lên đến 24 tháng",
      detail: "Ngân hàng đối tác: Vietcombank, BIDV, Techcombank với lãi suất ưu đãi 0% trong 24 tháng đầu"
    }
  ];

  const openZalo = () => {
    window.open('https://zalo.me/0346697531', '_blank');
  };

  return (
    <section id="pricing" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="section-title">
          <h2>Bảng Giá</h2>
          <p>
            Thông tin giá bán và phương thức thanh toán linh hoạt, phù hợp với nhu cầu của khách hàng
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {pricingData.map((item, index) => (
            <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <div className="bg-prive text-white px-6 py-4">
                <h3 className="text-xl font-semibold">{item.type}</h3>
                <p className="opacity-90">{item.area}</p>
              </div>
              
              <div className="p-6">
                <div className="mb-6 text-center">
                  <span className="text-2xl font-bold text-prive">{item.priceRange}</span>
                  <p className="text-gray-500 text-sm">{item.pricePerM2}</p>
                </div>
                
                <ul className="space-y-3 mb-6">
                  {item.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <span className="text-green-500 mr-2">✓</span>
                      <span className="text-gray-600 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  onClick={openZalo}
                  className="w-full bg-prive hover:bg-prive-dark"
                >
                  Nhận tư vấn
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-lg p-6 md:p-8 shadow-md">
          <h3 className="text-2xl font-semibold mb-6 text-prive">Phương Thức Thanh Toán</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {paymentPlans.map((plan, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-5 hover:border-prive transition-colors">
                <h4 className="font-semibold text-lg mb-3">{plan.name}</h4>
                <p className="text-gray-600 mb-4">{plan.description}</p>
                <p className="text-sm text-gray-500">{plan.detail}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-8 bg-gray-50 p-5 rounded-lg border border-gray-200">
            <h4 className="font-semibold text-lg mb-2">Chính Sách Ưu Đãi</h4>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="text-prive mr-2">•</span>
                <span className="text-gray-700">Quà tặng nội thất trị giá lên đến 500 triệu cho khách hàng mua căn hộ từ 3 phòng ngủ</span>
              </li>
              <li className="flex items-start">
                <span className="text-prive mr-2">•</span>
                <span className="text-gray-700">Miễn phí 3 năm phí quản lý cho khách hàng thanh toán sớm 95%</span>
              </li>
              <li className="flex items-start">
                <span className="text-prive mr-2">•</span>
                <span className="text-gray-700">Chiết khấu 1%/căn cho khách hàng mua từ 2 căn trở lên</span>
              </li>
              <li className="flex items-start">
                <span className="text-prive mr-2">•</span>
                <span className="text-gray-700">Chính sách cam kết thuê lại với lợi nhuận tối thiểu 6%/năm trong 2 năm đầu</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 text-center">
          <p className="mb-6 text-gray-600">Giá bán và chính sách có thể thay đổi theo từng thời điểm. Vui lòng liên hệ với chúng tôi để nhận báo giá chi tiết mới nhất.</p>
          <Button 
            size="lg" 
            className="bg-prive hover:bg-prive-dark"
            onClick={openZalo}
          >
            Nhận báo giá chi tiết
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
