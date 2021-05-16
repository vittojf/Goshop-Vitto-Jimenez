import React from "react";
import { Link } from "react-router-dom";
import { useCartContx } from "../../context/cartContext";
import "../../styles/cart/cart.css";

export default function Cart() {
  const { removeItem, items, count, total,clear } = useCartContx();


  const sumQty=(qty)=>{
     return qty+1
  }
  console.log(items);
  return (
    <>
      {items  && count? (
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
                          <small>Precio:${el.precio}</small>
                        </div>
                      </div>
                    </td>

                    <td>
                      <input type="text" value={el.quantity} onChange={sumQty} />{" "}
                      
                    </td>
                    <td>{el.quantity===1? el.precio: el.precio*el.quantity}</td>
                    <td>
                      {" "}
                      <button
                        onClick={() => {
                            removeItem(el.id, el.quantity);
                        }}
                        >
                        <i className="fa fa-trash" aria-hidden="true"></i>
                      </button>
                    </td>
                  </tr>
                );
            })}
            </tbody>
            </table>
          </div>

          <div className="pay-info">
            <h2>total: ${total()}</h2>
            <button onClick={clear} className="btn ">
              Vaciar carrito<i className="fa fa-trash" aria-hidden="true"></i>
            </button>
            <button className="btn check">
              Comprar <i className="fa fa-check" aria-hidden="true"></i>
            </button>
          </div>
        </>
      ) : (<>

        <h2 style={{ textAlign: "center" }}>no hay productos</h2>
        <Link to="/" className="link-search">Buscar Productos</Link>
    </>
      )}
    </>
  );
}
