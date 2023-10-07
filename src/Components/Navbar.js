
import "./Navbar.css";
import { Link } from "react-router-dom";



const Navbar = () => {
 
  return (
    <div className="header">
      <Link to="/">
        <h1>Portflio</h1>
      </Link>
      <ul className="nav-menu">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/projects">Project</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Conatct</Link>
        </li>
      </ul>
      
    </div>
  );
};

export default Navbar;
