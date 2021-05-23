import React from "react";
import { Link } from "react-router-dom";
import { useCartContx } from "../../context/cartContext";

const CartWidget = () => {
  const { count } = useCartContx();
  return (<>
    {count?
     <Link to="/cart" className="btn">
     <img className="Cart-logo" src="/img/cart.png" alt="logo" />
         
    <span>{count}</span>
     
   </Link>

    
    :''
   }
    
    </>
  );
};

export default CartWidget;
