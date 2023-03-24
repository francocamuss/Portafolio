import React from "react";
import "./AboutMe.css";
import photo from "../../fotoPerfil.jpeg";
import CV from "../../images/Curriculum Vitae Franco Camus.pdf";

const AboutMe = function(){
    return(
        <div className="aboutMe-div" id="AboutMe">
            <div className="aboutMe-subDiv-2">
                <div>
                    <img src={photo} className="photo" alt="perfil"/>
                </div>
            </div>
            <div className="aboutMe-subDiv-1">
                <h3>Hola, soy Franco</h3>
                <h1>FULL STACK DEVELOPER</h1>
                <p>¡Bienvenido a mi portafolio web! Mi objetivo es mostrarte una variedad de trabajos que he realizado como programador web además de informacion sobre mi. Mis habilidades incluyen el diseño de sitios web, el desarrollo de aplicaciones móviles, la integración de APIs y la optimización de motores de búsqueda. Espero que este portafolio te ayude a comprender la amplia gama de servicios que ofrezco como programador web y te dé la confianza para contactarme para tus proyectos futuros. ¡Gracias por la visita!</p>
                <a download='' href={CV} className="a-download">
                    <button>DESCARGAR CV</button>
                </a>
            </div>
        </div>
    )
}

export default AboutMe;