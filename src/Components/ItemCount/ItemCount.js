import React, { useState } from "react";
import CountBtn from "../CountBtn/CountBtn";
function ItemCount({ stock, init }) {
  const [counter, setCounter] = useState(init);

  const addC = (stock) => {
  
    setCounter(counter + 1);
  };

  const subtractC = () => {
    
    counter > init ? setCounter(counter - 1) : setCounter(counter);
  };

  const addCart = (counter) => {
    alert(
      `agregaste al carrito ${
        counter === 1 ? `${counter} producto` : `${counter} productos`
      }`
    );
  };
  return (
    <div className="counter">
     
     <CountBtn stock={stock} addC={addC} subtractC={subtractC} counter={counter} addCart={addCart}/>
    </div>
  );
}

export default ItemCount;
