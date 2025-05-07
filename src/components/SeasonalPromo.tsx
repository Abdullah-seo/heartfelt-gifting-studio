
import React from 'react';

interface FathersGiftProps {
  id: number;
  name: string;
  image: string;
  price: string;
  badge?: string;
}

const fathersGifts: FathersGiftProps[] = [
  {
    id: 1,
    name: "Dad's Custom Tool Box",
    image: "https://images.unsplash.com/photo-1581345331882-0066df55b35d?q=80&w=1887&auto=format&fit=crop",
    price: "£42.99",
    badge: "Best Seller"
  },
  {
    id: 2,
    name: "Personalised Dad Mug",
    image: "https://images.unsplash.com/photo-1577937927133-66a8b7ec9ef0?q=80&w=1964&auto=format&fit=crop",
    price: "£18.99"
  },
  {
    id: 3,
    name: "Engraved Pocket Watch",
    image: "https://images.unsplash.com/photo-1509048191080-d2984bad6ae5?q=80&w=2064&auto=format&fit=crop",
    price: "£49.99",
    badge: "New"
  },
  {
    id: 4,
    name: "Custom Dad Lunchbox",
    image: "https://images.unsplash.com/photo-1623227866882-c005c26dfe41?q=80&w=1770&auto=format&fit=crop",
    price: "£22.99"
  }
];

const SeasonalPromo = () => {
  // Calculate days until Father's Day (third Sunday in June)
  const now = new Date();
  const currentYear = now.getFullYear();
  
  // Find the third Sunday in June
  const fathersDay = new Date(currentYear, 5, 1); // June 1st
  while (fathersDay.getDay() !== 0) { // Find first Sunday
    fathersDay.setDate(fathersDay.getDate() + 1);
  }
  fathersDay.setDate(fathersDay.getDate() + 14); // Add 2 weeks for third Sunday
  
  // Calculate days difference
  const daysUntil = Math.ceil((fathersDay.getTime() - now.getTime()) / (1000 * 60 * 60 * 24));
  const daysToShow = daysUntil > 0 && daysUntil <= 14 ? daysUntil : 5; // Default to 5 if not close to Father's Day

  return (
    <section className="py-16 px-4 bg-gradient-to-r from-blue-50 to-blue-100">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <span className="inline-block bg-royal text-white px-4 py-1 text-sm rounded-full mb-4">
            Father's Day Collection
          </span>
          <h2 className="text-3xl md:text-4xl font-serif mb-4">
            Show Dad How Much He Means
          </h2>
          <div className="bg-white inline-block px-6 py-3 rounded-full shadow-sm">
            <p className="text-darkgrey font-medium">
              Order in the next <span className="text-royal">{daysToShow} days</span> for on-time delivery
            </p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {fathersGifts.map((gift) => (
            <div key={gift.id} className="product-card relative">
              {gift.badge && (
                <span className="absolute top-4 right-4 bg-royal text-white text-xs px-3 py-1 rounded-full">
                  {gift.badge}
                </span>
              )}
              <div className="h-[280px] overflow-hidden">
                <img 
                  src={gift.image} 
                  alt={gift.name} 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-4">
                <h3 className="font-medium mb-2">{gift.name}</h3>
                <div className="flex justify-between items-center mb-3">
                  <span className="text-royal-light">Father's Day Pick</span>
                  <span className="font-medium">{gift.price}</span>
                </div>
                <button className="w-full py-2 border border-royal text-royal hover:bg-royal hover:text-white transition-colors rounded flex items-center justify-center gap-2">
                  <span className="text-sm">🎁 Personalise</span>
                </button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-8">
          <a href="#" className="button-primary inline-block">
            View All Father's Day Gifts
          </a>
        </div>
      </div>
    </section>
  );
};

export default SeasonalPromo;
