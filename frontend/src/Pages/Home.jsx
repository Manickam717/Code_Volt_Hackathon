import React from 'react';
import { Link, Element } from 'react-scroll';
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
  return (
    <div className="h-screen overflow-y-auto">
      <FlowerShower />
      <Hero />
      <Element name="chargingExperience" className="element">
        <Chargen />
      </Element>
      <Element name="evValues" className="element">
        <Evvalues />
      </Element>
      <Element name="multilingual" className="element">
        <Multilingual />
      </Element>
      <Element name="futureOfMobility" className="element">
        <FutureOfMobility />
      </Element>
      <Element name="whyChooseEV" className="element">
        <WhyChooseEV />
      </Element>
      <Element name="customerTestimonial" className="element">
        <CustomerTestimonial />
      </Element>
      <Element name="latestNews" className="element">
        <LatestNewsSection />
      </Element>
      <Element name="evLink" className="element">
        <Evlink />
      </Element>
      <Footer />
    </div>
  );
}

export default Home;