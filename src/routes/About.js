import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import Hero2 from '../Components/Hero2'

const About = () => {
  return (
    <div>
        <Navbar/>
        <Hero2 heading="About" text="I am pavan. I am a React developer"/>
        <Footer/>
    </div>
  )
}

export default About