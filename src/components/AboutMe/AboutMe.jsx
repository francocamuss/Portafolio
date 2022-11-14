import React from "react";
import { Link } from "react-router-dom";
import "./AboutMe.css";
import photo from "../../fotoPerfil.jpeg";

const AboutMe = function(){
    return(
        <div className="aboutMe-div">
            <div className="aboutMe-card">
                <div className="left-div">
                    <img src={photo} className="photo"/>
                    <h2 className="color-about">Franco Camus</h2>
                    <hr color="#3F0071"/>
                    <h3 className="color-about">FULL STACK WEB DEVELOPER</h3>
                    <div className="tecnologias">
                        <img height="30" width="30" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript" />
                        <img height="30" width="30" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" />
                        <img height="30" width="30" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" alt="Redux" />
                        <img height="30" width="30" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" />
                        <img height="30" width="30" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg" alt="NPM" />
                        <img height="30" width="30" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" alt="Express.js" />
                        <img height="30" width="30" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" alt="PostgreSQL" />
                        <img height="30" width="30" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sequelize/sequelize-original.svg" alt="Sequelize" />
                        <img height="30" width="30" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" alt="Git" />
                    </div>
                </div>
                <div className="right-div">
                    <h1>Hola!</h1>
                    <h2>Bienvenido a mi portafolio web</h2>
                    <div className="botones">
                        <Link to="/curriculum"><button className="button1">CURRICULUM</button></Link>
                        <Link to="/proyectos"><button className="button2">PROYECTOS</button></Link>
                    </div>
                    <p>
                        Me considero una persona proactiva, disciplinada, apasionada por todo lo que hace. Me adapto a las circunstancias, me gusta el trabajo en equipo y el liderazgo.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default AboutMe;