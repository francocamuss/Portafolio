import React from "react";
import "./Resume.css";

const Resume = function(){
    return(
        <div className="resume-div">
            <div className="resume-curriculum">
                <div className="cuadrado-resume"></div>
                <h2>Curriculum</h2>
            </div>
            <div className="experiencia-div">
                <h3>Experiencia</h3>
                <a download={""}>
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
                    <p>oct. 2022 - nov. 2022</p>
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
                        Programador Fullstack para Proyecto grupal Henry Bienes Raices, el cual consistió en crear un E-COMMERCE, desarrollando distintas funcionalidades.
                    </p>
                    <a target="_blank" className="a-button"><button className="button-proyecto">VER PROYECTO</button></a>
                </div>
            </div>
            <br></br>
            <div className="experiencia-div">
                <h3>Educacion</h3>
                <p>universitaria</p>
            </div>
            <div className="div-card-resume">
                <div className="div1-resume">
                    <h3 className="text-resume">UNIVERISTARIA</h3>
                    <p>Ingenieria Biomedica</p>
                    <p>2018 - 2022</p>
                    <p>Tecer año (en proceso)</p>
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
                        <p>Proactivo</p>
                    </div>
                    <div className="habilidad">
                        <div className="cubito"></div>
                        <p>Empatia y sociable</p>
                    </div>
                    <div className="habilidad">
                        <div className="cubito"></div>
                        <p>Perseverancia y dedicacion</p>
                    </div>
                </div>
                </div>
            </div>
            <br></br>
        </div>
    )
}

export default Resume;