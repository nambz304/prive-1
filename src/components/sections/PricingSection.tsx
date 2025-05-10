
import React from 'react';
import { Button } from '@/components/ui/button';
import ImageGallery from '@/components/ImageGallery';

const PricingSection = () => {
  const pricingData = [
    {
      type: "Studio",
      area: "45m² - 55m²",
      priceRange: "2.2 - 2.8 tỷ",
      pricePerM2: "48 - 51 triệu/m²",
    },
    {
      type: "2 PN 2 WC",
      area: "75m² - 85m²",
      priceRange: "3.8 - 4.5 tỷ",
      pricePerM2: "50 - 53 triệu/m²",
    },
    {
      type: "3 PN 2 WC",
      area: "100m² - 120m²",
      priceRange: "5.0 - 6.3 tỷ",
      pricePerM2: "50 - 53 triệu/m²",
    },
    {
      type: "Duplex Villa",
      area: "140m² - 180m²",
      priceRange: "7.5 - 9.8 tỷ",
      pricePerM2: "53 - 55 triệu/m²",
    },
    {
      type: "Penthouse",
      area: "180m² - 220m²",
      priceRange: "10.5 - 13.5 tỷ",
      pricePerM2: "55 - 60 triệu/m²",
    }
  ];

  const projectImages = [
    {
      src: "https://images.unsplash.com/photo-1598228723793-52759bba239c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
      alt: "Khu vực sảnh chờ sang trọng"
    },
    {
      src: "https://images.unsplash.com/photo-1560184897-ae75f418493e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
      alt: "Không gian sống hiện đại"
    },
    {
      src: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
      alt: "Phối cảnh tổng thể dự án Privé"
    }
  ];

  const openZalo = () => {
    window.open('https://zalo.me/0346697531', '_blank');
  };

  return (
    <section id="pricing" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <div className="section-title">
          <h2>Bảng Giá</h2>
          <p>
            Thông tin giá bán và các loại hình căn hộ của dự án Privé
          </p>
        </div>

        <div className="overflow-x-auto mb-12">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-prive">
                <th className="border border-gray-600 p-3 text-left">Loại căn hộ</th>
                <th className="border border-gray-600 p-3 text-left">Diện tích</th>
                <th className="border border-gray-600 p-3 text-left">Giá bán</th>
                <th className="border border-gray-600 p-3 text-left">Đơn giá</th>
                <th className="border border-gray-600 p-3 text-left">Liên hệ</th>
              </tr>
            </thead>
            <tbody>
              {pricingData.map((item, index) => (
                <tr key={index} className={index % 2 === 0 ? "bg-gray-800" : ""}>
                  <td className="border border-gray-600 p-3 font-medium">{item.type}</td>
                  <td className="border border-gray-600 p-3">{item.area}</td>
                  <td className="border border-gray-600 p-3">{item.priceRange}</td>
                  <td className="border border-gray-600 p-3">{item.pricePerM2}</td>
                  <td className="border border-gray-600 p-3">
                    <Button 
                      onClick={openZalo}
                      variant="default"
                      size="sm"
                      className="bg-prive hover:bg-prive-dark w-full"
                    >
                      Báo giá
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-10 bg-gray-800 rounded-lg p-8">
          <h3 className="text-2xl font-semibold mb-6 text-prive">Hình ảnh dự án</h3>
          <ImageGallery images={projectImages} columns={3} className="mb-8" />
          
          <div className="text-center">
            <p className="mb-6 text-gray-300">Liên hệ ngay với chúng tôi để nhận báo giá chi tiết và các chính sách ưu đãi mới nhất.</p>
            <Button 
              size="lg" 
              className="bg-prive hover:bg-prive-dark"
              onClick={openZalo}
            >
              Nhận báo giá chi tiết
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
