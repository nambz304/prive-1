import React from 'react';
import { Button } from '@/components/ui/button';
import ImageGallery from '@/components/ImageGallery';

const SampleRoomSection = () => {
  // These images would need to be replaced with actual project images
  const images = [
    {
      src: "/lovable-uploads/9a274b96-1cc0-45bc-813e-ad4620d51bc2.jpg",
      alt: "Phòng khách căn hộ mẫu"
    },
    {
      src: "/lovable-uploads/9a274b96-1cc0-45bc-813e-ad4620d51bc2.jpg",
      alt: "Phòng ngủ master"
    },
    {
      src: "/lovable-uploads/9a274b96-1cc0-45bc-813e-ad4620d51bc2.jpg",
      alt: "Phòng bếp và khu vực ăn"
    },
    {
      src: "/lovable-uploads/9a274b96-1cc0-45bc-813e-ad4620d51bc2.jpg",
      alt: "Phòng tắm cao cấp"
    },
    {
      src: "/lovable-uploads/9a274b96-1cc0-45bc-813e-ad4620d51bc2.jpg",
      alt: "Ban công view thành phố"
    },
    {
      src: "/lovable-uploads/9a274b96-1cc0-45bc-813e-ad4620d51bc2.jpg",
      alt: "Khu vực làm việc"
    }
  ];

  const openZalo = () => {
    window.open('https://zalo.me/0346697531', '_blank');
  };

  return (
    <section id="sample-room" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="section-title">
          <h2>Nhà Mẫu</h2>
          <p>
            Trải nghiệm không gian sống đẳng cấp tại căn hộ mẫu của dự án The Privé
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-12">
          <div>
            <h3 className="text-xl font-bold text-prive mb-4">Thiết kế theo phong cách châu Âu</h3>
            <p className="text-gray-600 mb-4">
              Căn hộ mẫu tại Privé được thiết kế theo phong cách hiện đại, mang đến không gian sống tinh tế, sang trọng với các đường nét kiến trúc thanh lịch, vật liệu cao cấp và ánh sáng tự nhiên tràn ngập.
            </p>
            <p className="text-gray-600 mb-4">
              Mỗi chi tiết trong căn hộ đều được chăm chút tỉ mỉ, từ hệ thống Smart Home hiện đại, hệ thống đèn led âm trần tinh tế, đến các thiết bị vệ sinh, thiết bị nhà bếp cao cấp từ các thương hiệu hàng đầu châu Âu.
            </p>
            <p className="text-gray-600 mb-4">
              Các căn hộ được thiết kế tối ưu công năng sử dụng, đảm bảo sự riêng tư nhưng vẫn kết nối giữa các thành viên trong gia đình. Ban công rộng rãi mang đến tầm nhìn khoáng đạt, là nơi lý tưởng để tận hưởng không khí trong lành và ngắm nhìn thành phố.
            </p>
            <p className="text-gray-600 mb-4">
              Mỗi căn hộ tại Privé đều là một tác phẩm nghệ thuật hoàn hảo, nơi bạn có thể tự hào gọi là "tổ ấm" của mình.
            </p>
            <div className="hidden lg:flex justify-center mt-4">
              <Button 
                onClick={openZalo} 
                className="bg-prive hover:bg-prive-dark text-white w-full lg:w-auto"
              >
                Đăng ký tham quan nhà mẫu
              </Button>
            </div>
          </div>
          
          <div className="relative rounded-lg overflow-hidden shadow-lg">
            <img
              src="/web_image/6_nhaMau.jpg"
              alt="Căn hộ mẫu Privé"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="lg:hidden mt-4 flex justify-center">
            <Button 
              onClick={openZalo} 
              className="bg-prive hover:bg-prive-dark text-white w-full lg:w-auto"
            >
              Đăng ký tham quan nhà mẫu
            </Button>
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default SampleRoomSection;
