
import React from 'react';

interface CollectionProps {
  title: string;
  image: string;
  color: string;
  textColor: string;
}

const collections: CollectionProps[] = [
  {
    title: "Gifts for Her",
    image: "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?q=80&w=2040&auto=format&fit=crop",
    color: "bg-pink-100",
    textColor: "text-pink-600"
  },
  {
    title: "Gifts for Him",
    image: "https://images.unsplash.com/photo-1456327102063-fb5054efe647?q=80&w=2070&auto=format&fit=crop",
    color: "bg-blue-900",
    textColor: "text-blue-50"
  },
  {
    title: "Baby Gift Boxes",
    image: "https://images.unsplash.com/photo-1616797154468-539969d133a4?q=80&w=1974&auto=format&fit=crop",
    color: "bg-blue-100",
    textColor: "text-blue-600"
  },
  {
    title: "Anniversary Gifts",
    image: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?q=80&w=1887&auto=format&fit=crop",
    color: "bg-pink-100",
    textColor: "text-pink-600"
  }
];

const Collections = () => {
  return (
    <section className="py-16 px-4">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-serif text-center mb-10">
          Gifting Made Personal
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {collections.map((collection, index) => (
            <div key={index} className="collection-card aspect-square">
              <img 
                src={collection.image} 
                alt={collection.title} 
                className="w-full h-full object-cover"
              />
              <div className="collection-overlay">
                <div className="text-center">
                  <span className={`${collection.color} ${collection.textColor} px-6 py-3 rounded-md font-medium`}>
                    {collection.title}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Collections;
