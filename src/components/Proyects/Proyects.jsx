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
                    <a target="_blank" href="https://pi-countries-pink-rho.vercel.app/">
                        <button className="btn-proyect">Ver proyecto</button>
                    </a>
                    <br/>
                    <div>
                        <p>
                            Este proyecto fue realizado de manera individual. Se desarrollo desde cero, tanto en el front end, back end y base de datos...
                        </p>
                        <button className="btn-vermas">
                            Ver más
                        </button>
                    </div>
                </div>
            </div>
            <div className="div-proyect">   
                <img src={PGHome} alt="countries home" className="proyect-img"/>
                <div className="div-proyect-name">
                    <h3>Henry Bienes Raices</h3>
                    <a target="_blank" href="https://henrybienesraices.vercel.app/">
                        <button className="btn-proyect">Ver proyecto</button>
                    </a>
                    <br/>
                    <div>
                        <p>
                            Este proyecto fue realizado de manera grupal. Se desarrollo desde cero, tanto en el front end, back end y base de datos...
                        </p>
                        <button className="btn-vermas">
                            Ver más
                        </button>
                    </div>
                </div>
            </div>
            <div className="div-proyect">
                <img src={PortafolioHome} alt="countries home" className="proyect-img"/>
                <div className="div-proyect-name">
                    <h3>Mi portafolio</h3>
                    <a target="_blank" href="https://portafolio-one-orpin.vercel.app/">
                        <button className="btn-proyect">Ver proyecto</button>
                    </a>
                    <br/>
                    <div>
                        <p>
                           El portafolio fue realizado de manera individual. Se desarrollo desde cero y solo necesito front end...
                        </p>
                        <button className="btn-vermas">
                            Ver más
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Proyects;