import React from "react";
import './Navbar.css';

function Navbar(){
    return(
        <div>
            <header>
        <h2>Vishal Jani</h2>
        <div className="bx bx-menu" id="menu-icon" />
        <ul className="navlist">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#portfolio">Works</a></li>
          <li><a href="#service">Service</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </header>
        </div>
    );
}
export default Navbar;