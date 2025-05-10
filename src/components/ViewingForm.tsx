
import React, { useState } from 'react';
import { useToast } from "@/components/ui/use-toast";
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const ViewingForm = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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
    try {
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      console.log('Viewing form submitted:', formData);
      
      // Success notification
      toast({
        title: "Đăng ký thành công!",
        description: "Nhân viên sẽ liên hệ và hỗ trợ bạn xem nhà mẫu",
      });
      
      // Reset form
      setFormData({
        name: '',
        phone: ''
      });

      // Open Zalo with a message
      const message = `*Thông tin đăng ký xem nhà mẫu*%0A- Họ tên: ${formData.name}%0A- SĐT: ${formData.phone}`;
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
      
      <div className="pt-2 text-center text-sm text-muted-foreground">
        <p>Nhân viên bên em sẽ liên hệ và hỗ trợ mình xem nhà mẫu</p>
      </div>
      
      <Button 
        type="submit" 
        className="w-full bg-prive hover:bg-prive-dark"
        disabled={isSubmitting}
      >
        {isSubmitting ? 'Đang gửi...' : 'Đăng ký xem nhà mẫu'}
      </Button>
    </form>
  );
};

export default ViewingForm;
