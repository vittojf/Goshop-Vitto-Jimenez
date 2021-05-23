import React from "react";
import { Link } from "react-router-dom";
import { useCartContx } from "../../context/cartContext";
import "../../styles/cart/cart.css";
import ItemCount from "../ItemCount/ItemCount";
/*import {getFirestore} from '../../firebase'*/

export default function Cart() {
  const {  items, count, total,clear,removeItem } = useCartContx();
  
  /*
  const [userInfo, setUserInfo] = useState({
    name: "",
    mail: "",
    confirm: "",
    phone: "",
  });
  const[order, setOrder]= useState({
    id:"",
    title:"",
    price:"",
    quantity:""
  })

  const db = getFirestore();

  const orders = db.collection("orders")
  const getProducts = items.map(el=>({id:el.id,title:el.title,price:el.pice,quantity:el.quantity}))


  console.log(order)
*/


  return (
    <>
      {items  && count? (
        <>
          <div className="container-cart">
            <table>
              <thead>
                  <tr>

                <th>productos</th>
                <th>Cantidad</th>
                <th>Subtotal</th>
                <th></th>
                  </tr>
              </thead>
              <tbody>

              {items.map((el) => {
                  return (
                      <tr key={el.id}>
                    <td>
                      <div className="cart-inf">
                        <div>
                          <p>
                            <b>{el.title}</b>
                          </p>
                          <small>Precio:${el.price}</small>
                        </div>
                      </div>
                    </td>
           
                    <ItemCount countCart={el.quantity} init={el.quantity} item={el} condi="cart" price={el.price} />
                 
                    <td>{el.quantity*el.price}</td>
          <td>
                      {" "}
                      <button
                        onClick={()=>removeItem(el.id,el.quantity)}
                        >
                        <i className="fa fa-trash" aria-hidden="true"></i>
                      </button>
                    </td>
                  </tr>
                );
            })}
            </tbody>
            </table>
          </div>

          <div className="pay-info">
            <h2>total: ${total()}</h2>
            <button onClick={clear} className="btn ">
              Vaciar carrito<i className="fa fa-trash" aria-hidden="true"></i>
            </button>
            <button className="btn check" >
              Comprar <i className="fa fa-check" aria-hidden="true"></i>
            </button>
          </div>
        </>
      ) : (<>

        <h2 style={{ textAlign: "center" }}>no hay productos</h2>
        <Link to="/" className="link-search">Buscar Productos</Link>
    </>
      )}
    </>
  );
}
