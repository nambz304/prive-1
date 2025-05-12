import React, { useState } from 'react';
import { useToast } from "@/hooks/use-toast";
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
    
    try {
      // Gửi dữ liệu form đến backend
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to submit form');
      }

      // Success notification
      toast({
        title: "Gửi thành công!",
        description: "Thông tin của bạn đã được ghi nhận.",
      });

      // Reset form
      setFormData({
        name: '',
        phone: '',
        message: ''
      });
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
          placeholder="Tên"
          value={formData.name}
          onChange={handleChange}
          className="w-full text-black"
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
          className="w-full text-black"
          required
        />
      </div>
      
      <div>
        <Textarea
          name="message"
          placeholder="ANH/CHỊ QUAN TÂM CĂN 2PN HAY 3PN ĐỂ LẠI THÔNG TIN EM GỬI BÁO GIÁ"
          value={formData.message}
          onChange={handleChange}
          className="w-full min-h-[100px] text-black"
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
