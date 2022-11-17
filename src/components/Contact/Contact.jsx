import React from "react"; 
import "./Contact.css";
import gitLogo from "../../images/logoGitHubBlanco.png";
import linkLogo from "../../images/linkBlanco.png";
import email from "../../images/logoEmail.png";
import wp from "../../images/logoWP.png";

const Contact = function(){
    return(
        <div className="contact-div" id="Contact">
            <h2 className="text-contact">CONTACTO</h2>
            <div className="contact-row">
                <div className="text-contact">
                    <h3>Enviar un email</h3>
                    <a target="_blank" href="mailto:francocamuspp@gmail.com">
                        <img height="auto" width="120" src={email} alt="Gmail"/>
                    </a>
                </div>
                <div className="text-contact">
                    <h3>Visitar Linkedin</h3>
                    <a target="_blank" href="https://www.linkedin.com/in/franco-santiago-camus-1121261a8/">
                        <img height="120" width="auto" src={linkLogo} alt="linkedin Logo" />
                    </a>
                </div>
                <div className="text-contact div-GITHUB">
                    <h3 className="h3gitHub">Visitar GitHub</h3>
                    <a target="_blank" href="https://github.com/francocamuss">
                        <img height="140" width="auto" src={gitLogo} alt="gitLogo" />
                    </a>
                </div>
                <div className="text-contact div-GITHUB">
                    <h3 className="h3gitHub">Enviar un whatsapp</h3>
                    <a target="_blank" href="https://wa.me/5493815243787?Hola,%20quiero%20saber%20más%20sobre%20tus%20servicios">
                        <img height="auto" width="120" src={wp} alt="whatsapp"/>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Contact;