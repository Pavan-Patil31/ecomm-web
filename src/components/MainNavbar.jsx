import React from "react";
import logo from "../assets/react.svg";
import { Link } from "react-router-dom";
import { BiToggleLeft, BiToggleRight } from "react-icons/bi";
import { useContext } from "react"
import { ThemeContext } from "../hooks/ThemeContext";



const MainNavbar = () => {

  const {theme, toggleTheme} = useContext(ThemeContext)

  return (

    // <nav className="navbar navbar-expand-lg navbar-light bg-light">
      
    <nav className={`navbar navbar-expand-lg ${theme == 'light' ? 'navbar-light bg-light' : 'navbar-dark bg-secondary'}`}>
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <b><i>FruitSpot</i></b>
          {/* <img src="https://seeklogo.com/images/F/fruits-logo-4E6FCC2A0A-seeklogo.com.png?v=638248487190000000"  alt="navbar"/> */}
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse mr-0"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to="/login" className="nav-link">
                <b>Login</b>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/register" className="nav-link">
                <b>Register</b>
              </Link>
              </li>
              {/* <li className="nav-item">
                <Link to="/home" class="nav-link"></Link>
                home
              </li>
             */}
              <li className="nav-item" style={{fontSize:"30px"}}>
              <button onClick={toggleTheme} className={`${theme == 'light' ? 'customToggleButtonLight' : 'customToggleButtonSecondary'}`}>
                {theme == "light" ? <BiToggleLeft /> : <BiToggleRight />}
              </button>
              </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default MainNavbar;