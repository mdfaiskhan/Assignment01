import React from 'react';
import { FaCode, FaDesktop, FaClock, FaDollarSign, FaHeart, FaTachometerAlt, FaCloud } from 'react-icons/fa'; 

const features = [
  {
    title: 'Clean Code',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit quam nihil',
    icon: <FaCode className="text-3xl sm:text-4xl text-teal-600" />, 
  },
  {
    title: 'Object Oriented',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit quam nihil',
    icon: <FaDesktop className="text-3xl sm:text-4xl text-teal-600" />, 
  },
  {
    title: '24h Service',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit quam nihil',
    icon: <FaClock className="text-3xl sm:text-4xl text-teal-600" />, 
  },
  {
    title: 'Value for Money',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit quam nihil',
    icon: <FaHeart className="text-3xl sm:text-4xl text-teal-600" />, 
  },
  {
    title: 'Faster Response',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit quam nihil',
    icon: <FaTachometerAlt className="text-3xl sm:text-4xl text-teal-600" />, 
  },
  {
    title: 'Cloud Support',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit quam nihil',
    icon: <FaCloud className="text-3xl sm:text-4xl text-teal-600" />, 
  },
];

const Page2 = () => {
  return (
    <section className="bg-teal-50 py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-2xl sm:text-3xl md:text-4xl font-bold text-teal-800 mb-8">
          Something You Need To Know
        </h2>
        <div className="flex justify-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow-md text-center flex flex-col items-center">
                <div className="flex items-center justify-center mb-4 h-16">
                  {feature.icon}
                </div>
                <h3 className="text-base sm:text-lg md:text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-xs sm:text-sm md:text-base">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Page2;




