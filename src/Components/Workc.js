import React from 'react'
import "./Workcard.css"

import { NavLink } from 'react-router-dom'


const Workc = (props) => {
  return (
    <div className='project-card'>
        <img src={props.imgsrc} alt='img'/>
        <h2 className='project-title'>{props.title}</h2>
        <div className='pro-details'>{props.text}</div>
        <div className='pro-btn'>
            <NavLink to={props.view} className="btn">View</NavLink>
            <NavLink to="url.com" className="btn">Source</NavLink>
        </div>

        </div>
  )
}

export default Workc