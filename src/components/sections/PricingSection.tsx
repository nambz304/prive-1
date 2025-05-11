import React from 'react';
import { Button } from '@/components/ui/button';
import ImageGallery from '@/components/ImageGallery';
import ProjectImagesSection from './ProjectImagesSection';

const PricingSection = () => {
  const pricingData = [
    {
      type: "Studio",
      area: "50m²",
      priceRange: "450 - 500 triệu",
      pricePerM2: "48 - 51 triệu/m²",
    },
    {
      type: "2PN 2WC",
      area: "71m² - 88m²",
      priceRange: "650 - 850 triệu",
      pricePerM2: "50 - 53 triệu/m²",
    },
    {
      type: "3PN 2WC",
      area: "98m²",
      priceRange: "900 triệu - 1 tỷ",
      pricePerM2: "50 - 53 triệu/m²",
    },
    {
      type: "Duplex Villa",
      area: "130m² - 200m²",
      priceRange: "Đang cập nhật",
      pricePerM2: "53 - 55 triệu/m²",
    },
    {
      type: "Penthouse",
      area: "105m² - 145m²",
      priceRange: "Đang cập nhật",
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
            Thông tin giá bán và các loại hình căn hộ của dự án The Privé
          </p>
        </div>

        <div className="overflow-x-auto mb-12">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-prive">
                <th className="border border-gray-600 p-3 text-left">Loại căn hộ</th>
                <th className="border border-gray-600 p-3 text-left">Diện tích</th>
                <th className="border border-gray-600 p-3 text-left">Thanh toán đợt 1</th>
                <th className="border border-gray-600 p-3 text-left">Liên hệ</th>
              </tr>
            </thead>
            <tbody>
              {pricingData.map((item, index) => (
                <tr key={index} className={index % 2 === 0 ? "bg-gray-800" : ""}>
                  <td className="border border-gray-600 p-3 font-medium">{item.type}</td>
                  <td className="border border-gray-600 p-3">{item.area}</td>
                  <td className="border border-gray-600 p-3">{item.priceRange}</td>
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

      </div>
    </section>
  );
};

export default PricingSection;
