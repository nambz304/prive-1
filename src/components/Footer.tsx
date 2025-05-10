
import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-800 pt-12 pb-6 text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          <div>
            <h3 className="text-2xl font-bold text-prive mb-4">PRIVÉ</h3>
            <p className="text-gray-300 mb-4">
              Dự án căn hộ cao cấp Privé mang đến không gian sống lý tưởng kết hợp giữa tiện nghi hiện đại và thiên nhiên xanh mát, 
              tạo nên trải nghiệm sống đẳng cấp cho cư dân.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Thông Tin Liên Hệ</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 text-prive mt-0.5 mr-2" />
                <span className="text-gray-300">55 Vũ Tông Phan, Phường An Phú, Thành phố Thủ Đức, TP. Hồ Chí Minh</span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 text-prive mr-2" />
                <a href="tel:0346697531" className="text-gray-300 hover:text-prive">034 669 7531</a>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 text-prive mr-2" />
                <a href="mailto:info@privedatxanh.vn" className="text-gray-300 hover:text-prive">info@privedatxanh.vn</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Bản Đồ</h4>
            <div className="rounded-lg overflow-hidden h-48">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.0053666508086!2d106.740145!3d10.808556!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317526fc0edd2453%3A0x8a4db9817c716287!2zNTUgVsWpIFTDtG5nIFBoYW4sIEFuIFBow7osIFF14bqtbiAyLCBUaMOgbmggcGjhu5EgSOG7kyBDaMOtIE1pbmgsIFZpZXRuYW0!5e0!3m2!1sen!2s!4v1715302782077!5m2!1sen!2s" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }}
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Maps"
              ></iframe>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-10 pt-6 text-center text-gray-400">
          <p>© {currentYear} Privé. Tất cả quyền được bảo lưu.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
