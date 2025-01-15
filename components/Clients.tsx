import React from 'react';
import { InfiniteMovingCards } from './ui/InfiniteMovingCards';
import { testimonials } from '@/data';

const companies = [
  { id: 1, img: '/images/1.png', name: 'OpsHub' },
  { id: 2, img: '/images/2.png', name: 'Organic Products India' },
  { id: 3, img: '/images/3.png', name: 'JP Morgan' },
];

const Clients = () => {
  return (
    <div className="py-20" id="testimonials">
      <h1 className="heading">
        Acknowledgement from <span className="text-purple">my Journey</span>
      </h1>

      <div className="flex flex-col items-center justify-center max-lg:mt-10">
        <div className="h-[50vh] md:h-[30rem] rounded-md flex flex-col antialiased items-center relative overflow-hidden">
          <InfiniteMovingCards items={testimonials} direction="right" speed="slow" />
          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-16 mt-4 max-lg:mt-6">
            {/* Reduced margin-top here */}
            {companies.map(({ id, img, name }) => (
              <div key={id} className="flex flex-col items-center gap-2">
                <img src={img} alt={name} className="md:w-24 w-16" />
                <span className="text-sm text-center">{name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Clients;
