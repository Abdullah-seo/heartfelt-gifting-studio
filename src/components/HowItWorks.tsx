
import React from 'react';

const HowItWorks = () => {
  return (
    <section className="py-16 px-4 bg-beige">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-serif text-center mb-12">
          How It Works
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="mb-6 flex justify-center">
              <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center shadow-sm">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-royal">
                  <path d="M20.91 8.84 8.56 2.23a1.93 1.93 0 0 0-1.81 0L3.1 4.13a2.12 2.12 0 0 0-.05 3.69l12.22 6.93a2.51 2.51 0 0 0 2.45 0L21 12.51a2.12 2.12 0 0 0-.09-3.67Z"></path>
                  <path d="m3.09 8.84 12.35-6.61a1.93 1.93 0 0 1 1.81 0l3.65 1.9a2.12 2.12 0 0 1 .1 3.69L8.73 14.75a2.51 2.51 0 0 1-2.45 0L3 12.51a2.12 2.12 0 0 1 .09-3.67Z"></path>
                  <line x1="12" x2="12" y1="22" y2="13"></line>
                  <path d="M20 13.5v3.37a2.06 2.06 0 0 1-1.11 1.83l-6 3a2.06 2.06 0 0 1-1.78 0l-6-3A2.06 2.06 0 0 1 4 16.87V13.5"></path>
                </svg>
              </div>
            </div>
            <h3 className="text-xl font-medium mb-3">Choose Your Gift</h3>
            <p className="text-gray-600">
              Browse our collection of high-quality products perfect for personalisation
            </p>
          </div>
          
          <div className="text-center">
            <div className="mb-6 flex justify-center">
              <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center shadow-sm">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-royal">
                  <path d="M14 3v4a1 1 0 0 0 1 1h4"></path>
                  <path d="M17 21H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7l5 5v11a2 2 0 0 1-2 2Z"></path>
                  <path d="M9 9h1"></path>
                  <path d="M9 13h6"></path>
                  <path d="M9 17h6"></path>
                </svg>
              </div>
            </div>
            <h3 className="text-xl font-medium mb-3">Add Your Message</h3>
            <p className="text-gray-600">
              Personalise with names, dates, or special messages using our easy customisation tool
            </p>
          </div>
          
          <div className="text-center">
            <div className="mb-6 flex justify-center">
              <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center shadow-sm">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-royal">
                  <path d="M4 10h12"></path>
                  <path d="M4 14h9"></path>
                  <path d="M19 6V3c0-.6-.4-1-1-1H6c-.6 0-1 .4-1 1v15c0 .6.4 1 1 1h12c.6 0 1-.4 1-1v-3"></path>
                  <path d="m14 15 3 3 3-3"></path>
                  <path d="M20 18v-8"></path>
                </svg>
              </div>
            </div>
            <h3 className="text-xl font-medium mb-3">Delivered with Love</h3>
            <p className="text-gray-600">
              We carefully craft your personalised gift and deliver it safely to your door
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
