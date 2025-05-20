import React from 'react';
import { Phone, MessageSquare, ClipboardList, Home } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle, 
  DialogTrigger 
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import ContactForm from './ContactForm';
import ViewingForm from './ViewingForm';

const FloatingButtons = ({ t }) => {
  const isMobile = useIsMobile();

  // Updated the handleCall function to ensure it works on tablets
  const handleCall = () => {
    window.location.href = 'tel:0346697531';
  };

  const handleZalo = () => {
    window.open('https://zalo.me/0346697531', '_blank');
  };

  return (
    <div className="fixed right-5 bottom-5 flex flex-col space-y-3 z-40">
      <button 
        onClick={handleCall}
        className="flex items-center justify-center w-12 h-12 rounded-full bg-green-500 text-white hover:bg-green-600 transition-transform shadow-lg animate-bounce"
        style={{ animation: 'pulse 1.5s infinite' }}
        title={t.call}
      >
        <Phone size={20} />
      </button>

      <Dialog>
        <DialogTrigger asChild>
          <button 
            className="flex items-center justify-center w-12 h-12 rounded-full bg-prive text-white hover:bg-prive-dark transition-colors shadow-lg"
            title={t.contactTitle}
          >
            <ClipboardList size={20} />
          </button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-center">
              {t.contactTitle}
            </DialogTitle>
          </DialogHeader>
          <ContactForm t={t} />
        </DialogContent>
      </Dialog>

      <Dialog>
        <DialogTrigger asChild>
          <button 
            className="flex items-center justify-center w-12 h-12 rounded-full bg-prive text-white hover:bg-prive-dark transition-colors shadow-lg"
            title={t.viewingTitle}
          >
            <Home size={20} />
          </button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-center">
              {t.viewingTitle}
            </DialogTitle>
          </DialogHeader>
          <ViewingForm t={t} />
        </DialogContent>
      </Dialog>

      <button 
        onClick={handleZalo}
        className="flex items-center justify-center w-12 h-12 rounded-full bg-prive text-white hover:bg-prive-dark transition-colors shadow-lg"
        title={t.zalo}
      >
        <MessageSquare size={20} />
      </button>
    </div>
  );
};

export default FloatingButtons;
