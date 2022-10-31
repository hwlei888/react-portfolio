
import { useState, useEffect, React} from 'react';
import { Link } from "react-scroll";
import { Icon } from '@iconify/react';

import '../css/Navbar.css'

function Navbar() {

    return (
        <nav className="nav">
             <div className='nav-container'>

                <div className='nav-name'>
                    <Link to='home' className="nav-link" spy={true} smooth={true} duration={800}>
                        <p>Huawen Lei</p> 
                    </Link>
                </div>

                <div className="nav-content">

                    <div className="nav-item">
                        <Link to='home' className="nav-link" spy={true} smooth={true} duration={800}>
                            <p>Home</p> 
                        </Link>
                    </div>

                    <div className="nav-item">
                        <Link to='about' className="nav-link" spy={true} smooth={true} duration={800}>
                            <p>About</p> 
                        </Link>
                    </div>

                    <div className="nav-item">
                        <Link to='projects' className="nav-link" spy={true} smooth={true} duration={800}>
                            <p>Projects</p> 
                        </Link>
                    </div>

                    <div className="nav-item">
                        <Link to='skills' className="nav-link" spy={true} smooth={true} duration={800}>
                            <p>Skills</p> 
                        </Link>
                    </div>

                    <div className="nav-item">
                        <Link to='contact' className="nav-link" spy={true} smooth={true} duration={800}>
                            <p>Contact</p> 
                        </Link>
                    </div>

                </div>
            

                <div className="nav-content-secondline">
                    <div>
                        <a href="https://www.linkedin.com/in/huawenlei/" target="_blank">
                            <Icon  className='icon' icon="iconoir:linkedin" />
                        </a>
                    </div>
                    
                    <div>
                        <a href="https://github.com/hwlei888" target="_blank">
                            <Icon  className='icon' icon="icon-park-outline:github" />
                        </a>
                    </div>

                    <div>
                        <a href="https://drive.google.com/file/d/1QvRHOiSinh_EJioaD_50QZHMndeO6bh6/view?usp=share_link" target="_blank">
                            <Icon  className='icon' icon="pepicons:cv" />
                        </a>
                    </div>

                </div>
            </div>

        </nav>
    );
}

export default Navbar;

