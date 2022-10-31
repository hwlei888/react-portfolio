
import { useState, useEffect, React} from 'react';
import {data} from "../data/data.js";
import { Icon } from '@iconify/react';


import '../css/Projects.css'

function Projects() {

    return (
        <div className='projects'>
            <div className="project-container">
                <div className='project-title'><h1>Projects</h1></div>
                {
                    data.map((item, index) =>(
                        <div key={item.id} className='project-card'>
                            <div className='project-para'>
                                <div id='project-name'>
                                    {item.name}
                                </div>

                                <div>
                                    {item.date}
                                </div>

                                <div>
                                    {item.description}
                                </div>

                                <div>
                                    {item.tech}
                                </div>

                                <div className='project-link'>
                                    <a href={item.github} target="_blank">
                                        <Icon className='icon' icon="icon-park-outline:github" />
                                        GitHub
                                    </a>

                                    <a href={item.demo} target="_blank">
                                        <Icon className='icon' icon="akar-icons:link-chain" />
                                        Demo
                                    </a>
                                </div>

                            </div>

                            <div className='project-image'>
                                <a href={item.demo} target="_blank">
                                    <img src={item.image} alt={item.name} />
                                </a>
                            </div>
                        </div>
                    ))
                }
            </div>

        </div>
    );
}

export default Projects;