import React, { useState } from 'react';
import { useToast } from "@/components/ui/use-toast";
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const ViewingForm = ({ t }) => {
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
        title: t.errorTitle,
        description: t.errorPhone,
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
        title: t.successTitle,
        description: t.viewingSuccess,
      });
      
      // Reset form
      setFormData({
        name: '',
        phone: ''
      });

      // Open Zalo with a message
      const message = `*${t.viewingTitle}*%0A- ${t.namePlaceholder}: ${formData.name}%0A- ${t.phonePlaceholder}: ${formData.phone}`;
      window.open(`https://zalo.me/0346697531?text=${message}`, '_blank');
      
    } catch (error) {
      toast({
        title: t.errorTitle,
        description: t.tryAgain,
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
          placeholder={t.namePlaceholder}
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
          placeholder={t.phonePlaceholder}
          value={formData.phone}
          onChange={handleChange}
          className="w-full"
          required
        />
      </div>
      
      <div className="pt-2 text-center text-sm text-muted-foreground">
        <p>{t.viewingSuccess}</p>
      </div>
      
      <Button 
        type="submit" 
        className="w-full bg-prive hover:bg-prive-dark"
        disabled={isSubmitting}
      >
        {isSubmitting ? t.sending : t.viewingTitle}
      </Button>
    </form>
  );
};

export default ViewingForm;
