import React from "react";
import "./Modals.css";

const Modal = ({children, openModal, setOpenModal}) => {
    return (
        <div className={!openModal? "modal" :"modal is-open"}>
            <div className="modal-container">
                <button className="modal-close" onClick={()=>setOpenModal(false)}>❌</button>
                {children}
            </div>
        </div>
    )
}

export default Modal;