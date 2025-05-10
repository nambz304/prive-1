
import React from 'react';
import { Button } from '@/components/ui/button';
import { Home } from 'lucide-react';

const SampleRoomSection = () => {
  const openZalo = () => {
    window.open('https://zalo.me/0346697531', '_blank');
  };

  return (
    <section id="sample-room" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="section-title">
          <h2>Nhà Mẫu</h2>
          <p>
            Trải nghiệm không gian sống đẳng cấp tại căn hộ mẫu Privé
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="animate-on-scroll">
            <h3 className="text-2xl font-bold text-prive mb-4">Thiết kế đẳng cấp, tinh tế đến từng chi tiết</h3>
            
            <p className="text-gray-600 mb-4">
              Căn hộ mẫu Privé được thiết kế bởi đội ngũ kiến trúc sư từ KUME Design Asia, 
              mang đến không gian sống sang trọng, tinh tế với các chi tiết hoàn thiện cao cấp. 
              Từng góc nhỏ trong căn hộ đều được chăm chút tỉ mỉ, tối ưu công năng sử dụng 
              nhưng vẫn đảm bảo tính thẩm mỹ cao.
            </p>
            
            <p className="text-gray-600 mb-4">
              Nội thất trong căn hộ mẫu được nhập khẩu từ các thương hiệu hàng đầu thế giới, 
              kết hợp hài hòa với không gian kiến trúc, tạo nên tổng thể hoàn hảo. 
              Hệ thống Smart Home hiện đại được tích hợp, mang đến trải nghiệm sống tiện nghi.
            </p>
            
            <p className="text-gray-600 mb-6">
              Căn hộ được thiết kế với không gian mở, tối ưu ánh sáng tự nhiên, mang đến cảm giác 
              thoáng đãng. Ban công rộng rãi với tầm nhìn panorama, giúp cư dân thưởng ngoạn khung cảnh 
              thành phố sôi động hay bình minh tuyệt đẹp mỗi ngày.
            </p>
            
            <ul className="mb-6 space-y-2">
              <li className="flex items-center">
                <span className="text-prive mr-2">✓</span>
                <span>Thiết kế sang trọng theo phong cách hiện đại</span>
              </li>
              <li className="flex items-center">
                <span className="text-prive mr-2">✓</span>
                <span>Nội thất cao cấp từ thương hiệu hàng đầu</span>
              </li>
              <li className="flex items-center">
                <span className="text-prive mr-2">✓</span>
                <span>Trang bị hệ thống Smart Home tiện nghi</span>
              </li>
              <li className="flex items-center">
                <span className="text-prive mr-2">✓</span>
                <span>Tầm nhìn không giới hạn, đón ánh sáng tự nhiên</span>
              </li>
            </ul>
          </div>

          <div className="animate-on-scroll">
            <div className="relative rounded-lg overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80" 
                alt="Căn hộ mẫu Privé" 
                className="w-full h-auto"
              />
            </div>
            
            <div className="mt-6 text-center">
              <Button 
                onClick={openZalo} 
                variant="default" 
                size="lg"
                className="bg-prive hover:bg-prive-dark"
              >
                <Home className="mr-2 h-5 w-5" />
                Đăng ký xem nhà mẫu
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SampleRoomSection;
