import "./Aboutc.css"
import react1 from "./Assets/h.png"
import react2 from "./Assets/k.png"


import React from 'react'
import { Link } from "react-router-dom"

const Aboutc = () => {
  return (
    <div className="about">
        <div className="left">
        <h1>Who I am </h1>
        <p>I am a  react front-end developer. i create responsive websites for my client</p>
        <Link to="/contact" className="btn">Contact</Link>
        </div>
        <div className="right">
            <div className="img-container">
                <div className="img-stack top">
                    <img src={react1} className="img" alt="imgae"/>

                </div>
                <div className="img-stack bottom">
                    <img src={react2} className="img" alt="imgae"/>

                </div>

            </div>
        </div>
    </div>
  )
}

export default Aboutc