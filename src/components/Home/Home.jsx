import React from "react";
import "./Home.css";
import { Link } from "react-scroll";
import { AiOutlineArrowDown } from "react-icons/ai";


const Home = function(){
    return(
        <div className="div-home" id="Home">
            <h1>BIENVENIDO A MI PORTAFOLIO WEB</h1>
            <Link to="AboutMe" spy={true} smooth={true} offset={0} duration={500}>
                <button> Ir hacia abajo <AiOutlineArrowDown className="AiOutlineArrowDown" /></button>
            </Link>
        </div>
    )
}

export default Home;