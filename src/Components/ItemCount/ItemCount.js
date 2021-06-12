import React, { useState } from "react";
import { useCartContx } from "../../context/cartContext";
import CountBtn from "../CountBtn/CountBtn";

function ItemCount({ stock, init, item }) {

  //se crea 2 estados, uno para las cards y el otro para el carrito de compras
  const [counter, setCounter] = useState(init);

  const [stockTotal, setStockTotal] = useState(stock);

  const { addItems} = useCartContx();





  const addC = (e) => {

e.preventDefault()
      setCounter(counter + 1)  
      setStockTotal(stockTotal - 1)
      e.stopPropagation()
   

  }


  
  //RESTA LA CANTIDAD DEL CARRITO
    const subtractC = (e) => {
      e.preventDefault()

    setCounter(counter - 1)
    setStockTotal(stockTotal +1)
    e.stopPropagation()
    }
    

    //funciones para sumar y restar la cantidad del producto a tiempo real



  //condicional para diferenciar el carrito y la lista de productos
 return(

    <div className="counter">
      <CountBtn
        stock={stockTotal}
        addC={addC}
        subtractC={subtractC}
        counter={counter}
        addCart={()=>addItems(counter,item)}
        item={item}
     
      />
    </div>
 )
}

export default ItemCount;
