
import { useState, useEffect, React} from 'react';
import '../css/Skills.css'



function Skills() {

    return (
        <div className='skills'>
            <div className="skill-container">
                <div className='skill-title'><h1>Skills</h1></div>

                <div className='skill-box'>
                    <div className='javascript'>
                        <img src={process.env.PUBLIC_URL + "/javascript.png"} alt="JS logo" />
                        <p>JavaScript</p>
                    </div>

                    <div>
                        <img src={process.env.PUBLIC_URL + "/ruby.jpeg"} alt="Ruby logo" />
                        <p>Ruby on Rails</p>
                    </div>

                    <div>
                        <img src={process.env.PUBLIC_URL + "/python.png"} alt="Python logo" />
                        <p>Python</p>
                    </div>

                    <div>
                        <img src={process.env.PUBLIC_URL + "/c.png"} alt="C logo" />
                        <p>C</p>
                    </div>

                    <div>
                        <img src={process.env.PUBLIC_URL + "/react.png"} alt="React logo" />
                        <p>React</p>
                    </div>

                    <div>
                        <img src={process.env.PUBLIC_URL + "/vue.png"} alt="Vue logo" />
                        <p>Vue</p>
                    </div>

                    <div>
                        <img src={process.env.PUBLIC_URL + "/nodejs.png"} alt="Node JS logo" />
                        <p>Node JS</p>
                    </div>

                    <div>
                        <img src={process.env.PUBLIC_URL + "/mongodb.jpeg"} alt="Mongo DB logo" />
                        <p>Mongo DB</p>
                    </div>

                    <div>
                        <img src={process.env.PUBLIC_URL + "/sql.png"} alt="SQL logo" />
                        <p>SQL</p>
                    </div>

                    <div>
                        <img src={process.env.PUBLIC_URL + "/postgresql.png"} alt="PostgreSQL logo" />
                        <p>PostgreSQL</p>
                    </div>

                    <div className='html'>
                        <img src={process.env.PUBLIC_URL + "/html.png"} alt="HTML logo" />
                        <p>HTML</p>
                    </div>

                    <div>
                        <img src={process.env.PUBLIC_URL + "/css.png"} alt="CSS logo" />
                        <p>CSS</p>
                    </div>

                    <div>
                        <img src={process.env.PUBLIC_URL + "/jquery.png"} alt="jQuery logo" />
                        <p>jQuery</p>
                    </div>

                    <div>
                        <img src={process.env.PUBLIC_URL + "/bootstrap.png"} alt="Bootstrap logo" />
                        <p>Bootstrap</p>
                    </div>
                    
                    <div>
                        <img src={process.env.PUBLIC_URL + "/github.png"} alt="Github logo" />
                        <p>Github</p>
                    </div>

                    <div>
                        <img src={process.env.PUBLIC_URL + "/sonicpi.png"} alt="Sonic Pi logo" />
                        <p>Sonic Pi</p>
                    </div>

                    <div>
                        <img src={process.env.PUBLIC_URL + "/matlab.png"} alt="Matlab logo" />
                        <p>Matlab</p>
                    </div>

                    <div>
                        <img src={process.env.PUBLIC_URL + "/altiumDesigner.png"} alt="Altium Designer logo" />
                        <p>Altium Designer</p>
                    </div>

                    <div>
                        <img src={process.env.PUBLIC_URL + "/ltspice.png"} alt="LTspice logo" />
                        <p>LTspice</p>
                    </div>

                </div>
            </div>

        </div>
    );
}

export default Skills;

