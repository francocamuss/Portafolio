import React from "react";
import { Link } from "react-router-dom";
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
                <Link to="/"><h4 className="h4-about">SOBRE MI</h4></Link>
                <Link to="/curriculum"><h4 className="h4-about">CURRICULUM</h4></Link>
                <Link to="/proyectos"><h4 className="h4-about">PROYECTOS</h4></Link>
            </div>
        </div>
    )
}

export default Nav;