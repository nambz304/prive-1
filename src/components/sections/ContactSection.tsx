import React from 'react';
import ContactForm from '@/components/ContactForm';
import { Phone, Mail, MapPin } from 'lucide-react';

interface SectionProps {
  t: typeof import('@/lib/translations').default['vi'];
}

const ContactSection: React.FC<SectionProps> = ({ t }) => {
  return (
    <section id="contact" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <div className="section-title">
          <h2>{t.contact}</h2>
          <p className="text-gray-300">{t.contactDesc}</p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="bg-gray-800 rounded-lg p-8 shadow-lg">
            <h3 className="text-xl font-semibold mb-6 text-prive">{t.contactFormTitle}</h3>
            <ContactForm t={t} />
            
            <div className="mt-6 text-center">
              <p className="text-sm text-gray-400">{t.contactFormNote}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
