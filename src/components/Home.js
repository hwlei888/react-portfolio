
import { useState, useEffect, React} from 'react';
import { Icon } from '@iconify/react';

import '../css/Home.css'


function Home() {

    return (
        <div className='home'>
            <div className='home-container'>
                <div className='firstLine'>
                    <p>Hi There!</p>
                </div>

                <div className='secondLine'>
                    <p>I'M Huawen Lei</p>
                </div>

                <div className='thirdLine'>
                    <p>
                        I am a Melbourne-based software developer with a background in Telecommunication and Electronics engineering.
                    </p>
                </div>

                <div className='forthLine'>
                    <p>
                        Get in Touch
                    </p>
                </div>

                <div className='fifthLine'>
                    <p>
                        Whether you want to get in touch, or talk about a project collaboration.
                    </p>
                    <p>
                        <strong>Feel free to connect with me</strong>
                    </p>
                </div>

                <div className="sixthLine">
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

        </div>
    );
}

export default Home;