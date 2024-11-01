import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import PropertyCard from './components/PropertyCard';
import AdminPanel from './components/AdminPanel';
import type { Property } from './types';

const sampleProperties: Property[] = [
  {
    id: '1',
    title: 'Modern Luxury Villa',
    description: 'Stunning modern villa with panoramic views',
    price: 2500000,
    location: 'Beverly Hills, CA',
    bedrooms: 5,
    bathrooms: 4,
    area: 4500,
    type: 'sale',
    images: ['https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2075&q=80'],
    featured: true,
    amenities: ['Pool', 'Garden', 'Garage'],
    createdAt: new Date().toISOString()
  },
  {
    id: '2',
    title: 'Cozy Downtown Apartment',
    description: 'Modern apartment in the heart of the city',
    price: 750000,
    location: 'Manhattan, NY',
    bedrooms: 2,
    bathrooms: 2,
    area: 1200,
    type: 'sale',
    images: ['https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=2075&q=80'],
    featured: false,
    amenities: ['Gym', 'Parking', 'Security'],
    createdAt: new Date().toISOString()
  },
  {
    id: '3',
    title: 'Oceanfront Paradise',
    description: 'Luxurious beachfront property with private access',
    price: 3800000,
    location: 'Miami Beach, FL',
    bedrooms: 6,
    bathrooms: 5,
    area: 5200,
    type: 'sale',
    images: ['https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=2075&q=80'],
    featured: true,
    amenities: ['Beach Access', 'Pool', 'Tennis Court'],
    createdAt: new Date().toISOString()
  }
];

function App() {
  const [isAdmin, setIsAdmin] = useState(false);

  const toggleAdmin = () => setIsAdmin(!isAdmin);

  if (isAdmin) {
    return <AdminPanel onLogout={toggleAdmin} />;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar onAdminClick={toggleAdmin} />
      
      <main>
        <Hero />
        
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Properties</h2>
            <p className="text-gray-600">Discover our hand-picked selection of premium properties</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sampleProperties.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <button className="px-8 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
              View All Properties
            </button>
          </div>
        </section>
        
        <section className="bg-blue-600 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <h3 className="text-4xl font-bold mb-2">1,500+</h3>
                <p>Properties Available</p>
              </div>
              <div>
                <h3 className="text-4xl font-bold mb-2">500+</h3>
                <p>Happy Clients</p>
              </div>
              <div>
                <h3 className="text-4xl font-bold mb-2">50+</h3>
                <p>Expert Agents</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h4 className="text-lg font-semibold mb-4">About Us</h4>
              <p className="text-gray-400">We are dedicated to providing exceptional real estate services with a focus on luxury properties.</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="/properties" className="hover:text-white">Properties</a></li>
                <li><a href="/agents" className="hover:text-white">Our Agents</a></li>
                <li><a href="/about" className="hover:text-white">About Us</a></li>
                <li><a href="/contact" className="hover:text-white">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
              <ul className="space-y-2 text-gray-400">
                <li>123 Luxury Lane</li>
                <li>Beverly Hills, CA 90210</li>
                <li>+1 (555) 123-4567</li>
                <li>info@luxuryestates.com</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Newsletter</h4>
              <p className="text-gray-400 mb-4">Subscribe to our newsletter for the latest updates.</p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 rounded-l-md text-gray-900 focus:outline-none"
                />
                <button className="px-4 py-2 bg-blue-600 rounded-r-md hover:bg-blue-700">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
            <p>&copy; 2024 LuxuryEstates. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;