import React from "react";
import "./Proyects.css";
import CountriesHome from "../../images/CountriesHome.png";
import PortafolioHome from "../../images/PortafolioHome.png";
import PGHome from "../../images/PGHome.png";

const Proyects = function(){
    return(
        <div className="proyects-div" id="Proyects">
            <h2 className="text-proyects">PROYECTOS</h2>
            <div className="div-proyect">
                <img src={CountriesHome} alt="countries home" className="proyect-img"/>
                <div className="div-proyect-name">
                    <h3>Henry Countries</h3>
                    <button>Ver proyecto</button>
                </div>
            </div>
            <div className="div-proyect">
                <img src={PGHome} alt="countries home" className="proyect-img"/>
                <div className="div-proyect-name">
                    <h3>Henry Bienes Raices</h3>
                    <button>Ver proyecto</button>
                </div>
            </div>
            <div className="div-proyect">
                <img src={PortafolioHome} alt="countries home" className="proyect-img"/>
                <div className="div-proyect-name">
                    <h3>Mi portafolio</h3>
                    <button>Ver proyecto</button>
                </div>
            </div>
        </div>
    )
}

export default Proyects;