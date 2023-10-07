
import { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";



const Navbar = () => {
    const [color,setColor]=useState(false)
    const chnageColor=()=>{
      if(window.scrollY >=100){
        setColor(true)
      }  else{
        setColor(false);
      }
    }
    window.addEventListener("scroll",chnageColor)
 
  return (
    <div className={color ?"header headr-bg":"header"}>
      <Link to="/">
        <h1>Portflio</h1>
      </Link>
      <ul className="nav-menu">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/project">Project</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
        <Link to="/conatct"  >Contact</Link>
        </li>
      </ul>
      
    </div>
  );
};

export default Navbar;
