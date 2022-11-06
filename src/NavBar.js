import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav>
      <div className="logo">
        <NavLink to="/">
          <h1>Refrigeration Versification</h1>
        </NavLink>
      </div>
      <div className="navContainer">
        <ul>
          <li className="about">
            <NavLink to="/about">About</NavLink>
          </li>
          <li className="Home">
            <NavLink to="/">Home</NavLink>
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