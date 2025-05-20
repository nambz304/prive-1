import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

interface SectionProps {
  t: typeof import('@/lib/translations').default['vi'];
}

const Footer: React.FC<SectionProps> = ({ t }) => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-800 pt-12 pb-6 text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          <div>
            <h3 className="text-2xl font-bold text-prive mb-4">{t.projectName || 'THE PRIVÉ'}</h3>
            <p className="text-gray-300 mb-4">{t.footerDesc}</p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">{t.contactInfo}</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 text-prive mt-0.5 mr-2" />
                <span className="text-gray-300">{t.address}</span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 text-prive mr-2" />
                <a href="tel:0346697531" className="text-gray-300 hover:text-prive">{t.phoneNumber || '034 669 7531'}</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">{t.map}</h4>
            <div className="rounded-lg overflow-hidden h-48">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.897348760091!2d106.746879315334!3d10.800720192303!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317527c9b5b5b5b5%3A0x5b5b5b5b5b5b5b5b!2s55%20V%C5%A9%20T%C3%B4ng%20Phan%2C%20An%20Ph%C3%BA%2C%20Qu%E1%BA%ADn%202%2C%20Th%C3%A0nh%20ph%E1%BB%91%20H%E1%BB%93%20Ch%C3%AD%20Minh!5e0!3m2!1sen!2s!4v1680000000000!5m2!1sen!2s" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }}
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title={t.mapTitle || 'Google Maps'}
              ></iframe>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-10 pt-6 text-center text-gray-400">
          <p>© {currentYear} {t.projectName || 'Privé'}. {t.copyright}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
