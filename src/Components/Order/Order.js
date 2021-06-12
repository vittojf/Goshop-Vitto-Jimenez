import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";

import Modal from "../Modal/Modal";

export default function Order({
  handleClose,
  orderId,
  clear,
  modalOrder,
  user,
}) {
  const [copy, setCopy] = useState("");
  const textRef = useRef(null);

  const copyToClipboard = (e) => {
    textRef.current.select();
    document.execCommand("copy");
    e.target.focus();

    setCopy("Copied!");
  };

  return (
    <>
      {modalOrder && (
        <Modal onClose={handleClose} title="Factura">
          <div className="order-Complete top-margin">
            <h1>¡Gracias por su Compra!</h1>

            <h3>Codigo de la Orden:</h3>
            <form action="">
              <textarea value={orderId} ref={textRef} ></textarea>
            </form>

            <button onClick={(e) => copyToClipboard(e)}>
              {copy === "" ? (
                <i className="fa fa-file" aria-hidden="true"></i>
              ) : (
                copy
              )}
            </button>

            <div className="finish top-margin">
              <i>
                Gracias {user.name} por comprar en GoShop. Si quiere ver la
                información de su compra copie el id de la compra y diríjase
                hacia el siguiente enlace
              </i>
              <Link to="/orders" style={{ color: "blue" }} onClick={clear}>
                {" "}
                Click Aquí...
              </Link>
            </div>

            <div className=" top-margin">
              <Link to="/">
                {" "}
                <button className="btn-finish" onClick={clear}>
                  Finalizar
                </button>
              </Link>
            </div>
          </div>
        </Modal>
      )}
    </>
  );
}
