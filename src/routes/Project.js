import React from 'react'
import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar'
import Hero2 from '../Components/Hero2'
import Work from '../Components/work'

const Project = () => {
  return (
    <div>
      <Navbar/>
      <Hero2 heading="PROJECTS." text="some of my recent works"/>
     <Work/>
      <Footer/>  
     
    </div>
  )
}

export default Project