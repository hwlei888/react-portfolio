
import { useState, useEffect, React} from 'react';
// import {HashRouter as Router, Route, Routes} from 'react-router-dom';
import { Link, animateScroll as scroll } from "react-scroll";


import Home from './Home';
import About from './About';
import Projects from './Projects';
import Skills from './Skills';
import Contact from './Contact';
import Navbar from './Navbar';

// const AppContext = React.createContext();
import '../css/Main.css'


function Main() {

    return (
        <div>

            {/* <Router>
                <nav>

                </nav>
            </Router> */}
            <Navbar />

            <div className='profile-body'>
                <Home />
                <About />
                <Projects />
                <Skills />
                <Contact />
            </div>

        </div>
    );
}

export default Main;


