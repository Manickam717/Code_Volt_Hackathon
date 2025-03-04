import React from 'react'
import { Link } from 'react-router-dom'
import Hero from '../componenets/herosection'
import Feature from '../componenets/featuresection'
import Chargen from '../componenets/charginexperiancesection'
import Evlink from '../componenets/evlinkappsection'
import Evvalues from '../componenets/evvaluesection'
import Multilingual from '../componenets/multilingualsection'
import FutureOfMobility from '../componenets/futureofmobilitysection'
import WhyChooseEV from '../componenets/whychooseevsection'
import CustomerTestimonial from '../componenets/customertestimonial'
import Footer from '../componenets/footer'
import LatestNewsSection from '../componenets/latestnewsection'
import FlowerShower from '../componenets/FLowerShower'


function Home() {
  return (
    <div className="h-screen overflow-y-auto">
      <FlowerShower />
      <Hero />
      <div className="flex justify-center mt-4">
        <Link to="/signup" className="px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors duration-200">
          Sign Up
        </Link>
      </div>
      <Chargen />
      <Evvalues />
      <Multilingual />
      <FutureOfMobility />
      <WhyChooseEV />
      <CustomerTestimonial />
      <LatestNewsSection />

      <Evlink />
      <Footer />
    </div>
  );
}

export default Home