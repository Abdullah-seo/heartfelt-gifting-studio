
import React, { useState, useEffect } from 'react';

interface SlideProps {
  image: string;
  headline: string;
  subheading: string;
  primaryButton: string;
  secondaryButton: string;
  tag?: string;
  bgPosition?: string;
}

const slides: SlideProps[] = [
  {
    image: "https://images.unsplash.com/photo-1545858646-af664c7e8a68?q=80&w=1964&auto=format&fit=crop",
    headline: "Made with Love, Engraved for Life",
    subheading: "Thoughtful gifts that leave lasting impressions",
    primaryButton: "Shop Personalised Gifts",
    secondaryButton: "How It Works",
    tag: "Father's Day Collection – Live Now!",
    bgPosition: "center"
  },
  {
    image: "https://images.unsplash.com/photo-1616660518929-2935f3156367?q=80&w=2063&auto=format&fit=crop",
    headline: "Welcome the Little One with Personalised Joy",
    subheading: "Keepsake gifts made to be treasured forever",
    primaryButton: "Explore Baby Gifts",
    secondaryButton: "Personalise Now",
    bgPosition: "top"
  },
  {
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=1974&auto=format&fit=crop",
    headline: "Leave a Mark with Elegant Personalised Gifts",
    subheading: "Perfect for anniversaries, corporate events & milestones",
    primaryButton: "View Best Sellers",
    secondaryButton: "Get a Quote",
    bgPosition: "center"
  }
];

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [fadeState, setFadeState] = useState("fade-in");

  useEffect(() => {
    const interval = setInterval(() => {
      setFadeState("fade-out");
      
      setTimeout(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
        setFadeState("fade-in");
      }, 500);
    }, 6000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative mt-[108px] md:mt-[116px]">
      <div className={`animate-${fadeState} transition-opacity duration-500`}>
        <div 
          className="hero-slider-item"
          style={{ 
            backgroundImage: `url(${slides[currentSlide].image})`,
            backgroundPosition: slides[currentSlide].bgPosition || 'center'
          }}
        >
          <div className="hero-slider-overlay">
            <div className="max-w-3xl">
              {slides[currentSlide].tag && (
                <span className="inline-block bg-royal text-white px-4 py-1 text-sm rounded-full mb-6 animate-slide-in">
                  {slides[currentSlide].tag}
                </span>
              )}
              <h1 className="text-4xl md:text-5xl lg:text-6xl text-white font-serif font-medium mb-4 animate-slide-in">
                {slides[currentSlide].headline}
              </h1>
              <p className="text-xl md:text-2xl text-white mb-8 animate-slide-in" style={{ animationDelay: '0.1s' }}>
                {slides[currentSlide].subheading}
              </p>
              <div className="flex flex-wrap gap-4 animate-slide-in" style={{ animationDelay: '0.2s' }}>
                <button className="button-primary">
                  {slides[currentSlide].primaryButton}
                </button>
                <button className="button-secondary">
                  {slides[currentSlide].secondaryButton}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Dots Navigation */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full transition-all ${
              currentSlide === index ? 'bg-white w-6' : 'bg-white/50'
            }`}
            onClick={() => setCurrentSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSlider;
