
import React, { useState } from 'react';
import { useToast } from "@/components/ui/use-toast";
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const ContactForm = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate phone number format (Vietnamese number)
    const phoneRegex = /(84|0[3|5|7|8|9])+([0-9]{8})\b/;
    if (!phoneRegex.test(formData.phone)) {
      toast({
        title: "Lỗi",
        description: "Vui lòng nhập số điện thoại hợp lệ",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);
    
    // In a real scenario, you would submit this data to your server or API
    // For this demo, we'll simulate an API call
    try {
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      console.log('Form submitted:', formData);
      
      // Success notification
      toast({
        title: "Gửi thành công!",
        description: "Chúng tôi sẽ liên hệ với bạn sớm nhất",
      });
      
      // Reset form
      setFormData({
        name: '',
        phone: '',
        message: ''
      });

      // Open Zalo with a message
      const message = `*Thông tin đăng ký tư vấn & báo giá*%0A- Họ tên: ${formData.name}%0A- SĐT: ${formData.phone}%0A- Lời nhắn: ${formData.message}`;
      window.open(`https://zalo.me/0346697531?text=${message}`, '_blank');
      
    } catch (error) {
      toast({
        title: "Đã xảy ra lỗi",
        description: "Vui lòng thử lại sau",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 py-4">
      <div>
        <Input
          type="text"
          name="name"
          placeholder="Họ và tên"
          value={formData.name}
          onChange={handleChange}
          className="w-full"
          required
        />
      </div>
      
      <div>
        <Input
          type="tel"
          name="phone"
          placeholder="Số điện thoại"
          value={formData.phone}
          onChange={handleChange}
          className="w-full"
          required
        />
      </div>
      
      <div>
        <Textarea
          name="message"
          placeholder="Lời nhắn"
          value={formData.message}
          onChange={handleChange}
          className="w-full min-h-[100px]"
        />
      </div>
      
      <Button 
        type="submit" 
        className="w-full bg-prive hover:bg-prive-dark"
        disabled={isSubmitting}
      >
        {isSubmitting ? 'Đang gửi...' : 'Gửi thông tin'}
      </Button>
    </form>
  );
};

export default ContactForm;
