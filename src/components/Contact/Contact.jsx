import React from "react"; 
import "./Contact.css";
import { FaGithub, FaWhatsapp, FaLinkedinIn } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const Contact = function(){
    return(
        <div className="contact-div" id="Contact">
            <h2 className="text-contact text-size">CONTACTO</h2>
            <form>
                <h3 className="text-style">Contame tu propuesta</h3>
                <div className="input-group">
                    <input type="text"/>
                    <label>nombre</label>
                </div>
                <div className="input-group">
                    <input type="text"/>
                    <label>email</label>
                </div>
                <div className="input-group">
                    <textarea type="text"/>
                    <label>tu propuesta</label>
                </div>
                <button>enviar</button>
            </form>
            <div className="contact-row">
                <div className="text-contact">
                    <h3>Enviar un email</h3>
                    <a target="_blank" href="mailto:francocamuspp@gmail.com">
                        <SiGmail color="white" size="30px"/>
                    </a>
                </div>
                <div className="text-contact">
                    <h3>Visitar Linkedin</h3>
                    <a target="_blank" href="https://www.linkedin.com/in/franco-santiago-camus-1121261a8/">
                        <FaLinkedinIn color="white" size="30px"/>
                    </a>
                </div>
                <div className="text-contact">
                    <h3>Visitar GitHub</h3>
                    <a className="div-GITHUB" target="_blank" href="https://github.com/francocamuss">
                        <FaGithub color="white" size="30px"/>
                    </a>
                </div>
                <div className="text-contact">
                    <h3>Enviar un whatsapp</h3>
                    <a target="_blank" href="https://wa.me/5493815243787?Hola,%20quiero%20saber%20más%20sobre%20tus%20servicios">
                        <FaWhatsapp color="white" size="30px"/>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Contact;