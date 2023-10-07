import React from 'react'
import './Heroimg.css'
import Introimg from "./Assets/d.png"
import { Link } from 'react-router-dom'


const Heroimg = () => {
  return (
    <div className='hero'>
        <div className='mask'>
            <img className='into-img' src={Introimg} alt='Intro'></img>

        </div>
        <div className='content'>
            <p>HI, I'M A FREELANCER</p>
            <h1>React Developer</h1>
            <div>
              <Link to="/project" className='btn' >Projects</Link> 
              <Link to="/conatct" className='btn btn-light' >Contact</Link>
            </div>
     </div>
    </div>
  )
}

export default Heroimg