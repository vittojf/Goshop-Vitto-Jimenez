import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useCartContx } from "../../context/cartContext";
import "../../styles/cart/cart.css";


import "firebase/firestore";

import CheckOut from "../CheckOut/CheckOut";

export default function Cart() {
  const { items, count, total, clear, removeItem,subtractCart,sumCart } = useCartContx();

  const [showModal, setShowModal] = useState(false);

  const handleClose = () => {
    
    setShowModal(false);
  };

  const restCart=(qty,el)=>{

      return(subtractCart(el),qty-1)
 
  }
  
  const addCart=(qty,el)=>{
    return(sumCart(el),qty+1)
  }

  return (
    <React.Fragment>
      {items && count ? (
        <>
          <div className="container-cart">
            <table>
              <thead>
                <tr>
                  <th>productos</th>
                  <th>Cantidad</th>
                  <th>Subtotal</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {items.map((el) => {
                  return (
                    <tr key={el.id}>
                      <td>
                        <div className="cart-inf">
                          <div>
                            <p>
                              <b>{el.title}</b>
                            </p>
                            <small>Precio:${el.price}</small>
                          </div>
                        </div>
                      </td>

                      <td>
                        <div className="changeValue">

                        <button className="changeAdd" onClick={()=>addCart(el.quantity,el)} disabled={count>=15} >+</button>
                   
  
                        <input type="text" value={el.quantity} onChange={addCart || restCart}/>
                    
                        <button className="changeSubt" onClick={()=>restCart(el.quantity,el)} disabled={count>=15}>-</button>
                        </div>
                      </td>
                      <td>{el.quantity * el.price}</td>
                      <td>
                        {" "}
                        <button onClick={() => removeItem(el.id, el.quantity)}>
                          <i className="fa fa-trash" aria-hidden="true"></i>
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <div className="pay-info" style={{ marginBottom: 20 }}>
            <h2>total: ${total()}</h2>
            <button onClick={clear} className="btn ">
              Vaciar carrito<i className="fa fa-trash" aria-hidden="true"></i>
            </button>
            <button onClick={() => setShowModal(true)} className="btn check ">
              Checkout <i className="fa fa-arrow-right" aria-hidden="true"></i>
            </button>

            <CheckOut onClose={handleClose} showModal={showModal}></CheckOut>
          </div>
        </>
      ) : (
        <>
          <h2 style={{ textAlign: "center" }}>no hay productos</h2>
          <Link to="/" className="link-search">
            Buscar Productos
          </Link>
        </>
      )}
      )
    </React.Fragment>
  );
}
