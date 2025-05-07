
import React, { useState, useEffect } from 'react';

interface TestimonialProps {
  id: number;
  name: string;
  initials: string;
  rating: number;
  text: string;
  image?: string;
}

const testimonials: TestimonialProps[] = [
  {
    id: 1,
    name: "Sarah L.",
    initials: "SL",
    rating: 5,
    text: "The personalised baby memory box I ordered was absolutely beautiful. The quality exceeded my expectations and it arrived so quickly!",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1976&auto=format&fit=crop"
  },
  {
    id: 2,
    name: "James P.",
    initials: "JP",
    rating: 5,
    text: "I was looking for something special for my wife's anniversary. The engraved photo frame was perfect, and she absolutely loved it.",
  },
  {
    id: 3,
    name: "Emma T.",
    initials: "ET",
    rating: 5,
    text: "Ordered a personalised mug for my dad's birthday. The engraving was flawless, and the customer service was exceptional.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop"
  },
  {
    id: 4,
    name: "Michael R.",
    initials: "MR",
    rating: 4,
    text: "The lunchbox I ordered for my son was high quality and the personalization came out great. Would definitely order again.",
  },
  {
    id: 5,
    name: "Rebecca H.",
    initials: "RH",
    rating: 5,
    text: "Absolutely in love with the personalised baby gift box I ordered. It's become such a special keepsake for us.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop"
  }
];

const RatingStars = ({ rating }: { rating: number }) => {
  return (
    <div className="star-rating">
      {[...Array(5)].map((_, index) => (
        <span key={index} className={index < rating ? "text-yellow-400" : "text-gray-300"}>
          ★
        </span>
      ))}
    </div>
  );
};

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % Math.ceil(testimonials.length / 3));
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-16 px-4">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-serif text-center mb-10">
          What Our Customers Say
        </h2>
        
        <div className="hidden lg:grid grid-cols-3 gap-6">
          {testimonials.slice(0, 3).map((testimonial) => (
            <div key={testimonial.id} className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <RatingStars rating={testimonial.rating} />
              <p className="my-4 text-gray-600 line-clamp-3">"{testimonial.text}"</p>
              <div className="flex items-center">
                {testimonial.image ? (
                  <img 
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                ) : (
                  <div className="w-10 h-10 rounded-full bg-beige flex items-center justify-center">
                    <span className="text-darkgrey font-medium">{testimonial.initials}</span>
                  </div>
                )}
                <span className="ml-3 font-medium">{testimonial.name}</span>
              </div>
            </div>
          ))}
        </div>
        
        {/* Mobile Testimonial Slider */}
        <div className="lg:hidden">
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <RatingStars rating={testimonials[currentIndex % testimonials.length].rating} />
            <p className="my-4 text-gray-600">"{testimonials[currentIndex % testimonials.length].text}"</p>
            <div className="flex items-center">
              {testimonials[currentIndex % testimonials.length].image ? (
                <img 
                  src={testimonials[currentIndex % testimonials.length].image}
                  alt={testimonials[currentIndex % testimonials.length].name}
                  className="w-10 h-10 rounded-full object-cover"
                />
              ) : (
                <div className="w-10 h-10 rounded-full bg-beige flex items-center justify-center">
                  <span className="text-darkgrey font-medium">{testimonials[currentIndex % testimonials.length].initials}</span>
                </div>
              )}
              <span className="ml-3 font-medium">{testimonials[currentIndex % testimonials.length].name}</span>
            </div>
            
            <div className="mt-6 flex justify-center gap-2">
              {[...Array(testimonials.length)].map((_, index) => (
                <button
                  key={index}
                  className={`w-2 h-2 rounded-full ${currentIndex % testimonials.length === index ? 'bg-royal' : 'bg-gray-300'}`}
                  onClick={() => setCurrentIndex(index)}
                />
              ))}
            </div>
          </div>
        </div>
        
        <div className="text-center mt-8">
          <a href="#" className="text-royal hover:underline font-medium">
            See All Reviews
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
