import React from 'react'
import Intro from '../../components/Intro/Intro'
import About from '../../components/About/About'
import Classes from '../../components/Classes/Classes'
import WhyUs from '../../components/WhyUs/WhyUs'
import JoinUs from '../../components/JoinUs/JoinUs'
import { SlidingCarousel } from '../../components/SlidingCarousel/SlidingCarousel'
import Footer from '../../components/Footer/Footer'

const HomePage = () => {
  return (
    <>
     <Intro />
     <About />
     <Classes />
     <WhyUs />
     <JoinUs />
     <SlidingCarousel />
     <Footer />   
    </>
  )
}

export default HomePage