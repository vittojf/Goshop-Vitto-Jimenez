import React from 'react';
import '../../styles/modal/modal.css'

const Modal = ({children, onClose,title="modal"}) => {
    return ( <div className="modal">
        <div className="modal-content">
            <div className="modal-head">
              <h2>  {title}</h2>
            <button className="close" onClick={onClose}> <i className="fa fa-window-close" aria-hidden="true"></i> </button>
            </div>
            <hr />
            {children}
        </div>
    </div> );
}
 
export default Modal;