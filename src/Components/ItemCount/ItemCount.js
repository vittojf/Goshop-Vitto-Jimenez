import React, { useState } from "react";
import { useCartContx } from "../../context/cartContext";
import CountBtn from "../CountBtn/CountBtn";

function ItemCount({ stock, init, item, condi, setT, price, countCart }) {

  //se crea 2 estados, uno para las cards y el otro para el carrito de compras
  const [counter, setCounter] = useState(init);
  const [countCartI, setCountCartI] = useState(countCart);

  const { addItems,sumCart,subtractCart} = useCartContx();


//SUMA LA CANTIDAD DEL CARRITO
  const addC = () => {
    condi === "cart" ? sumCartI(): setCounter(counter + 1);
  };

  //RESTA LA CANTIDAD DEL CARRITO
    const subtractC = () => {
  
      //se ejecuta el mismo proceso de resto pero verifica si es para la carrito o no
      condi === "cart"
        ? countCartI > 0
          ? subtracCartI()
          : setCountCartI(countCartI)
        : counter > init
        ? setCounter(counter - 1)
        : setCounter(counter);
    };

    //funciones para sumar y restar la cantidad del producto a tiempo real
  const sumCartI = () =>{
    return(setCountCartI(countCartI+1),sumCart(item))
  }

  const subtracCartI= () =>{
    return(setCountCartI(countCartI - 1),subtractCart(item))
  }


  //condicional para diferenciar el carrito y la lista de productos
  return condi === "cart" ? (
    <CountBtn
      //stock={stock}
      sumCart={addC}
      subtractCart={subtractC}
      counter={countCartI}
      addCart={() => addItems(counter, item)}
      condi={condi}
      setT={setT}
      price={price}
    />
  ) : (
    <div className="counter">
      <CountBtn
        stock={stock}
        addC={addC}
        subtractC={subtractC}
        counter={counter}
        addCart={() => addItems(counter, item)}
        condi={condi}
        setT={setT}
        price={price}
      />
    </div>
  );
}

export default ItemCount;
