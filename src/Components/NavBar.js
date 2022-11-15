import { NavLink } from "react-router-dom";
import logo from "../assets/logo.jpeg";
import openFridge from '../assets/fridgeOpen.jpg';

const NavBar = () => {
  return (
    <nav>
      <div className="logo">
        <NavLink to="/">
          <img className="closedf"src={logo} alt="logo of closed fridge" />
          {/* <div className="openFridge"> */}
          <img className="openf" src={openFridge} alt="logo with open fridge" />
          {/* </div> */}
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