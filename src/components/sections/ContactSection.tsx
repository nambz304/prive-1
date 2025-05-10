
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

        <div className="max-w-2xl mx-auto">
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
    </section>
  );
};

export default ContactSection;
