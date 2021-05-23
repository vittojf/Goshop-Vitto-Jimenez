import React from "react";





const CountBtn = ({ stock, addC, subtractC, counter, addCart, condi,sumCart, subtractCart }) => {


  
  return (

    //Verifica si está en el carrito
    <>

  
      {
      //BOTONES PARA CARRITO
      
      condi === "cart" ? (
        <><td className='counter'>
          <button
            className="btn btn-blue"
            //retorna el metodo de agregar y suma el contador de los productos
            onClick={sumCart}
            
          >
            +
          </button>
          
          <button className="btn btn-red" disabled={counter ===1}
           //retorna el metodo de agregar y resta el contador de los productos
          onClick={ subtractCart} >
            -
          </button>
          <input type="text" value={counter} onChange={sumCart || subtractCart } />{" "}
</td>
     
        </>
      ) : (
        //BOTONES PARA LISTADO DE PRODUCTO
        <>
        
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

          <button
            className="btn-cart"
            disabled={counter === 0}
            onClick={addCart}
          >
            Add<i className="fa fa-shopping-cart" aria-hidden="true"></i>
          </button>
        </>
      )}
    </>
  );
};

export default CountBtn;
