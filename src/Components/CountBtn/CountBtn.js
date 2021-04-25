import React from 'react';
const CountBtn = ({stock,addC,  subtractC,counter, addCart}) => {
    return (<>
        <p>Cantidad Disponible: {stock}</p>
     <button
        className="btn btn-blue"
        onClick={addC}
        disabled={counter === stock}
      >
        +
      </button>

      <button className="btn btn-red" onClick={subtractC}>
        -
      </button>
      <input type="text" value={counter} onChange={addC || subtractC} />
      <button className="btn-cart" onClick={() => addCart(counter)}>
        Add<i className="fa fa-shopping-cart" aria-hidden="true"></i>
      </button></>  );
}
 
export default CountBtn;