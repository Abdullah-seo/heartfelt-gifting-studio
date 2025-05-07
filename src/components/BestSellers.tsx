
import React, { useRef } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';

interface ProductProps {
  id: number;
  name: string;
  image: string;
  price: string;
  rating: number;
}

const products: ProductProps[] = [
  {
    id: 1,
    name: "Personalised Wooden Watch Box",
    image: "https://images.unsplash.com/photo-1649429398910-d3f69b24ed42?q=80&w=2070&auto=format&fit=crop",
    price: "£45.99",
    rating: 5
  },
  {
    id: 2,
    name: "Engraved Silver Pen Set",
    image: "https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?q=80&w=2786&auto=format&fit=crop",
    price: "£29.99",
    rating: 4
  },
  {
    id: 3,
    name: "Custom Baby Memory Box",
    image: "https://images.unsplash.com/photo-1619465293792-b11f174b37d4?q=80&w=1780&auto=format&fit=crop",
    price: "£39.99",
    rating: 5
  },
  {
    id: 4,
    name: "Personalised Ceramic Mug",
    image: "https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?q=80&w=2070&auto=format&fit=crop",
    price: "£18.99",
    rating: 4
  },
  {
    id: 5,
    name: "Engraved Anniversary Frame",
    image: "https://images.unsplash.com/photo-1522204657746-fccce0824cfd?q=80&w=2070&auto=format&fit=crop",
    price: "£34.99",
    rating: 5
  },
  {
    id: 6,
    name: "Custom Steel Lunch Box",
    image: "https://images.unsplash.com/photo-1531886468585-86a3b76d82e0?q=80&w=1964&auto=format&fit=crop",
    price: "£24.99",
    rating: 4
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

const BestSellers = () => {
  const sliderRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (sliderRef.current) {
      const scrollAmount = 300;
      const scrollPosition = direction === 'left' 
        ? sliderRef.current.scrollLeft - scrollAmount 
        : sliderRef.current.scrollLeft + scrollAmount;
        
      sliderRef.current.scrollTo({
        left: scrollPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="py-16 px-4 bg-lightgrey">
      <div className="container mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl md:text-4xl font-serif">Best Sellers</h2>
          <div className="flex gap-2">
            <button 
              onClick={() => scroll('left')} 
              className="p-2 rounded-full border border-darkgrey/20 hover:bg-white transition-colors"
              aria-label="Scroll left"
            >
              <ArrowLeft size={20} />
            </button>
            <button 
              onClick={() => scroll('right')} 
              className="p-2 rounded-full border border-darkgrey/20 hover:bg-white transition-colors"
              aria-label="Scroll right"
            >
              <ArrowRight size={20} />
            </button>
          </div>
        </div>
        
        <div 
          ref={sliderRef}
          className="flex gap-6 overflow-x-auto pb-4 scrollbar-none scroll-smooth"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {products.map((product) => (
            <div 
              key={product.id} 
              className="product-card flex-shrink-0 w-[280px]"
            >
              <div className="h-[280px] overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-4">
                <h3 className="font-medium mb-2">{product.name}</h3>
                <div className="flex justify-between items-center mb-3">
                  <RatingStars rating={product.rating} />
                  <span className="font-medium">{product.price}</span>
                </div>
                <button className="w-full py-2 border border-royal text-royal hover:bg-royal hover:text-white transition-colors rounded flex items-center justify-center gap-2">
                  <span className="text-sm">🎁 Personalise</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BestSellers;
