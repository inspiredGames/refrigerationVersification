import { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.jpeg";
import openFridge from "../assets/fridgeOpen.jpg"

const NavBar = () => {
  const [showMenu, setShowMenu] = useState(false);

  if (showMenu) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "unset";
  }

  const handleClick = () => {
    setShowMenu(!showMenu);
  };

  const handleClose = () => {
    setShowMenu(false);
  };

  return (
    <nav>
      <div className="desktopNav">
        <div className="logo">
          <NavLink to="/">
            <img className="closedf" src={logo} alt="logo of closed fridge" />
            <img className="openf" src={openFridge} alt="logo with open fridge" />

          </NavLink>
        </div>
        <div className="navContainer">
          <ul>
            <li className="home">
              <NavLink to="/">Home</NavLink>
            </li>
            <li className="about">
              <NavLink to="/about">About</NavLink>
            </li>
            <li className="gallery">
              <NavLink to="/gallery">Gallery</NavLink>
            </li>
          </ul>
        </div>
      </div>


      {/* hamburger menu */}
      <div className="mobileMenu">
        <div className="hamburger" onClick={handleClick}>
          <i className="fa-sharp fa-solid fa-bars-staggered"></i>
        </div>
        {showMenu && (
          <div className="menu">
            <ul>
              <li className="xIcon" onClick={handleClose}><i className="fas fa-times"></i></li>
              <li className="home" onClick={handleClose}>
                <NavLink to="/">Home</NavLink>
              </li>
              <li className="about" onClick={handleClose}>
                <NavLink to="/about">About</NavLink>
              </li>
              <li className="gallery" onClick={handleClose}>
                <NavLink to="/gallery">Gallery</NavLink>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
}

export default NavBar;
