import React from 'react';
import { Button } from '@/components/ui/button';
import ProjectImagesSectionComponent from './ProjectImagesSection';

const PolicySection = () => {
  const policies = [
    {
      title: "Chính sách ưu đãi",
      details: [
        { 
          title: "Chiết khấu 3%", 
          description: "Áp dụng cho khách hàng booking sớm" 
        },
        { 
          title: "Chiết khấu 1%-2%", 
          description: "Áp dụng cho khách hàng mua sỉ" 
        },
        { 
          title: "Chiết khấu 2%", 
          description: "Áp dụng cho khách hàng ưu tiên", 
          subDetails: [
            "Khách hàng thân thiết của Tập đoàn Đất Xanh",
            "Cổ đông nắm giữ từ 10.000 cổ phiếu DXG hoặc DXS",
            "CBNV ngân hàng hoặc khách hàng có sổ tiết kiệm từ 1 tỷ trở lên tại các ngân hàng đối tác"
          ]
        }
      ]
    },
    {
      title: "Chính sách hỗ trợ tài chính",
      details: [
        { 
          title: "Thanh toán ban đầu ít", 
          description: "Chỉ thanh toán từ 8.6% cho tới khi nhận nhà" 
        },
        { 
          title: "Ngân hàng hỗ trợ vay", 
          description: "Ngân hàng hỗ trợ vay hơn 70% giá trị căn hộ" 
        },
        { 
          title: "Hỗ trợ lãi suất", 
          description: "Hỗ trợ lãi suất 0% trong 24 tháng" 
        },
        { 
          title: "Ân hạn nợ gốc lâu", 
          description: "Ân hạn nợ gốc 24-60 tháng" 
        },
        { 
          title: "Nhiều ngân hàng liên kết", 
          description: "Vietcombank, BIDV, Techcombank, MB Bank, TP Bank, MBV Bank, Vietinbank, VP Bank" 
        }
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
            Các chính sách ưu đãi và hỗ trợ tài chính hấp dẫn từ dự án The Privé
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {policies.map((policy, index) => (
            <div key={index} className="bg-gray-50 rounded-lg p-6 border border-gray-200 hover:border-prive transition-colors">
              <h3 className="text-xl font-semibold mb-4 text-prive">{policy.title}</h3>
              <ul className="space-y-3">
                {policy.details.map((detail, idx) => (
                  <li key={idx} className="flex flex-col items-start">
                    <span className="text-prive font-bold">{detail.title}</span>
                    <span className="text-gray-700">{detail.description}</span>
                    {detail.subDetails && (
                      <ul className="mt-2 space-y-1 pl-4 list-disc">
                        {detail.subDetails.map((subDetail, subIdx) => (
                          <li key={subIdx} className="text-gray-600">{subDetail}</li>
                        ))}
                      </ul>
                    )}
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
