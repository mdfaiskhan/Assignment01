import React, { useState } from 'react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow z-50">
      <div className="container mx-auto px-4 py-2 flex items-center justify-between relative">
       
        <div className="text-2xl font-bold">Bigspring</div>

       
        <button 
          className="lg:hidden text-gray-600 focus:outline-none" 
          onClick={toggleMenu}
        >
          <svg 
            className="w-6 h-6" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth="2" 
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>

       
        <nav className={`hidden lg:flex lg:justify-center lg:items-center space-x-6`}>
          <div className="flex space-x-4 lg:space-x-6">
            <a href="/" className="text-green-500 hover:text-green-700">Home</a>
            <a href="/blog" className="text-gray-600 hover:text-green-500">Blog</a>
            <a href="/pricing" className="text-gray-600 hover:text-green-500">Pricing</a>
            <a href="/contact" className="text-gray-600 hover:text-green-500">Contact</a>
            <a href="/faq" className="text-gray-600 hover:text-green-500">FAQ</a>
          </div>
        </nav>

        
        <button className="hidden lg:block bg-teal-500 text-white px-6 py-3 rounded-full border border-teal-500 hover:bg-teal-600 transition-colors duration-300">
          Get Started
        </button>

      
        <div 
          className={`fixed top-0 right-0 h-full w-1/2 bg-white shadow-lg transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out z-50 lg:hidden`}
        >
          <div className="p-4">
            <button 
              className="text-gray-600" 
              onClick={toggleMenu}
            >
              <svg 
                className="w-6 h-6" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth="2" 
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <div className="mt-4">
              <a href="/" className="block py-2 text-green-500 hover:text-green-700">Home</a>
              <a href="/blog" className="block py-2 text-gray-600 hover:text-green-500">Blog</a>
              <a href="/pricing" className="block py-2 text-gray-600 hover:text-green-500">Pricing</a>
              <a href="/contact" className="block py-2 text-gray-600 hover:text-green-500">Contact</a>
              <a href="/faq" className="block py-2 text-gray-600 hover:text-green-500">FAQ</a>
              <button className="mt-4 bg-teal-500 text-white px-6 py-3 rounded-full border border-teal-500 hover:bg-teal-600 transition-colors duration-300">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;









