import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Phone, MessageSquare, ChevronDown } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';
import translations from '@/lib/translations';
import { Select, SelectTrigger, SelectContent, SelectItem } from '@/components/ui/select';

interface HeaderProps {
  lang: 'vi' | 'en';
  setLang: (lang: 'vi' | 'en') => void;
  t: typeof translations['vi'];
}

const Header: React.FC<HeaderProps> = ({ lang, setLang, t }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const isMobile = useIsMobile();
  const navigationItems = [
    { label: t.overview, href: '#overview' },
    { label: t.location, href: '#location' },
    { label: t.amenities, href: '#amenities' },
    { label: t.floorPlans, href: '#floor-plans' },
    { label: t.pricing, href: '#pricing' },
    { label: t.policy, href: '#policy' },
    { label: t.projectImages, href: '#project-images' },
    { label: t.sampleRoom, href: '#sample-room' },
    { label: t.contact, href: '#contact' },
  ];
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prevState) => !prevState);
    document.body.style.overflow = !isMobileMenuOpen ? 'hidden' : 'auto'; // Toggle scrolling based on menu state
  };

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'; // Ensure scrolling is disabled when the menu is open
    } else {
      document.body.style.overflow = 'auto'; // Re-enable scrolling when the menu is closed
    }
  }, [isMobileMenuOpen]);

  const handleMenuItemClick = () => {
    setIsMobileMenuOpen(false);
    document.body.style.overflow = 'auto'; // Re-enable scrolling after clicking a menu item
  };

  const handleOpenZalo = () => {
    window.open('https://zalo.me/0346697531', '_blank');
  };

  // Ensure clicking outside navigation items closes the menu, while clicking on items navigates to sections
  const handleMenuBackgroundClick = (e) => {
    if (e.target.id === 'mobile-menu-container') {
      setIsMobileMenuOpen(false);
      document.body.style.overflow = 'auto'; // Re-enable scrolling
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ${isScrolled ? 'bg-gray-900 shadow-md py-2' : 'bg-gray-900/90 backdrop-blur py-4'}`}>
      <div className="container flex items-center justify-between px-4">
        <div className="flex items-center mr-8">
          <a href="#hero" className="text-2xl font-bold text-white">THE PRIVÉ</a>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:block flex-1 ml-8">
          <ul className="flex space-x-7">
            {navigationItems.map(item => <li key={item.label}>
                <a href={item.href} className="font-medium text-gray-200 hover:text-prive transition-colors">
                  {item.label}
                </a>
              </li>)}
          </ul>
        </nav>

        {/* CTA Buttons + Language Switcher */}
        <div className="hidden lg:flex items-center space-x-4">
          <Button 
            variant="default" 
            className="bg-prive hover:bg-prive-dark animate-zoom-bounce" 
            onClick={handleOpenZalo}
          >
            <MessageSquare className="mr-2 h-4 w-4" />
            {t.consult}
          </Button>
          <div className="ml-4 flex items-center">
            <Select value={lang} onValueChange={setLang}>
              <SelectTrigger className="min-w-[120px] flex items-center justify-between px-3 py-2 border border-input rounded-md bg-background text-sm text-black">
                <span className="whitespace-nowrap overflow-hidden text-ellipsis text-black">Language</span>
                <ChevronDown className="ml-2 h-4 w-4 text-black" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="vi">Vietnamese</SelectItem>
                <SelectItem value="en">English</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Language Switcher for mobile */}
        <div className="flex lg:hidden items-center">
          <Select value={lang} onValueChange={setLang}>
            <SelectTrigger className="h-7 min-h-0 flex items-center justify-between px-1 py-0.5 border border-input rounded bg-background text-xs text-black w-auto">
              <span className="whitespace-nowrap overflow-hidden text-ellipsis text-black">Language</span>
              <ChevronDown className="ml-0 h-4 w-4 text-black" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="vi">Vietnamese</SelectItem>
              <SelectItem value="en">English</SelectItem>
            </SelectContent>
          </Select>
        </div>
        {/* Mobile Menu Toggle */}
        <div className="lg:hidden -ml-2 flex flex-col items-center">
          <span className="text-xs text-white mb-1">Menu</span>
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
      <div
        id="mobile-menu-container"
        onClick={handleMenuBackgroundClick}
        className={`fixed inset-0 z-40 bg-gray-900 text-white transform transition-transform duration-300 ease-in-out lg:hidden pt-0 overflow-y-auto ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
        style={{ pointerEvents: isMobileMenuOpen ? 'auto' : 'none', visibility: isMobileMenuOpen ? 'visible' : 'hidden', height: '100vh' }}
        aria-hidden={!isMobileMenuOpen}
      >
        <header className="sticky top-0 left-0 right-0 z-50 bg-gray-900 flex items-center justify-between px-4 py-4 border-b border-gray-800">
          <a href="#hero" className="text-2xl font-bold text-white">THE PRIVÉ</a>
          <Button variant="ghost" onClick={toggleMobileMenu} aria-label="Close menu" className="p-2 text-white">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <line x1="18" y1="6" x2="6" y2="18" stroke="white" strokeWidth="2" strokeLinecap="round"/>
              <line x1="6" y1="6" x2="18" y2="18" stroke="white" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </Button>
        </header>
        <nav className="container px-4 pt-4">
          {/* Updated navigation item click to prevent menu closure */}
          <ul className="space-y-6 text-center">
            {navigationItems.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="text-xl font-medium block py-2 text-white hover:text-prive"
                  onClick={(e) => {
                    e.stopPropagation(); // Prevent menu closure when clicking on navigation items
                    handleMenuItemClick();
                  }}
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li className="pt-4 flex flex-col space-y-4">
              <Button
                variant="outline"
                className="w-full border-prive text-prive hover:bg-prive hover:text-white"
                onClick={handleOpenZalo}
              >
                <MessageSquare className="mr-2 h-4 w-4" /> {t.consult}
              </Button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
export default Header;
