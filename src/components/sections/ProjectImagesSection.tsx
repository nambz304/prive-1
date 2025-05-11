import React from 'react';
import { Button } from '@/components/ui/button';
import ImageGallery from '@/components/ImageGallery';

const ProjectImagesSection = ({ images, onContact }: { images: { src: string; alt: string }[]; onContact: () => void }) => {
  const additionalImages = [
    { src: "/web_image/7_HinhAnhDuAn/tongQuan2.jpg", alt: "Hành lang sang trọng" },
    { src: "/web_image/7_HinhAnhDuAn/tongQuan3.jpg", alt: "Sân chơi Pickleball" },
    { src: "/web_image/7_HinhAnhDuAn/viewTPHCM.jpg", alt: "Sân thể thao đa năng" }
  ];

  return (
    <section id="project-images" className="py-20 bg-gray-800 rounded-lg p-8">
      <h3 className="text-2xl font-semibold mb-6 text-prive">Hình ảnh dự án</h3>
      <ImageGallery images={[...images, ...additionalImages]} columns={3} className="mb-8" />
      <div className="text-center">
        <p className="mb-6 text-gray-300">Liên hệ ngay với chúng tôi để xem thêm hình ảnh tiện ích căn hộ.</p>
        <Button 
          size="lg" 
          className="bg-prive hover:bg-prive-dark"
          onClick={onContact}
        >
          Nhận báo giá chi tiết
        </Button>
      </div>
    </section>
  );
};

export default ProjectImagesSection;
