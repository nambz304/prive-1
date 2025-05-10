
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Phone, MessageSquare } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';
const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const isMobile = useIsMobile();
  const navigationItems = [{
    label: 'Tổng Quan',
    href: '#overview'
  }, {
    label: 'Vị Trí',
    href: '#location'
  }, {
    label: 'Tiện Ích',
    href: '#amenities'
  }, {
    label: 'Mặt Bằng',
    href: '#floor-plans'
  }, {
    label: 'Bảng Giá',
    href: '#pricing'
  }, {
    label: 'Chính Sách',
    href: '#policy'
  }, {
    label: 'Nhà Mẫu',
    href: '#sample-room'
  }, {
    label: 'Liên Hệ',
    href: '#contact'
  }];
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  const handleOpenZalo = () => {
    window.open('https://zalo.me/0346697531', '_blank');
  };
  return <header className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ${isScrolled ? 'bg-gray-900 shadow-md py-2' : 'bg-gray-900/90 backdrop-blur py-4'}`}>
      <div className="container flex items-center justify-between px-4">
        <div className="flex items-center">
          <a href="#hero" className="text-2xl font-bold text-white">THE PRIVÉ</a>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:block">
          <ul className="flex space-x-8">
            {navigationItems.map(item => <li key={item.label}>
                <a href={item.href} className="font-medium text-gray-200 hover:text-prive transition-colors">
                  {item.label}
                </a>
              </li>)}
          </ul>
        </nav>

        {/* CTA Buttons */}
        <div className="hidden lg:flex items-center space-x-4">
          <Button variant="outline" className="border-prive text-prive hover:bg-prive hover:text-white" onClick={handleOpenZalo}>
            <MessageSquare className="mr-2 h-4 w-4" />
            Tư Vấn
          </Button>
          <Button variant="default" className="bg-prive hover:bg-prive-dark" onClick={handleOpenZalo}>
            Booking
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="lg:hidden">
          <Button variant="ghost" onClick={toggleMobileMenu} aria-label="Toggle menu" className="p-2 text-white">
            <div className="w-6 flex flex-col gap-1.5">
              <span className={`block h-0.5 w-full bg-white transition-transform duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
              <span className={`block h-0.5 w-full bg-white transition-opacity duration-300 ${isMobileMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
              <span className={`block h-0.5 w-full bg-white transition-transform duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
            </div>
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobile && <div className={`fixed inset-0 z-40 bg-gray-900 text-white transform transition-transform duration-300 ease-in-out ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'} lg:hidden pt-20`}>
          <nav className="container px-4">
            <ul className="space-y-6 text-center">
              {navigationItems.map(item => <li key={item.label}>
                  <a href={item.href} className="text-xl font-medium block py-2 text-white hover:text-prive" onClick={() => setIsMobileMenuOpen(false)}>
                    {item.label}
                  </a>
                </li>)}
              <li className="pt-4 flex flex-col space-y-4">
                <Button variant="outline" className="w-full border-prive text-prive hover:bg-prive hover:text-white" onClick={handleOpenZalo}>
                  <MessageSquare className="mr-2 h-4 w-4" />
                  Tư Vấn
                </Button>
                <Button variant="default" className="w-full bg-prive hover:bg-prive-dark" onClick={handleOpenZalo}>
                  Booking
                </Button>
              </li>
            </ul>
          </nav>
        </div>}
    </header>;
};
export default Header;
