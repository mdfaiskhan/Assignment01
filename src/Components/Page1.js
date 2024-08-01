import React from 'react';
import img from './bjhvj.jpg'; 

const Page1 = () => {
  return (
    <section className="text-center py-20 bg-gray-50">
      <div className="container mx-auto px-4 flex justify-center">
        <div className="w-7/12 md:w-7/12 flex flex-col items-center mx-auto">
          <h1 className="text-4xl font-bold mb-4">
            Let us solve your critical website development challenges
          </h1>
          <p className="text-gray-600 mb-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam nihil enim maxime corporis cumque totam aliquid nam sint inventore optio modi neque laborum officiis necessitatibus
          </p>
          <img src={img} alt="Example" className="w-full max-w-md mx-auto" />
        </div>
      </div>
    </section>
  );
}

export default Page1;



