
import React from 'react';

interface GalleryItemProps {
  image: string;
  alt: string;
}

const galleryItems: GalleryItemProps[] = [
  {
    image: "https://images.unsplash.com/photo-1550617931-e17a7b70dce2?q=80&w=2070&auto=format&fit=crop",
    alt: "Personalised gift being wrapped"
  },
  {
    image: "https://images.unsplash.com/photo-1556012018-50c5c0da73bf?q=80&w=1974&auto=format&fit=crop",
    alt: "Family enjoying personalised gifts"
  },
  {
    image: "https://images.unsplash.com/photo-1612341507550-eabcf9afa1b4?q=80&w=1964&auto=format&fit=crop",
    alt: "Custom engraved product"
  },
  {
    image: "https://images.unsplash.com/photo-1607083206968-13611e3d76db?q=80&w=2115&auto=format&fit=crop",
    alt: "Gift wrapping process"
  },
  {
    image: "https://images.unsplash.com/photo-1513201099705-a9746e1e201f?q=80&w=1974&auto=format&fit=crop",
    alt: "Baby gift set displayed"
  },
  {
    image: "https://images.unsplash.com/photo-1550617931-e17a7b70dce2?q=80&w=2070&auto=format&fit=crop",
    alt: "Personalised anniversary gift"
  }
];

const InstagramGallery = () => {
  return (
    <section className="py-16 px-4">
      <div className="container mx-auto">
        <div className="flex flex-col items-center mb-10">
          <h2 className="text-3xl md:text-4xl font-serif text-center mb-3">
            Your Gift Story in Pictures
          </h2>
          <span className="text-lg font-medium text-royal">#YourGiftStory</span>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {galleryItems.map((item, index) => (
            <div key={index} className="aspect-square overflow-hidden rounded-lg relative group">
              <img 
                src={item.image} 
                alt={item.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                </svg>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-8">
          <a href="#" className="button-secondary inline-block">
            Tag Us On Instagram
          </a>
        </div>
      </div>
    </section>
  );
};

export default InstagramGallery;
