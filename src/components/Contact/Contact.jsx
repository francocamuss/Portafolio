import React from "react"; 
import "./Contact.css";
import gitLogo from "../../images/GitHub-Logo.png";
import linkLogo from "../../images/linkedinLogo.png";
import email from "../../images/IconoEmail.png";

const Contact = function(){
    return(
        <div className="contact-div" id="Contact">
            <h2 className="text-contact">CONTACTO</h2>
            <div className="contact-row">
                <div className="text-contact"> 
                    <a href="mailto:francocamuspp@gmail.com">
                    <img height="50" width="50" src={email} alt="Gmail"/>
                </a>
            </div>
            <div>
                <a target="_blank" href="https://www.linkedin.com/in/franco-santiago-camus-1121261a8/">
                    <img height="150" width="auto" src={linkLogo} alt="gitLogo" />
                </a>
            </div>
            <div>
                <a target="_blank" href="https://github.com/francocamuss">
                    <img height="80" width="auto" src={gitLogo} alt="gitLogo" />
                </a>
            </div>
            <div className="text-contact">
                <h3>Celular:</h3>
                <h3>+54 9 381 524-3787</h3>
            </div>
            </div>
        </div>
    )
}

export default Contact;