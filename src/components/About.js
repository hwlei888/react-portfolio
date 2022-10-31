
import { useState, useEffect, React} from 'react';

import '../css/About.css'


function About() {

    return (
        <div className='about'>

            <div className='about-container'>
            
                <div className='about-title'><h1>About Me</h1></div>

                <div className='about-para'>
                    <div>
                    Hi everyone, I am Huawen Lei. I am a Melbourne-based Software Developer with a background in Telecommunication and Electronics Engineering.
                    </div>

                    <div>
                    Having majored and worked in Telecommunication and Electronics for several years, I gradually realize the importance of software.So I start learning Software Engineering skills and finding a related job.
                    </div>

                    <div>
                    I had lots of work experience and projects in software and hardware in Australia. If you need my skills, please get in touch with me.
                    </div>
                </div>

                <div className='about-image'>
                    <img src="/codingGirl.png" alt="profile image" />
                </div>
            </div>

     

        </div>
    );
}

export default About;