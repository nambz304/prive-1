import React, { useState } from 'react';
import { useToast } from "@/hooks/use-toast";
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const GOOGLE_FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLSepCgfsQQq9Ej-E_atTqWe68qY2le1yOAH4eynFTqKTPfw_jQ/formResponse"; // Replace with your Google Form URL
const GOOGLE_FORM_ENTRIES = {
  name: "entry.1096969560", // Replace with the entry ID for the name field
  phone: "entry.557467604", // Replace with the entry ID for the phone field
  message: "entry.252073521" // Replace with the entry ID for the message field
};

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

  const handleSubmit = (e: React.FormEvent) => {
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

    // Submit the form using a hidden iframe
    const form = document.createElement('form');
    form.action = GOOGLE_FORM_URL;
    form.method = 'POST';
    form.target = 'hidden_iframe';
    form.style.display = 'none';

    // Append form fields
    const nameField = document.createElement('input');
    nameField.name = GOOGLE_FORM_ENTRIES.name;
    nameField.value = formData.name;
    form.appendChild(nameField);

    const phoneField = document.createElement('input');
    phoneField.name = GOOGLE_FORM_ENTRIES.phone;
    phoneField.value = formData.phone;
    form.appendChild(phoneField);

    const messageField = document.createElement('input');
    messageField.name = GOOGLE_FORM_ENTRIES.message;
    messageField.value = formData.message;
    form.appendChild(messageField);

    document.body.appendChild(form);

    // Create a hidden iframe
    const iframe = document.createElement('iframe');
    iframe.name = 'hidden_iframe';
    iframe.style.display = 'none';
    document.body.appendChild(iframe);

    console.log("Submitting form with data:", {
      [GOOGLE_FORM_ENTRIES.name]: formData.name,
      [GOOGLE_FORM_ENTRIES.phone]: formData.phone,
      [GOOGLE_FORM_ENTRIES.message]: formData.message
    });

    // Submit the form
    form.submit();
    toast({
      title: "Gửi thành công!",
      description: "Thông tin của bạn đã được ghi nhận.",
    });

    setFormData({
      name: "",
      phone: "",
      message: ""
});

    setIsSubmitting(false);
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