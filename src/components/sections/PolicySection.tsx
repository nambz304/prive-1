import React from 'react';
import { Button } from '@/components/ui/button';
import ProjectImagesSectionComponent from './ProjectImagesSection';

const PolicySection = () => {
  const policies = [
    {
      title: "Chính sách ưu đãi",
      details: [
        "Chiết khấu 8% khi thanh toán sớm 95% giá trị căn hộ",
        "Miễn phí 3 năm phí quản lý cho khách hàng thanh toán sớm 95%",
        "Chiết khấu 1% cho khách hàng mua từ 2 căn trở lên",
        "Tặng gói nội thất cao cấp trị giá 500 triệu đồng cho căn hộ từ 3PN trở lên",
        "Tặng voucher nội thất trị giá 200 triệu đồng cho căn hộ 2PN",
        "Được quyền chọn tầng, chọn hướng căn hộ theo yêu cầu"
      ]
    },
    {
      title: "Chính sách hỗ trợ tài chính",
      details: [
        "Hỗ trợ vay ngân hàng lên đến 70% giá trị căn hộ",
        "Ân hạn nợ gốc lên đến 24 tháng",
        "Hỗ trợ lãi suất 0% trong 18 tháng đầu",
        "Ngân hàng liên kết: Vietcombank, BIDV, Techcombank, MB Bank, TPBank",
        "Hỗ trợ thủ tục pháp lý để vay vốn ngân hàng một cách nhanh chóng",
        "Cam kết sổ hồng sở hữu lâu dài sau khi thanh toán đủ"
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
            Các chính sách ưu đãi và hỗ trợ tài chính hấp dẫn từ dự án Privé
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

        {/* Add spacing before ProjectImagesSection */}
        <div className="mt-12"></div>

        <ProjectImagesSectionComponent 
          images={[
            { src: "/web_image/7_HinhAnhDuAn/shopHouse.jpg", alt: "Khu vực sảnh chờ sang trọng" },
            { src: "/web_image/7_HinhAnhDuAn/sanPickleBall.jpg", alt: "Không gian sống hiện đại" },
            { src: "/web_image/7_HinhAnhDuAn/sanTheThapDaNang.jpg", alt: "Phối cảnh tổng thể dự án Privé" }
          ]}
          onContact={() => window.open('https://zalo.me/0346697531', '_blank')}
        />
      </div>
    </section>
  );
};

export default PolicySection;
