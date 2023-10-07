import "./Footer.css"
import React from 'react'
import {FaHome, FaPhone,FaMailBulk, FaFacebook, FaTwitter, FaLinkedin} from "react-icons/fa"

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
            <div className="left">
                <div className="location">
                    <FaHome size={20} style={{color:"#fff",marginRight:"2rem"}}/>
                 
                     <p>1 Shree bhavani Residency</p>
                        <p>India</p>
                    
                </div>
                
                
                <div className="phone">
                <h4><FaPhone size={20} style={{color:"#fff",marginRight:"2rem"}}/>
                9552470692</h4>
                </div>
                <div className="email">
                <h4><FaMailBulk size={20} style={{color:"#fff",marginRight:"2rem"}}/>
                pavanghuge2@gmail.com</h4>
                </div>
            </div>
            <div className="right">
                <h4>About the Company</h4>
                <p>I enjoy the designing new projects</p>
                <div className="social">
                <FaFacebook size={20} style={{color:"#fff",marginRight:"2rem"}}/>
                <FaTwitter size={20} style={{color:"#fff",marginRight:"2rem"}}/>
                <FaLinkedin size={20} style={{color:"#fff",marginRight:"2rem"}}/>
                
                 
                
                </div>
            </div>

        </div>
    </div>
  )
}

export default Footer