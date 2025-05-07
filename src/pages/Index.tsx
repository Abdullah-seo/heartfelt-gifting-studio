
import React from 'react';
import Header from '../components/Header';
import HeroSlider from '../components/HeroSlider';
import BestSellers from '../components/BestSellers';
import Collections from '../components/Collections';
import Storytelling from '../components/Storytelling';
import SeasonalPromo from '../components/SeasonalPromo';
import Testimonials from '../components/Testimonials';
import HowItWorks from '../components/HowItWorks';
import InstagramGallery from '../components/InstagramGallery';
import Footer from '../components/Footer';

// This is hidden for SEO purposes
const seoHeadings = (
  <div className="sr-only">
    <h1>Custom Personalised Gifts UK</h1>
    <h2>Engraved Mugs</h2>
    <h2>Personalised Baby Gift Boxes</h2>
    <h2>Anniversary Gifts</h2>
    <h2>Custom Lunch Boxes</h2>
    <h2>Personalised Pens</h2>
  </div>
);

const Index = () => {
  return (
    <div className="min-h-screen">
      {seoHeadings}
      <Header />
      <HeroSlider />
      <BestSellers />
      <Collections />
      <Storytelling />
      <SeasonalPromo />
      <Testimonials />
      <HowItWorks />
      <InstagramGallery />
      <Footer />
    </div>
  );
};

export default Index;
