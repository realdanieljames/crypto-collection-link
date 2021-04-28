import React from "react";
import "./Modal.css";

const Modal = (props) => {
    return (
        <div className="modal">
            <div className="modal-content">
                <div>
                    {props.children}
                </div>
            </div>
        </div>
    )
}

export default Modal;