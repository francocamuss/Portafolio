import React from "react";
import "./Skills.css";
import { BiCheck } from "react-icons/bi";

const Resume = function(){
    return(
        <div className="resume-div" id="Resume">
            <div className="cuadrado-skills">
            </div>
            <div className="resume-subdiv-2">
                <div className="card-habilitie">
                    <h3>Backend Developer</h3>
                    <div className="habilidad">
                        <BiCheck color="#FB2576" size="30px"/>
                        <p>SQL (Postgres)</p>
                    </div>
                    <div className="habilidad">
                        <BiCheck color="#FB2576" size="30px"/>
                        <p>Sequelize</p>
                    </div>
                    <div className="habilidad">
                        <BiCheck color="#FB2576" size="30px"/>
                        <p>Express JS</p>
                    </div>
                    <div className="habilidad">
                        <BiCheck color="#FB2576" size="30px"/>
                        <p>Node JS</p>
                    </div>
                    <div className="habilidad">
                        <BiCheck color="#FB2576" size="30px"/>
                        <p>NPM</p>
                    </div>
                    {/* <div className="habilidad">
                        <BiCheck color="#FB2576" size="30px"/>
                        <p>Deploy en Railway</p>
                    </div> */}
                    
                </div>
                <div className="card-habilitie-2">
                    <h3>Frontend Developer</h3>
                    <div className="habilidad">
                        <BiCheck color="#FB2576" size="30px"/>
                        <p>Javascript</p>
                    </div>
                    <div className="habilidad">
                        <BiCheck color="#FB2576" size="30px"/>
                        <p>React JS</p>
                    </div>
                    <div className="habilidad">
                        <BiCheck color="#FB2576" size="30px"/>
                        <p>Redux</p>
                    </div>
                    <div className="habilidad">
                        <BiCheck color="#FB2576" size="30px"/>
                        <p>HTML</p>
                    </div>
                    <div className="habilidad">
                        <BiCheck color="#FB2576" size="30px"/>
                        <p>CSS</p>
                    </div>
                </div>
                <div className="card-habilitie">
                    {/* <h3>Habilidades blandas</h3> */}
                    <h3>Otras habilidades</h3>
                    <div className="habilidad">
                        <BiCheck color="#FB2576" size="30px"/>
                        {/* <p>Empatia y sociabilidad</p> */}
                        <p>Next JS</p>
                    </div>
                    <div className="habilidad">
                        <BiCheck color="#FB2576" size="30px"/>
                        {/* <p>Trabajo en equipo y colaborativo</p> */}
                        <p>Figma</p>
                    </div>
                    <div className="habilidad">
                        <BiCheck color="#FB2576" size="30px"/>
                        {/* <p>Resolución de problemas</p> */}
                        <p>Wordpress y Elementor</p>
                    </div>
                    <div className="habilidad">
                        <BiCheck color="#FB2576" size="30px"/>
                        {/* <p>Creatividad</p> */}
                        <p>Manejo de Asana</p>
                    </div>
                    <div className="habilidad">
                        <BiCheck color="#FB2576" size="30px"/>
                        {/* <p>Proactividad</p> */}
                        <p>Photoshop (basico)</p>
                    </div>
                    {/* <div className="habilidad">
                        <BiCheck color="#FB2576" size="30px"/>
                        <p>Perseverancia y dedicacion</p>
                    </div> */}
                </div>
            </div>
            {/* <div className="resume-curriculum">
                <div className="cuadrado-resume"></div>
                <h2>Curriculum</h2>
            </div>
            <div className="experiencia-div">
                <h3>Experiencia</h3>
                <a download='' href={CV}>
                    <button className="button1">DESCARGAR CV</button>
                </a>
            </div>
            <div className="div-card-resume">
                <div className="div1-resume">
                    <h3 className="text-resume">HENRY BIENES RAICES</h3>
                    <p>Programador "FULL STACK"</p>
                    <p>oct. 2022 - nov. 2022</p>
                    <p>Proyecto grupal</p>
                </div>
                <div className="div2-resume">
                    <p>
                        Programador Fullstack para Proyecto grupal Henry Bienes Raices, el cual consistió en crear un E-COMMERCE, desarrollando distintas funcionalidades.
                    </p>
                    <a className="a-button" target="_blank" href="https://henrybienesraices.vercel.app/"><button className="button-proyecto">VER PROYECTO</button></a>   
                </div>
            </div>
            <div className="div-card-resume">
                <div className="div1-resume">
                    <h3 className="text-resume">HENRY COUNTRIES</h3>
                    <p>Programador "FULL STACK"</p>
                    <p>sep. 2022 - oct. 2022</p>
                    <p>Proyecto individual</p>
                </div>
                <div className="div2-resume">
                    <p>
                        Programador Fullstack para Proyecto Henry Countries, el cual consistió en crear una SPA, consultando una API y desarrollando distintas funcionalidades.
                    </p>
                    <a className="a-button" target="_blank" href="https://pi-countries-pink-rho.vercel.app/"><button className="button-proyecto">VER PROYECTO</button></a>
                </div>
            </div>
            <div className="div-card-resume">
                <div className="div1-resume">
                    <h3 className="text-resume">HENRY DOGS</h3>
                    <p>Programador "FULL STACK"</p>
                    <p>oct. 2022 - nov. 2022</p>
                    <p>Proyecto individual</p>
                </div>
                <div className="div2-resume">
                    <p>
                         Programador Fullstack para Proyecto Henry Dogs, el cual consistió en crear una SPA, consultando una API y desarrollando distintas funcionalidades.
                    </p>
                    <a target="_blank" className="a-button"><button className="button-proyecto">VER PROYECTO</button></a>
                </div>
            </div>
            <br></br>
            <div className="experiencia-div">
                <h3>Educación</h3>
                <p>universitaria</p>
            </div>
            <div className="div-card-resume">
                <div className="div1-resume">
                    <h3 className="text-resume">UNIVERISTARIA</h3>
                    <p>Ingeniería Biomédica</p>
                    <p>2018 - 2022</p>
                    <p>Tercer año (en proceso)</p>
                </div>
                <div className="div2-resume">
                    <p>
                       Estudiante de la carrera Ingenieria Biomedica en la Facultad de Ciencias Exactas y Tecnologia de la UNT. Con conocimientos avanzados en matematicas, fisca, calculo y algebra.
                    </p>
                </div>
            </div>
            <br></br>
            
            <div className="div-habilidades">
                <h3 className="text-resume">HABILIDADES PROFESIONALES BLANDAS</h3>
                <div className="habilidad-row"> 
                <div>
                    <div className="habilidad">
                        <div className="cubito"></div>
                        <p>Trabajo en equipo y colaborativo</p>
                    </div>
                    <div className="habilidad">
                        <div className="cubito"></div>
                        <p>Resolucion de problemas</p>
                    </div>
                    <div className="habilidad">
                        <div className="cubito"></div>
                        <p>Creatividad</p>
                    </div>
                </div>
                <div>
                    <div className="habilidad">
                        <div className="cubito"></div>
                        <p>Proactividad</p>
                    </div>
                    <div className="habilidad">
                        <div className="cubito"></div>
                        <p>Empatia y sociabilidad</p>
                    </div>
                    <div className="habilidad">
                        <div className="cubito"></div>
                        <p>Perseverancia y dedicacion</p>
                    </div>
                </div>
                </div>
            </div>
            <br></br> */}
        </div>
    )
}

export default Resume;