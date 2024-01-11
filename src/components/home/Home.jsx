import React ,{useEffect}from 'react'
import Hero from "./hero/Hero"
import About from '../about/About'
import Service from '../services/Services'
import Counter from './counter/Counter'

import Portfolio from '../portfolioBC/Portfolio'
import Overview from '../about/overview'
import Testimonials from '../Testimonials/Testimonials'
import ImageSlider from '../ImageSlider/ImageSlider'
const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
  <div>

   <Hero />
   <Service/>
   <ImageSlider/>

   < Overview/>
   <Portfolio/>
   <Counter/>
  </div>
  )
}

export default Home
