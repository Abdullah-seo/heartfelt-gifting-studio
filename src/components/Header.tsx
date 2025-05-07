
import React, { useEffect, useState } from 'react';
import { Search, ShoppingCart, ChevronDown } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`w-full fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-sm' : ''}`}>
      {/* Announcement Bar */}
      <div className="bg-lightgrey py-2 px-4 text-center text-sm font-serif">
        <div className="container mx-auto">
          <p className="text-darkgrey">
            Free UK Shipping Over £50 • Handcrafted in the UK • Personalised with Love
          </p>
        </div>
      </div>

      {/* Main Header */}
      <div className={`bg-white transition-all duration-300 ${isScrolled ? 'py-3' : 'py-5'}`}>
        <div className="container mx-auto flex items-center justify-between px-4">
          {/* Logo */}
          <div className="text-2xl md:text-3xl font-serif font-medium">
            <a href="/" className="text-darkgrey hover:opacity-80 transition-opacity">
              heartfelt
            </a>
          </div>

          {/* Navigation - Desktop */}
          <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
            <a href="/" className="text-darkgrey hover:text-royal transition-colors">Home</a>
            <div className="relative group">
              <button className="text-darkgrey hover:text-royal transition-colors flex items-center">
                Shop <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              <div className="absolute left-0 top-full mt-1 bg-white shadow-lg rounded-md p-4 min-w-[200px] hidden group-hover:block">
                <div className="grid gap-2">
                  <a href="#" className="text-darkgrey hover:text-royal transition-colors">Engraved Mugs</a>
                  <a href="#" className="text-darkgrey hover:text-royal transition-colors">Baby Gift Sets</a>
                  <a href="#" className="text-darkgrey hover:text-royal transition-colors">Anniversary Gifts</a>
                  <a href="#" className="text-darkgrey hover:text-royal transition-colors">Lunch Boxes</a>
                  <a href="#" className="text-darkgrey hover:text-royal transition-colors">Pens</a>
                </div>
              </div>
            </div>
            <a href="#" className="text-darkgrey hover:text-royal transition-colors">About</a>
            <a href="#" className="text-darkgrey hover:text-royal transition-colors">Personalise</a>
            <a href="#" className="text-darkgrey hover:text-royal transition-colors">Wholesale</a>
            <a href="#" className="text-darkgrey hover:text-royal transition-colors">Contact</a>
          </nav>

          {/* Right Actions */}
          <div className="flex items-center space-x-4">
            <div className="hidden md:flex items-center gap-2 text-sm">
              <span className="font-medium">🇬🇧</span>
              <span>GBP</span>
            </div>
            <button className="text-darkgrey hover:text-royal transition-colors">
              <Search className="h-5 w-5" />
            </button>
            <div className="relative">
              <button className="text-darkgrey hover:text-royal transition-colors">
                <ShoppingCart className="h-5 w-5" />
                <span className="absolute -top-2 -right-2 bg-royal text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">3</span>
              </button>
            </div>
            <button className="md:hidden text-darkgrey hover:text-royal transition-colors">
              <div className="w-6 h-5 flex flex-col justify-between">
                <span className="w-full h-0.5 bg-current"></span>
                <span className="w-full h-0.5 bg-current"></span>
                <span className="w-full h-0.5 bg-current"></span>
              </div>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
