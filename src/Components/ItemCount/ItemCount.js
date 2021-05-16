import React, { useState } from "react";
import { useCartContx } from "../../context/cartContext";
import CountBtn from "../CountBtn/CountBtn";

function ItemCount({ stock, init,item }) {
  const [counter, setCounter] = useState(init);

  
  const { addItems } = useCartContx();


  const addC = () => {
    setCounter(counter + 1);
  };

  const subtractC = () => {
    counter > init ? setCounter(counter - 1) : setCounter(counter);
  };


  return (
    <div className="counter">
      <CountBtn
        stock={stock}
        addC={addC}
        subtractC={subtractC}
        counter={counter}
        addCart={()=>addItems(counter,item)}
  
      />
    </div>
  );
}

export default ItemCount;
