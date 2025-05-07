
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-darkgrey text-white">
      {/* Newsletter */}
      <div className="border-b border-white/10">
        <div className="container mx-auto py-12 px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl font-serif mb-3">Join Our Newsletter</h3>
            <p className="text-white/70 mb-6">Sign up and get 10% off your first personalised order</p>
            
            <form className="flex flex-col sm:flex-row gap-3">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="flex-grow px-4 py-3 rounded-md bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-royal"
              />
              <button 
                type="submit" 
                className="bg-white text-darkgrey py-3 px-6 rounded-md font-medium hover:bg-white/90 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
      
      {/* Main Footer */}
      <div className="container mx-auto py-12 px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div>
            <div className="text-2xl font-serif font-medium mb-6">
              heartfelt
            </div>
            <p className="text-white/70 mb-6">
              Crafting personalised gifts that tell your unique story since 2015.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-white/70 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                </svg>
              </a>
              <a href="#" className="text-white hover:text-white/70 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
              <a href="#" className="text-white hover:text-white/70 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="12" x2="12" y1="4" y2="20"></line>
                  <line x1="4" x2="20" y1="12" y2="12"></line>
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-medium text-lg mb-4">Shop</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-white/70 hover:text-white transition-colors">Engraved Mugs</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors">Baby Gift Sets</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors">Anniversary Gifts</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors">Lunch Boxes</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors">Personalised Pens</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium text-lg mb-4">Information</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-white/70 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors">How It Works</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors">Shipping & Returns</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors">FAQs</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors">Contact Us</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium text-lg mb-4">Trust & Security</h4>
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white/70">
                  <path d="m22 11-1.33-1.33L19 11l1.33 1.33L22 11Z"></path>
                  <path d="M18 10.01V10"></path>
                  <path d="M18 14v-.01"></path>
                  <path d="m7 11-1.33-1.33L4 11l1.33 1.33L7 11Z"></path>
                  <path d="M3 10.01V10"></path>
                  <path d="M3 14v-.01"></path>
                  <path d="m12 5-1.33-1.33L9 5l1.33 1.33L12 5Z"></path>
                  <path d="M8 4.01V4"></path>
                  <path d="M8 8v-.01"></path>
                  <path d="m12 19-1.33-1.33L9 19l1.33 1.33L12 19Z"></path>
                  <path d="M8 18.01V18"></path>
                  <path d="M8 22v-.01"></path>
                  <path d="m17 5-1.33-1.33L14 5l1.33 1.33L17 5Z"></path>
                  <path d="M13 4.01V4"></path>
                  <path d="M13 8v-.01"></path>
                  <path d="m17 19-1.33-1.33L14 19l1.33 1.33L17 19Z"></path>
                  <path d="M13 18.01V18"></path>
                  <path d="M13 22v-.01"></path>
                </svg>
                <span className="text-white/70">Secure Checkout</span>
              </div>
              
              <div className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white/70">
                  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
                <span className="text-white/70">UK-Based Business</span>
              </div>
              
              <div className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white/70">
                  <path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6a2 2 0 0 0 0 3.64l8.57 3.81a2 2 0 0 0 1.66 0L21.4 9.64a2 2 0 0 0 0-3.64Z"></path>
                  <path d="m22 13-9 4-9-4"></path>
                  <path d="M21 16 12 20l-9-4"></path>
                </svg>
                <span className="text-white/70">Handcrafted Quality</span>
              </div>
              
              <div className="flex flex-wrap gap-2 mt-6">
                <img src="https://cdn.worldvectorlogo.com/logos/visa-10.svg" alt="Visa" className="h-6 bg-white/10 p-1 rounded" />
                <img src="https://cdn.worldvectorlogo.com/logos/mastercard-2.svg" alt="MasterCard" className="h-6 bg-white/10 p-1 rounded" />
                <img src="https://cdn.worldvectorlogo.com/logos/paypal-4.svg" alt="PayPal" className="h-6 bg-white/10 p-1 rounded" />
                <img src="https://cdn.worldvectorlogo.com/logos/apple-pay.svg" alt="Apple Pay" className="h-6 bg-white/10 p-1 rounded" />
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-6 border-t border-white/10 text-center text-white/50 text-sm">
          <p>© {new Date().getFullYear()} Heartfelt Gifting Studio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
