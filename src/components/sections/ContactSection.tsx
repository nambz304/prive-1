
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Phone, Mail, MapPin } from 'lucide-react';
import { useToast } from "@/components/ui/use-toast";

const ContactSection = () => {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get('name') as string;
    const phone = formData.get('phone') as string;
    const message = formData.get('message') as string;
    
    // Validate form
    if (!name || !phone) {
      toast({
        title: "Lỗi",
        description: "Vui lòng điền đầy đủ thông tin",
        variant: "destructive"
      });
      return;
    }

    // Validate phone number format (Vietnamese number)
    const phoneRegex = /(84|0[3|5|7|8|9])+([0-9]{8})\b/;
    if (!phoneRegex.test(phone)) {
      toast({
        title: "Lỗi",
        description: "Vui lòng nhập số điện thoại hợp lệ",
        variant: "destructive"
      });
      return;
    }
    
    console.log('Contact form submitted:', { name, phone, message });
    
    // Success notification
    toast({
      title: "Gửi thành công!",
      description: "Chúng tôi sẽ liên hệ với bạn sớm nhất",
    });
    
    // Reset form
    e.currentTarget.reset();

    // Open Zalo with a message
    const zaloMessage = `*Thông tin liên hệ từ website*%0A- Họ tên: ${name}%0A- SĐT: ${phone}%0A- Lời nhắn: ${message}`;
    window.open(`https://zalo.me/0346697531?text=${zaloMessage}`, '_blank');
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="section-title">
          <h2>Liên Hệ</h2>
          <p>
            Để nhận thông tin chi tiết và tư vấn về dự án Privé, vui lòng liên hệ với chúng tôi
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-gray-50 rounded-lg p-6 md:p-8 shadow-sm">
            <h3 className="text-xl font-semibold mb-6 text-prive">Gửi thông tin liên hệ</h3>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Họ và tên *
                </label>
                <Input
                  id="name"
                  name="name"
                  placeholder="Nhập họ và tên"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                  Số điện thoại *
                </label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="Nhập số điện thoại"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Lời nhắn
                </label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Nhập lời nhắn của bạn"
                  rows={4}
                />
              </div>
              
              <Button 
                type="submit" 
                className="w-full bg-prive hover:bg-prive-dark"
              >
                Gửi thông tin
              </Button>
            </form>
          </div>
          
          <div className="space-y-6">
            <div className="bg-gray-50 rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-semibold mb-4 text-prive">Thông Tin Liên Hệ</h3>
              
              <ul className="space-y-4">
                <li className="flex items-start">
                  <Phone className="w-5 h-5 text-prive mt-0.5 mr-3" />
                  <div>
                    <p className="font-medium">Hotline</p>
                    <a href="tel:0346697531" className="text-gray-600 hover:text-prive">034 669 7531</a>
                  </div>
                </li>
                <li className="flex items-start">
                  <Mail className="w-5 h-5 text-prive mt-0.5 mr-3" />
                  <div>
                    <p className="font-medium">Email</p>
                    <a href="mailto:info@privedatxanh.vn" className="text-gray-600 hover:text-prive">info@privedatxanh.vn</a>
                  </div>
                </li>
                <li className="flex items-start">
                  <MapPin className="w-5 h-5 text-prive mt-0.5 mr-3" />
                  <div>
                    <p className="font-medium">Địa Chỉ</p>
                    <p className="text-gray-600">Phường An Phú, Thành phố Thủ Đức, TP. Hồ Chí Minh</p>
                  </div>
                </li>
              </ul>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-semibold mb-4 text-prive">Nhà Mẫu & Văn Phòng Bán Hàng</h3>
              <p className="text-gray-600 mb-3">
                Quý khách có thể tham quan nhà mẫu tại địa chỉ:
              </p>
              <p className="font-medium">
                Phường An Phú, TP. Thủ Đức, TP. Hồ Chí Minh
              </p>
              <p className="text-gray-600 mt-3">
                Thời gian mở cửa: 8:30 - 17:30 (Thứ 2 - Chủ nhật)
              </p>
            </div>
            
            <div className="flex justify-center">
              <Button 
                variant="outline" 
                className="border-prive text-prive hover:bg-prive hover:text-white"
                onClick={() => window.open('https://zalo.me/0346697531', '_blank')}
              >
                Kết nối Zalo
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
