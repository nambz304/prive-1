
import React from 'react';
import { Button } from '@/components/ui/button';

const PolicySection = () => {
  const policies = [
    {
      title: "Chính sách thanh toán",
      details: [
        "Đặt cọc: 50 triệu đồng",
        "Đợt 1: 15% giá trị căn hộ (bao gồm tiền đặt cọc) - Ký HĐMB",
        "Đợt 2: 15% giá trị căn hộ - Sau 3 tháng",
        "Đợt 3: 20% giá trị căn hộ - Sau 6 tháng",
        "Đợt 4: 25% giá trị căn hộ - Sau 12 tháng",
        "Đợt 5: 25% giá trị căn hộ - Khi nhận nhà"
      ]
    },
    {
      title: "Chính sách ưu đãi",
      details: [
        "Chiết khấu 8% khi thanh toán sớm 95% giá trị căn hộ",
        "Miễn phí 3 năm phí quản lý cho khách hàng thanh toán sớm 95%",
        "Chiết khấu 1% cho khách hàng mua từ 2 căn trở lên",
        "Tặng gói nội thất cao cấp trị giá 500 triệu đồng cho căn hộ từ 3PN trở lên"
      ]
    },
    {
      title: "Chính sách hỗ trợ tài chính",
      details: [
        "Hỗ trợ vay ngân hàng lên đến 70% giá trị căn hộ",
        "Ân hạn nợ gốc lên đến 24 tháng",
        "Hỗ trợ lãi suất 0% trong 18 tháng đầu",
        "Ngân hàng liên kết: Vietcombank, BIDV, Techcombank, MB Bank"
      ]
    },
    {
      title: "Chính sách cam kết",
      details: [
        "Cam kết tiến độ xây dựng đúng kế hoạch",
        "Cam kết chất lượng xây dựng đạt tiêu chuẩn quốc tế",
        "Cam kết bàn giao đúng hạn vào Q4/2025",
        "Cam kết sổ hồng sở hữu lâu dài"
      ]
    }
  ];

  const openZalo = () => {
    window.open('https://zalo.me/0346697531', '_blank');
  };

  return (
    <section id="policy" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="section-title">
          <h2>Chính Sách</h2>
          <p>
            Các chính sách thanh toán và ưu đãi hấp dẫn từ dự án Privé
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {policies.map((policy, index) => (
            <div key={index} className="bg-gray-50 rounded-lg p-6 border border-gray-200 hover:border-prive transition-colors">
              <h3 className="text-xl font-semibold mb-4 text-prive">{policy.title}</h3>
              <ul className="space-y-3">
                {policy.details.map((detail, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="text-prive mr-2 mt-1">•</span>
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="mb-6 text-gray-600">
            Liên hệ với chúng tôi để được tư vấn chi tiết về các chính sách phù hợp với nhu cầu của bạn
          </p>
          <Button 
            onClick={openZalo}
            className="bg-prive hover:bg-prive-dark"
            size="lg"
          >
            Nhận tư vấn về chính sách
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PolicySection;
