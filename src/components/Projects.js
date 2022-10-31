
import { useState, useEffect, React} from 'react';
import {data} from "../data/data.js";

import '../css/Projects.css'

function Projects() {

    return (
        <div name='projects'>
            <div><h1>Projects</h1></div>
            {
                data.map((item, index) =>(
                    <div key={item.id}>
                        <div>
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

                        <div>
                            {item.github}
                        </div>

                        <div>
                            {item.demo}
                        </div>

                        <div className='projects_image'>
                            <img src={item.image} alt={item.name} />
                        </div>
                    </div>
                ))
            }

        </div>
    );
}

export default Projects;