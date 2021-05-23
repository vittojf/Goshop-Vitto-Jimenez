import React, { useState, createContext, useEffect, useContext } from "react";

export const CartContext = createContext([]);

export const useCartContx = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [count, setCount] = useState(0);
  const [items, setItems] = useState([]);

  useEffect(() => {

  }, [items]);


  //AGREGA EL ITEM AL CARRITO
  const addItems = (quantity, item) => {
      
    //verifica si está el item en el carrito
    if (isInCart(item.id)) {
      sumCount(quantity, item);
    } else {
      setItems([...items, { ...item, quantity }]);
    }

    setCount(count + quantity);
  };

  //Realiza la sumatoría de la cantidad del producto existente en el carrito
  const sumCount = (quantity, item) => {
    const copyI = [...items];
    const findItem = items.findIndex((el) => el.id === item.id);
    copyI[findItem] = {
      ...copyI[findItem],
      quantity: copyI[findItem].quantity + quantity,
    };
    setItems(copyI);
  };





  // METODOS PARA SUMAR Y RESTAR EL PRODUCTO DENTRO DEL CARRITO
  const subtractCart = ( item) => {
    const copyI = [...items];
    const findItem = items.findIndex((el) => el.id === item.id);
    copyI[findItem] = {
      ...copyI[findItem],
      quantity: copyI[findItem].quantity - 1,
    };
    setItems(copyI);
    setCount(count-1)
  };

  const sumCart= (item) => {
    const copyI = [...items];
    const findItem = items.findIndex((el) => el.id === item.id);
    copyI[findItem] = {
      ...copyI[findItem],
      quantity: copyI[findItem].quantity + 1,
    };
    setItems(copyI);
    setCount(count+1)
  };

  //METODO Que retorna el id del producto que existe en el carrito
  const isInCart = (id) => {
    const inCart = items.some((el) => el.id === id);

    return inCart;
  };

  //Remueve del carrito un unico producto (Eliminacion individual)
  const removeItem = (itemId, quantity) => {
    const iToBeRemove = items.filter((el) => el.id !== itemId);
    setItems(iToBeRemove);

    setCount(count === 0 ? 0 : count - quantity);
  };
 

  //Limpia el carrito y el contador de productos
  const clear = () => {
    setCount(0);
    setItems([]);
  };


  //Muestra el precio Total de la compra
  const total = () => {
    return items.reduce((a, { price, quantity }) => a + price * quantity, 0);
  };


  return (
    <CartContext.Provider
      value={{ addItems, count, removeItem, items, total, clear, setCount,sumCount,subtractCart,sumCart }}
    >
      {children}
    </CartContext.Provider>
  );
};
