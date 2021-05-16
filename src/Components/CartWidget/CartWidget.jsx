import React from "react";
import { Link } from "react-router-dom";
import { useCartContx } from "../../context/cartContext";

const CartWidget = () => {
  const { count } = useCartContx();
  return (
    <Link to="/cart" className="btn">
      <img className="Cart-logo" src="/img/cart.png" alt="logo" />
      {count?<span>{count}</span>:''}
      
    </Link>
  );
};

export default CartWidget;
