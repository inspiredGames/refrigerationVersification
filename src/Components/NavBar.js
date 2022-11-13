import { NavLink } from "react-router-dom";
import logo from "../assets/logo.jpeg";

const NavBar = () => {
  return (
    <nav>
      <div className="logo">
        <NavLink to="/">
          <img src={logo} alt="logo" />
        </NavLink>
      </div>
      <div className="navContainer">
        <ul>
          <li className="Home">
            <NavLink to="/">Home</NavLink>
          </li>
          <li className="about">
            <NavLink to="/about">About</NavLink>
          </li>
          <li className="Gallery">
            <NavLink to="/gallery">Gallery</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;