import React, { useState } from "react";
import InputForm from "../InputForm/InputForm";
import Modal from "../Modal/Modal";
import "../../styles/checkOut/checkOut.css";
import { useCartContx } from "../../context/cartContext";
import { getFirestore } from "../../firebase";
import "../../firebase";
import firebase from "firebase/app";
import Order from "../Order/Order";

export default function CheckOut({ onClose,showModal }) {


    const [loading, setLoading] = useState(false);
  const { items, total, count,clear } = useCartContx();
  const [orderId, setOrderId] = useState();
  const [user, setUser] = useState({
    name: "",
    surname: "",
    mail: "",
    mailCheck: "",
    phone: "",
  });
  const onChangeName = (evt) => {
    setUser({
      ...user,
      [evt.target.name]: evt.target.value,
    });
  };
  

  const [modalOrder, setModalOrder] = useState(false);

  const handleClose = () => {
    setModalOrder(false);
  };


  const handleOrder = (evt) => {
    evt.preventDefault();
    if(user == null ){
        if(user.mail !== user.mailCheck){
            alert('Los correos no coinciden. Por favor, escribe bien tus datos')
        }else{
            createOrder()
        }
    }else{
        createOrder()
    }
       
  };


  async function createOrder(){
      setLoading(true)
      const db= getFirestore()
      const updateItems = db.collection('items').where(firebase.firestore.FieldPath.documentId(), 'in', items.map(i => i.id));
      const query = await updateItems.get();
      const batch = db.batch();
      const orders = db.collection('orders')
      let newOrder = {
          buyer: {...user},
          status: false,
        itemsCount: count,
        items,
        itotal: total(),
        date: firebase.firestore.Timestamp.fromDate(new Date()),
    }

    const outOfStock = [];
    query.docs.forEach((doc,index)=>{
        if(doc.data().stock >=items[index].quantity){
            batch.update(doc.ref,{stock:doc.data().stock - items[index].quantity})
        }else{
            outOfStock.push({...doc.data(),id:doc.id})
        }
    })

    if(outOfStock.length ===0){
        await batch.commit();
        try{
            const {id} = await orders.add(newOrder);
      
            setOrderId(id)
        }catch(error){
            alert('ocurrio un problema: ', error)
        }
        finally{
            setLoading(false)
           setModalOrder(true)
           
        }



    }else{
        alert('Lo sentimos, no se pudo procesar su compra')
    }

  }


  return (
    <>{
showModal&&  <Modal onClose={onClose} title="Checkout">
        <i>
          Completa el formulario para procesar la información y culminar su
          compra
        </i>
        <form className="checkForm">
          <InputForm loading={loading} onChangeName={onChangeName} handleOrder={handleOrder} />
        </form>
      </Modal>


}
<Order user={user} handleClose={handleClose} orderId={orderId} modalOrder={modalOrder} clear={clear}></Order>
    </>
  );
}
