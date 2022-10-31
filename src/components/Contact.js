
import { useState, useEffect, React} from 'react';
import { Icon } from '@iconify/react';

import '../css/Contact.css'

function Contact() {

    return (
        <div className='contact'>
            <div className="contact-container">
                <div className='contact-title'><h1>Contact</h1></div>

                <div className='contact-link'>
                    <div>
                        <a href="https://www.linkedin.com/in/huawenlei/" target="_blank">
                            <p>
                                <Icon  className='icon' icon="iconoir:linkedin" />
                                Linkedin
                            </p>
                            <p>https://www.linkedin.com/in/huawenlei/</p> 
                        </a>
                    </div>

                    <div>
                        <a href="https://github.com/hwlei888" target="_blank">
                            <p>
                                <Icon  className='icon' icon="icon-park-outline:github" />
                                GitHub
                            </p>
                            <p>https://github.com/hwlei888</p>
                        </a>
                    </div>

                    <div>
                        <a href="" target="_blank">
                            <p>
                                <Icon  className='icon' icon="fontisto:email" />
                                Email
                            </p>
                            <p>leihuawen888@gmail.com</p>
                        </a>
                    </div>

                    <div>
                        <a href="https://drive.google.com/file/d/1QvRHOiSinh_EJioaD_50QZHMndeO6bh6/view?usp=share_link" target="_blank">
                            <p>
                                <Icon  className='icon' icon="pepicons:cv" />
                                Resume
                            </p>
                            
                        </a>
                    </div>
                </div>
                
            </div>

        </div>
    );
}

export default Contact;