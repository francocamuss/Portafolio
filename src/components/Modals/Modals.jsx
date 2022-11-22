import React from "react";
import "./Modals.css";

const Modal = ({children, openModal, setOpenModal}) => {
    const handleModalContainerClick = (e) => e.stopPropagation();

    return (
        <div className={!openModal? "modal" :"modal is-open"} onClick={()=>setOpenModal(false)}>
            <div className="modal-container" onClick={handleModalContainerClick}>
                <button className="modal-close" onClick={()=>setOpenModal(false)}>❌</button>
                {children}
            </div>
        </div>
    )
}

export default Modal;