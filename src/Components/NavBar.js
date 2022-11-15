import { NavLink } from "react-router-dom";
import logo from "../assets/logo.jpeg";

const NavBar = () => {
  return (
    <nav>
      <div className="desktopNav">
          <div className="logo">
        <NavLink to="/">
          <img className="closedf" src={logo} alt="logo of closed fridge" />
          {/* <div className="openFridge"> */}
          <img className="openf" src={openFridge} alt="logo with open fridge" />
          {/* </div> */}
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