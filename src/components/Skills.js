
import { useState, useEffect, React} from 'react';
import '../css/Skills.css'



function Skills() {

    return (
        <div className='skills'>
            <div className="skill-container">
                <div className='skill-title'><h1>Skills</h1></div>

                <div className='skill-box'>
                    <div className='javascript'>
                        <img src="./javascript.png" alt="JS logo" />
                        <p>JavaScript</p>
                    </div>

                    <div>
                        <img src="./ruby.jpeg" alt="Ruby logo" />
                        <p>Ruby on Rails</p>
                    </div>

                    <div>
                        <img src="./python.png" alt="Python logo" />
                        <p>Python</p>
                    </div>

                    <div>
                        <img src="./c.png" alt="C logo" />
                        <p>C</p>
                    </div>

                    <div>
                        <img src="./react.png" alt="React logo" />
                        <p>React</p>
                    </div>

                    <div>
                        <img src="./vue.png" alt="Vue logo" />
                        <p>Vue</p>
                    </div>

                    <div>
                        <img src="./nodejs.png" alt="Node JS logo" />
                        <p>Node JS</p>
                    </div>

                    <div>
                        <img src="./mongodb.jpeg" alt="Mongo DB logo" />
                        <p>Mongo DB</p>
                    </div>

                    <div>
                        <img src="./sql.png" alt="SQL logo" />
                        <p>SQL</p>
                    </div>

                    <div>
                        <img src="./postgresql.png" alt="PostgreSQL logo" />
                        <p>PostgreSQL</p>
                    </div>

                    <div className='html'>
                        <img src="./html.png" alt="HTML logo" />
                        <p>HTML</p>
                    </div>

                    <div>
                        <img src="./css.png" alt="CSS logo" />
                        <p>CSS</p>
                    </div>

                    <div>
                        <img src="./jquery.png" alt="jQuery logo" />
                        <p>jQuery</p>
                    </div>

                    <div>
                        <img src="./bootstrap.png" alt="Bootstrap logo" />
                        <p>Bootstrap</p>
                    </div>
                    
                    <div>
                        <img src="./github.png" alt="Github logo" />
                        <p>Github</p>
                    </div>

                    <div>
                        <img src="./sonicpi.png" alt="Sonic Pi logo" />
                        <p>Sonic Pi</p>
                    </div>

                    <div>
                        <img src="./matlab.png" alt="Matlab logo" />
                        <p>Matlab</p>
                    </div>

                    <div>
                        <img src="./altiumDesigner.png" alt="Altium Designer logo" />
                        <p>Altium Designer</p>
                    </div>

                    <div>
                        <img src="./ltspice.png" alt="LTspice logo" />
                        <p>LTspice</p>
                    </div>

                </div>
            </div>

        </div>
    );
}

export default Skills;

