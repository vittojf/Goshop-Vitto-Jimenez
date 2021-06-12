import React from "react";
import { useCartContx } from "../../context/cartContext";
import Alert from "../Alert/Alert";





const CountBtn = ({ stock, addC, subtractC, counter ,addCart}) => {
  const { alertShow,count } = useCartContx();
  
  return (

   

        <>
{
  alertShow&&<Alert title="Agregaste un Producto al Carrito"></Alert>
}
        
          <p>Cantidad Disponible: {stock}</p>
          <button
            className="btn btn-blue"
            onClick={(e)=>addC(e)}
            disabled={stock===0}
          >
            +
          </button>

          <button className="btn btn-red" onClick={(e)=>subtractC(e)} disabled={counter===0}>
            -
          </button>
          <input type="text" value={counter} disabled onChange={addC || subtractC} />

          <button
            className="btn-cart"
            disabled={counter === 0 || count>=15}
            onClick={addCart}
          >
            Add<i className="fa fa-shopping-cart" aria-hidden="true"></i>
          </button>
        </>
 
  );
};

export default CountBtn;
