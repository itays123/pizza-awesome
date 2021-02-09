import React from 'react';
import './Modal.css';

const Modal = ({ show ,children, confirmable, onDissmiss, confirmText, title }) => {
    if (!show) return null;
    const actions = [(
        <button key="cancel" className="btn" onClick={() => onDissmiss(false)}>
            { confirmable ? "Cancel" : "Close" }
        </button>
    ), confirmable ? (
        <button key="confirm" className="btn" onClick={() => onDissmiss(true)}>
            { confirmText || "confirm" }
        </button>
    ) : null];
    return [<div key="backdrop" className="backdrop" />, (
        <div key="modal" className="modal">
            <header>
                { title || "modal" }
            </header>
            <section className="body">
                { children }
            </section>
            <section className="actions">
                { actions }
            </section>
        </div>
    )];
}
 
export default Modal;