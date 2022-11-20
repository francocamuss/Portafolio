import React from "react";
import "./Proyects.css";
import CountriesHome from "../../images/CountriesHome.png";
import PortafolioHome from "../../images/PortafolioHome.png";
import PGHome from "../../images/PGHome.png";
import Modal from "../Modals/Modals.jsx";
import { useState } from "react";

const Proyects = function(){

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
                    <a target="_blank" href="https://pi-countries-pink-rho.vercel.app/">
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
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut accusantium dolor voluptates, ab vitae beatae cumque quas consectetur accusamus exercitationem inventore ex dolorum nam magnam quam consequuntur deserunt, voluptatum id.
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui corrupti, possimus, deserunt alias labore est accusamus, nemo minus hic iste doloribus sint reiciendis tempore commodi? Voluptate a quibusdam minus vitae.
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
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut accusantium dolor voluptates, ab vitae beatae cumque quas consectetur accusamus exercitationem inventore ex dolorum nam magnam quam consequuntur deserunt, voluptatum id.
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui corrupti, possimus, deserunt alias labore est accusamus, nemo minus hic iste doloribus sint reiciendis tempore commodi? Voluptate a quibusdam minus vitae.
                </p>
            </Modal>
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
                        <button className="btn-vermas" onClick={()=>setOpenModal3(true)}>
                            Ver más
                        </button>
                    </div>
                </div>
            </div>
            <Modal openModal={openModal3} setOpenModal={setOpenModal3}>
                <h2>
                    Mi portafolio
                </h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut accusantium dolor voluptates, ab vitae beatae cumque quas consectetur accusamus exercitationem inventore ex dolorum nam magnam quam consequuntur deserunt, voluptatum id.
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui corrupti, possimus, deserunt alias labore est accusamus, nemo minus hic iste doloribus sint reiciendis tempore commodi? Voluptate a quibusdam minus vitae.
                </p>
            </Modal>
        </div>
    )
}

export default Proyects;