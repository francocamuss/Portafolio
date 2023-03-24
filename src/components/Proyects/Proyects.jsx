import React from "react";
import "./Proyects.css";
import Carrousel from "../Carrousel/Carrousel.jsx";
import Modal from "../Modals/Modals.jsx";
import ModalImg from "../Modals/ModalImg.jsx";
import { useState } from "react";
// import { cardsHome, cardsPropiedades, favorites, home, login, panelAdmin } from "../../images/proyectos/proyectoGrupal";
import cardsHome from "../../images/proyectos/proyectoGrupal/cardsHome.png";
import cardsPropiedades from "../../images/proyectos/proyectoGrupal/cardsPropiedades.png";
import favorites from "../../images/proyectos/proyectoGrupal/favorites.png";
import home from "../../images/proyectos/proyectoGrupal/home.png";
import login from "../../images/proyectos/proyectoGrupal/login.png";
import panelAdmin from "../../images/proyectos/proyectoGrupal/panelAdmin.png";
// import { detailInd, formInd, homeInd, landingPageInd} from "../../images/proyectos/proyectoInd";
import detailInd from "../../images/proyectos/proyectoInd/detailInd.jpg";
import formInd from "../../images/proyectos/proyectoInd/formInd.jpg";
import homeInd from "../../images/proyectos/proyectoInd/homeInd.jpg";
import landingPageInd from "../../images/proyectos/proyectoInd/landingPageInd.jpg";
// import { landing1NC, landing2NC, landing3NC} from "../../images/proyectos/proyectoNC";
import landing1NC from "../../images/proyectos/proyectoNC/landing1NC.jpg";
import landing2NC from "../../images/proyectos/proyectoNC/landing2NC.jpg";
import landing3NC from "../../images/proyectos/proyectoNC/landing3NC.jpg";
// import { landing1Fede, landing2Fede, landing3Fede, landing4Fede, landing5Fede, landing6Fede} from "../../images/proyectos/proyectoFede";
import landing1Fede from "../../images/proyectos/proyectoFede/landing1Fede.jpg";
import landing2Fede from "../../images/proyectos/proyectoFede/landing2Fede.jpg";
import landing3Fede from "../../images/proyectos/proyectoFede/landing3Fede.jpg";
import landing4Fede from "../../images/proyectos/proyectoFede/landing4Fede.jpg";
import landing5Fede from "../../images/proyectos/proyectoFede/landing5Fede.jpg";
import landing6Fede from "../../images/proyectos/proyectoFede/landing6Fede.jpg";

const imagenesPG = [cardsHome, cardsPropiedades, favorites, home, login, panelAdmin];
const imagenesIND = [detailInd, formInd, homeInd, landingPageInd];
const imagenesNC = [landing1NC, landing2NC, landing3NC];
const imagenesFede = [landing1Fede, landing2Fede, landing3Fede, landing4Fede, landing5Fede, landing6Fede];

const Proyects = function () {
    const [openModal1, setOpenModal1] = useState(false)
    const [openModal2, setOpenModal2] = useState(false)
    const [openModal3, setOpenModal3] = useState(false)
    const [openModalPG, setOpenModalPG] = useState(false)
    const [openModalIND, setOpenModalIND] = useState(false)
    const [openModalNC, setOpenModalNC] = useState(false)
    const [openModalFede, setOpenModalFede] = useState(false)



    return(
        <div className="proyects-div" id="Proyects">
            <h2 className="text-proyects">PROYECTOS</h2>
            <div className="div-proyect-1">
                <img src={imagenesIND[3]} alt="countries home" className="proyect-img" onClick={()=>setOpenModalIND(true)}/>
                <div className="div-proyect-name">
                    <h3>Henry Countries</h3>
                    {/* <a rel="noreferrer" target="_blank" href="https://pi-countries-francocamuss.vercel.app/">
                        <button className="btn-proyect">Ver proyecto</button>
                    </a>                     */}
                    <p>
                        Este proyecto fue realizado de manera individual. Se desarrollo desde cero, tanto en el front end, back end y base de datos...
                    </p>
                    <button className="btn-vermas" onClick={()=>setOpenModal1(true)}>
                         Ver más
                    </button>
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
            <ModalImg openModal={openModalIND} setOpenModal={setOpenModalIND}>
                <Carrousel images={imagenesIND}/>
            </ModalImg>
            <div className="div-proyect-2">   
                <img src={imagenesPG[3]} alt="countries home" className="proyect-img" onClick={()=>setOpenModalPG(true)}/>
                <div className="div-proyect-name">
                    <h3>Henry Bienes Raices</h3>
                    {/* <a rel="noreferrer" target="_blank" href="https://henrybienesraices.vercel.app/">
                        <button className="btn-proyect">Ver proyecto</button>
                    </a> */}   
                    <p>
                        Este proyecto fue realizado de manera grupal. Se desarrollo desde cero, tanto en el front end, back end y base de datos...
                    </p>
                    <button className="btn-vermas" onClick={()=>setOpenModal2(true)}>
                        Ver más
                    </button>               
                </div>
            </div>
            <ModalImg openModal={openModalPG} setOpenModal={setOpenModalPG}>
                <Carrousel images={imagenesPG}/>
            </ModalImg>
            <Modal openModal={openModal2} setOpenModal={setOpenModal2}>
                <h2>
                    Henry Bienes Raices
                </h2>
                <p>
                    Este proyecto fue realizado de manera grupal. Se desarrollo desde cero, tanto en el front end, back end y base de datos. Se utilizaron las tecnologias de React, Redux, HTML, CSS, Node JS, Express JS, Sequelize y Postgres SQL. El proyecto está basado en una plataforma para la realización de compras, alquileres y propuestas de venta en el ámbito de bienes raíces. En la plataforma encontraras opciones como filtrado de propiedades, una sección de favorito, una posibilidad de loguearte, enviar datos de tu casa para que la inmobiliaria venda tu casa.
                </p>
            </Modal>
            <div className="div-proyect-3">
                <img src={imagenesNC[0]} alt="countries home" className="proyect-img" onClick={()=>setOpenModalNC(true)}/>
                <div className="div-proyect-name">
                    <h3>Tercer proyecto</h3>
                    {/* <a rel="noreferrer" target="_blank" href="https://portafolio-one-orpin.vercel.app/">
                        <button className="btn-proyect">Ver proyecto</button>
                    </a> */}
                    <p>
                       Este proyecto esta creado con el fin de potenciar mi marca personal y que las empresas puedan ver...
                    </p>
                    <button className="btn-vermas" onClick={()=>setOpenModal3(true)}>
                        Ver más
                    </button>
                </div>
            </div>
            <ModalImg openModal={openModalNC} setOpenModal={setOpenModalNC}>
                <Carrousel images={imagenesNC}/>
            </ModalImg>
            <Modal openModal={openModal3} setOpenModal={setOpenModal3} >
                <h2>
                    Mi portafolio
                </h2>
                <p>Este proyecto esta creado con el fin de potenciar mi marca personal y que las empresas puedan ver mi trabajo, tomando el rol de front End Developer. Se busca mostrar un poco sobre mi y lo que disfruto hacer, la programación. Se utilizaron las tecnologias de React, Redux, HTML y CSS puro. Esta app se encuentra en constante desarrollo para mejorar la experiencia de usuario.
                </p>
            </Modal>
            <div className="div-proyect-4">
                <img src={imagenesFede[0]} alt="countries home" className="proyect-img" onClick={()=>setOpenModalFede(true)}/>
                <div className="div-proyect-name">
                    <h3>Cuarto proyecto</h3>
                    {/* <a rel="noreferrer" target="_blank" href="https://portafolio-one-orpin.vercel.app/">
                        <button className="btn-proyect">Ver proyecto</button>
                    </a> */}
                    <p>
                       Este proyecto esta creado con el fin de potenciar mi marca personal y que las empresas puedan ver...
                    </p>
                    <button className="btn-vermas" onClick={()=>setOpenModal3(true)}>
                        Ver más
                    </button>                  
                </div>
            </div>
            <ModalImg openModal={openModalFede} setOpenModal={setOpenModalFede}>
                <Carrousel images={imagenesFede}/>
            </ModalImg>
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