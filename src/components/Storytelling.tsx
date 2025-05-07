
import React from 'react';

const Storytelling = () => {
  return (
    <section className="py-16 px-4">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <img 
              src="https://images.unsplash.com/photo-1513885535751-8b9238bd345a?q=80&w=2070&auto=format&fit=crop" 
              alt="Personalised gift being wrapped" 
              className="rounded-lg object-cover w-full h-[500px]"
            />
          </div>
          <div className="max-w-lg">
            <h2 className="text-3xl md:text-4xl font-serif mb-6">
              Why Personalised Gifts Matter
            </h2>
            <p className="text-lg mb-8 leading-relaxed text-gray-600">
              In a world of fleeting trends, a thoughtful personalised gift stands the test of time. It's more than just a product—it's a memory made tangible. Each engraving tells a story, each customisation carries meaning that lasts far beyond the moment of giving.
            </p>
            <p className="text-lg mb-8 leading-relaxed text-gray-600">
              We believe in creating treasured keepsakes that celebrate life's special moments, from welcoming new arrivals to commemorating decades of love.
            </p>
            <button className="button-primary">
              Explore Our Mission
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Storytelling;
