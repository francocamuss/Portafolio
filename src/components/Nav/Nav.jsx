import React from "react";
import { Link } from "react-scroll";
import "./Nav.css";

const Nav = function(){
    return(
        <div className="nav-div">
            <div className="nav-text">
                <div className="cuadrado"></div>
                <h3>Franco Camus</h3>
                <h3> / FULL STACK WEB DEVELOPER</h3>
            </div>
            <div className="div-navLinks">
                <Link to="Home" spy={true} smooth={true} offset={-100} duration={500}><h4 className="h4-about">INICIO</h4></Link>
                <Link to="AboutMe" spy={true} smooth={true} offset={0} duration={500}><h4 className="h4-about">SOBRE MI</h4></Link>
                <Link to="Resume" spy={true} smooth={true} offset={0} duration={500}><h4 className="h4-about">HABILIDADES</h4></Link>
                <Link to="Proyects" spy={true} smooth={true} offset={0} duration={500}><h4 className="h4-about">PROYECTOS</h4></Link>
                <Link to="Contact" spy={true} smooth={true} offset={0} duration={500}><h4 className="h4-about">CONTACTO</h4></Link>
            </div>
        </div>
    )
}

export default Nav;