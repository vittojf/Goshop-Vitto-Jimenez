import React,{useState,useEffect} from "react";
import { Link } from "react-router-dom";
import { useCartContx } from "../../context/cartContext";
import "../../styles/cart/cart.css";
import ItemCount from "../ItemCount/ItemCount";
import {getFirestore} from '../../firebase'
import firebase from 'firebase/app'

import 'firebase/firestore';

export default function Cart() {
  const [iTotal, setITotal] = useState(0);
  const [order, setOrder] = useState({});
const [serialOrder, setSerialOrder] = useState();
  const {  items, count, total,clear,removeItem } = useCartContx();



const user ={
  name:'vittoriano',
  mail:'vectorsjf@gmail.com',
  phone:'+584241223373'
}
const db= getFirestore();
const orders = db.collection("orders");

const handleOrder=()=>{

  let newOrder={
    buyer:{
      name:user.name,
      email:user.mail,
      phone:user.phone
    },
    items,
    iTotal,
    date:firebase.firestore.Timestamp.fromDate(new Date()),
  };
  items.length && setOrder(newOrder)


}

useEffect(() => {
  let tot = 0
 if(items.length){
  tot=total()
  setITotal(tot)
 }
 console.log(tot)
}, [items,total]);


useEffect(() => {
  if(order.items){
    orders.add(order).then(({id})=>{
setSerialOrder(id)
    }).catch((err)=>console.log("error",err)).finally(()=>{
      setOrder({})

    }
    
    )
  }
}, [order,orders]);

  return (
    <React.Fragment>
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

      
        </>
      ) : (<>

        <h2 style={{ textAlign: "center" }}>no hay productos</h2>
        <Link to="/" className="link-search">Buscar Productos</Link>
    </>
      )
      
      }
{serialOrder? <> <hr /> <div className="container-cart"> <h3>Factura de compra: {serialOrder}</h3></div> <Link to="/" className="link-search">
<button className="btn check" onClick={clear}>
             Culminar Compra
            </button>
            </Link></>:    <div className="pay-info" style={{marginBottom:20}}>
            <h2>total: ${total()}</h2>
            <button onClick={clear} className="btn ">
              Vaciar carrito<i className="fa fa-trash" aria-hidden="true"></i>
            </button>
            <button className="btn check" onClick={handleOrder}>
              Comprar <i className="fa fa-check" aria-hidden="true"></i>
            </button>
          </div>
}
      
    </React.Fragment>
  );
}
