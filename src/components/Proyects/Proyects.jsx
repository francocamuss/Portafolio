import React from "react";
import "./Proyects.css";
import CountriesHome from "../../images/CountriesHome.png";
import PortafolioHome from "../../images/PortafolioHome.png";
import PGHome from "../../images/PGHome.png";
import Modal from "../Modals/Modals.jsx";
import { useState } from "react";

const Proyects = function () {
    const [openModal1, setOpenModal1] = useState(false)
    const [openModal2, setOpenModal2] = useState(false)
    const [openModal3, setOpenModal3] = useState(false)


    return(
        <div className="proyects-div" id="Proyects">
            <h2 className="text-proyects">PROYECTOS</h2>
            <div className="div-proyect">
                <img src={CountriesHome} alt="countries home" className="proyect-img"/>
                <div className="div-proyect-name">
                    <h3>Henry Countries</h3>
                    <a target="_blank" href="https://pi-countries-francocamuss.vercel.app/">
                        <button className="btn-proyect">Ver proyecto</button>
                    </a>
                    <br/>
                    <div>
                        <p>
                            Este proyecto fue realizado de manera individual. Se desarrollo desde cero, tanto en el front end, back end y base de datos...
                        </p>
                        <button className="btn-vermas" onClick={()=>setOpenModal1(true)}>
                            Ver más
                        </button>
                    </div>
                </div>
            </div>
            <Modal openModal={openModal1} setOpenModal={setOpenModal1}>
                <h2>
                    Henry Countries
                </h2>
                <p>
                    Este proyecto fue realizado de manera individual. Se desarrolló desde cero, tanto en el front end, back end y base de datos. Se utilizaron las tecnologias de React, Redux, HTML, CSS, Node JS, Express JS, Sequelize y Postgres SQL. Consiste en una App donde puedes encontar información de distintos paises, filtrarlos y ordernalos en base a su información. También cuenta con un formulario donde puedes asignarles actividades a los paises.
                </p>
            </Modal>
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
                        <button className="btn-vermas" onClick={()=>setOpenModal2(true)}>
                            Ver más
                        </button>
                    </div>
                </div>
            </div>
            <Modal openModal={openModal2} setOpenModal={setOpenModal2}>
                <h2>
                    Henry Bienes Raices
                </h2>
                <p>
                    Este proyecto fue realizado de manera grupal. Se desarrollo desde cero, tanto en el front end, back end y base de datos. Se utilizaron las tecnologias de React, Redux, HTML, CSS, Node JS, Express JS, Sequelize y Postgres SQL. El proyecto está basado en una plataforma para la realización de compras, alquileres y propuestas de venta en el ámbito de bienes raíces. En la plataforma encontraras opciones como filtrado de propiedades, una sección de favorito, una posibilidad de loguearte, enviar datos de tu casa para que la inmobiliaria venda tu casa.
                </p>
            </Modal>
            <div className="div-proyect">
                <img src={PortafolioHome} alt="countries home" className="proyect-img" onClick={() => console.log("prueba")}/>
                <div className="div-proyect-name">
                    <h3>Mi portafolio</h3>
                    <a target="_blank" href="https://portafolio-one-orpin.vercel.app/">
                        <button className="btn-proyect">Ver proyecto</button>
                    </a>
                    <br/>
                    <div>
                        <p>
                           Este proyecto esta creado con el fin de potenciar mi marca personal y que las empresas puedan ver...
                        </p>
                        <button className="btn-vermas" onClick={()=>setOpenModal3(true)}>
                            Ver más
                        </button>
                    </div>
                </div>
            </div>
            <Modal openModal={openModal3} setOpenModal={setOpenModal3} >
                <h2>
                    Mi portafolio
                </h2>
                <p>Este proyecto esta creado con el fin de potenciar mi marca personal y que las empresas puedan ver mi trabajo, tomando el rol de front End Developer. Se busca mostrar un poco sobre mi y lo que disfruto hacer, la programación. Se utilizaron las tecnologias de React, Redux, HTML y CSS puro. Esta app se encuentra en constante desarrollo para mejorar la experiencia de usuario.
                </p>
            </Modal>
        </div>
    )
}

export default Proyects;