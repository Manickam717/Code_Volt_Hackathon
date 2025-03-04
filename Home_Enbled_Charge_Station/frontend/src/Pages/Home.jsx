import React, { useEffect } from 'react';
import { Link, Element } from 'react-scroll';
import { useLocation } from 'react-router-dom';
import Hero from '../componenets/herosection';
import Feature from '../componenets/featuresection';
import Chargen from '../componenets/charginexperiancesection';
import Evlink from '../componenets/evlinkappsection';
import Evvalues from '../componenets/evvaluesection';
import Multilingual from '../componenets/multilingualsection';
import FutureOfMobility from '../componenets/futureofmobilitysection';
import WhyChooseEV from '../componenets/whychooseevsection';
import CustomerTestimonial from '../componenets/customertestimonial';
import Footer from '../componenets/footer';
import LatestNewsSection from '../componenets/latestnewsection';
import FlowerShower from '../componenets/FLowerShower';

function Home() {
  const location = useLocation();

  useEffect(() => {
    // Reset scroll position when component mounts
    window.scrollTo(0, 0);

    // Handle hash changes
    const handleHashChange = () => {
      const hash = window.location.hash.slice(1);
      if (hash) {
        const element = document.getElementById(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
          window.scrollBy(0, -headerHeight); // Adjust for fixed header height
        }
      } else {
        window.scrollTo(0, 0);
      }
    };

    // Listen for hash changes
    window.addEventListener('hashchange', handleHashChange);

    // Cleanup
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, [location]);

  return (
    <div className="h-screen overflow-y-auto">
      <FlowerShower />
      <Hero />
      <Element name="chargingExperience" className="element" id="chargingExperience">
        <Chargen />
      </Element>
      <Element name="evValues" className="element" id="evValues">
        <Evvalues />
      </Element>
      <Element name="multilingual" className="element" id="multilingual">
        <Multilingual />
      </Element>
      <Element name="futureOfMobility" className="element" id="futureOfMobility">
        <FutureOfMobility />
      </Element>
      <Element name="whyChooseEV" className="element" id="whyChooseEV">
        <WhyChooseEV />
      </Element>
      <Element name="customerTestimonial" className="element" id="customerTestimonial">
        <CustomerTestimonial />
      </Element>
      <Element name="latestNews" className="element" id="latestNews">
        <LatestNewsSection />
      </Element>
      <Element name="evLink" className="element" id="evLink">
        <Evlink />
      </Element>
      <Footer />
      <button onClick={() => document.getElementById('chargingExperience').scrollIntoView({ behavior: 'smooth' })}>
        Scroll to Charging Experience
      </button>
    </div>
  );
}

export default Home;