import { useState } from 'react';
import { Menu, X, Home, User, Search } from 'lucide-react';

interface NavbarProps {
  onAdminClick: () => void;
}

export default function Navbar({ onAdminClick }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Home className="h-8 w-8 text-blue-600" />
            <span className="ml-2 text-xl font-bold text-gray-800">LuxuryEstates</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="/" className="text-gray-600 hover:text-blue-600">Home</a>
            <a href="/properties" className="text-gray-600 hover:text-blue-600">Properties</a>
            <a href="/search" className="text-gray-600 hover:text-blue-600">Search</a>
            <a href="/contact" className="text-gray-600 hover:text-blue-600">Contact</a>
            <button 
              onClick={onAdminClick}
              className="flex items-center px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700"
            >
              <User className="h-4 w-4 mr-2" />
              Admin Panel
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a href="/" className="block px-3 py-2 text-gray-600 hover:text-blue-600">Home</a>
              <a href="/properties" className="block px-3 py-2 text-gray-600 hover:text-blue-600">Properties</a>
              <a href="/search" className="block px-3 py-2 text-gray-600 hover:text-blue-600">Search</a>
              <a href="/contact" className="block px-3 py-2 text-gray-600 hover:text-blue-600">Contact</a>
              <button 
                onClick={onAdminClick}
                className="w-full text-left px-3 py-2 text-gray-600 hover:text-blue-600"
              >
                Admin Panel
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}