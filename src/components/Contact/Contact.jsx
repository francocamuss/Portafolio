import React from "react"; 
import "./Contact.css";
import { FaGithub, FaWhatsapp, FaLinkedinIn } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import emailjs from '@emailjs/browser';
import { useState } from "react";

const Contact = function () {

    const validate = (state) => {
        const errors = {};
         const validateEmails = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        if (!state.name) {
            errors.name = "Se requiere un nombre";
        }
        if (!state.email) {
            errors.email = "Campo necesario"
        }else if (!validateEmails.test(state.email)) {
            errors.email = "Mail incorrecto";
        }
        if (!state.message) {
            errors.message = "Campo necesario"
        }
        return errors;
    }

    const initialState = {
        name: "",
        email: "",
        message: ""
    }

    const [state, setState] = useState(initialState);
    const [errors, setErrors] = useState({})

    const handleChange = (e) => {
        e.preventDefault();
        setState({
            ...state,
            [e.target.name]: e.target.value
        })
        setErrors(validate({
            ...state,
            [e.target.name]: e.target.value
        }))
    }   
    
    const sendEmail = (e) => {
        e.preventDefault();
        if (!state.name || !state.email || !state.message || errors.email) {
            return alert('Complete correctamente el formulario antes de enviarlo')
        }
        emailjs.sendForm("service_dujxw3r", "template_d6vqmpi", e.target, "oOd9IHvI3LhSWjYp2")
        .then(response => response)
        .catch(response => console.log(response))  
        alert("Mensaje enviado con exito!")
        setState(initialState);
    }

    return(
        <div className="contact-div" id="Contact">
            <h2 className="text-size">CONTACTO</h2>
            <form onSubmit={sendEmail}>
                    <h3 className="text-style">Contame tu propuesta</h3>
                    {/* <div className="input-group"> */}
                        <input type="text" name="name" required="required" value={state.name} onChange={handleChange} placeholder="nombre" />
                        {/* <label>nombre</label> */}
                    {/* </div> */}
                    {/* <div className="input-group"> */}
                        <input type="text" name="email" required="required" value={state.email} onChange={handleChange} placeholder="email"/>
                        {/* <label>email</label> */}
                    {/* </div> */}
                    {/* <div className="input-group"> */}
                        <textarea type="text" name="message" required="required" value={state.message} onChange={handleChange} placeholder="propuesta"/>
                        {/* <label>tu propuesta</label> */}
                    {/* </div> */}
                    <button type="submit" className="button-nuevo">ENVIAR</button>
            </form>
            <div className="div-contacts-buttons">
                    <a rel="noreferrer" target="_blank" href="mailto:francocamuspp@gmail.com" className="button-contact-1">
                        <div className="text-contact ">
                            <h3>Enviar un email</h3>
                            <SiGmail size="30px"/>
                        </div>
                    </a>
                    <a rel="noreferrer" target="_blank" href="https://www.linkedin.com/in/franco-santiago-camus-1121261a8/" className="button-contact-2">
                        <div className="text-contact">
                            <h3>Visitar Linkedin</h3>
                            <FaLinkedinIn size="30px" />
                        </div>
                    </a>
                    <a rel="noreferrer" target="_blank" href="https://github.com/francocamuss" className="button-contact-3">
                        <div className="text-contact">
                            <h3>Visitar GitHub</h3>
                            <FaGithub size="30px"/>
                        </div>
                    </a>
                    <a rel="noreferrer" target="_blank" href="https://wa.me/5493815243787?Hola,%20quiero%20saber%20más%20sobre%20tus%20servicios" className="button-contact-4">
                        <div className="text-contact">
                            <h3>Enviar un whatsapp</h3>
                            <FaWhatsapp size="30px"/>
                        </div>
                    </a>
            </div>
            {/* <form>
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
            </div> */}
        </div>
    )
}

export default Contact;