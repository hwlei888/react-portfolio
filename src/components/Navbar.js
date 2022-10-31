
import { useState, useEffect, React} from 'react';
import { Link } from "react-scroll";

import '../css/Navbar.css'

function Navbar() {

    return (
        <nav className="nav" id="navbar">
        <div className="nav-content">
          <ul className="nav-items">
            <li className="nav-item">
                <Link to='home' className="nav-link" spy={true} smooth={true} duration={800}>
                    Home
                </Link>
            </li>

            <li className="nav-item">
                <Link to='about' className="nav-link" spy={true} smooth={true} duration={800}>
                    About
                </Link>
            </li>

            <li className="nav-item">
                <Link to='projects' className="nav-link" spy={true} smooth={true} duration={800}>
                    Projects
                </Link>
            </li>

            <li className="nav-item">
                <Link to='skills' className="nav-link" spy={true} smooth={true} duration={800}>
                    Skills
                </Link>
            </li>

            <li className="nav-item">
                <Link to='contact' className="nav-link" spy={true} smooth={true} duration={800}>
                    Contact
                </Link>
            </li>

          </ul>
        </div>
      </nav>
    );
}

export default Navbar;

