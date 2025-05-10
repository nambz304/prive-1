
import React from 'react';
import ContactForm from '@/components/ContactForm';
import { Phone, Mail, MapPin } from 'lucide-react';

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <div className="section-title">
          <h2>Liên Hệ</h2>
          <p className="text-gray-300">
            Hãy liên hệ với chúng tôi để nhận tư vấn và báo giá chi tiết về dự án Privé
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <div className="bg-gray-800 rounded-lg p-8 shadow-lg">
              <h3 className="text-xl font-semibold mb-6 text-prive">Thông Tin Liên Hệ</h3>
              
              <ul className="space-y-6">
                <li className="flex items-start">
                  <MapPin className="w-6 h-6 text-prive mt-1 mr-3" />
                  <div>
                    <h4 className="font-medium text-white">Địa chỉ</h4>
                    <p className="text-gray-300">Phường An Phú, Thành phố Thủ Đức, TP. Hồ Chí Minh</p>
                  </div>
                </li>
                
                <li className="flex items-start">
                  <Phone className="w-6 h-6 text-prive mt-1 mr-3" />
                  <div>
                    <h4 className="font-medium text-white">Điện thoại</h4>
                    <a href="tel:0346697531" className="text-gray-300 hover:text-prive">034 669 7531</a>
                  </div>
                </li>
                
                <li className="flex items-start">
                  <Mail className="w-6 h-6 text-prive mt-1 mr-3" />
                  <div>
                    <h4 className="font-medium text-white">Email</h4>
                    <a href="mailto:info@privedatxanh.vn" className="text-gray-300 hover:text-prive">info@privedatxanh.vn</a>
                  </div>
                </li>
              </ul>

              <div className="mt-8">
                <h4 className="font-medium text-white mb-4">Giờ làm việc:</h4>
                <p className="text-gray-300">Thứ Hai - Chủ Nhật: 8:30 - 17:30</p>
              </div>

              <div className="mt-8">
                <h4 className="font-medium text-white mb-4">Bản đồ:</h4>
                <div className="rounded-lg overflow-hidden h-64">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15676.459490879176!2d106.72151083955079!3d10.800720400000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3175298ff81d5561%3A0xe6276c08bc55925!2zUHJpdsOpIFRodQ!5e0!3m2!1sen!2s!4v1715098730852!5m2!1sen!2s" 
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
          </div>
          
          <div>
            <div className="bg-gray-800 rounded-lg p-8 shadow-lg">
              <h3 className="text-xl font-semibold mb-6 text-prive">Gửi Yêu Cầu Tư Vấn</h3>
              <ContactForm />
              
              <div className="mt-6 text-center">
                <p className="text-sm text-gray-400">
                  Nhân viên tư vấn của chúng tôi sẽ liên hệ với bạn trong vòng 24 giờ sau khi nhận được thông tin.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
