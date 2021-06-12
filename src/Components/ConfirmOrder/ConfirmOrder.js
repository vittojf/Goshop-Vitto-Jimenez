import React,{useState,useEffect} from 'react';
import Modal from '../Modal/Modal'
import firebase from 'firebase'
import {getFirestore} from '../../firebase'

import Spinner from '../Spinner/Spinner';
import { Redirect } from 'react-router';

export default function ConfirmOrder({handleClose,show,phone,id}){

    const [userPhone, setUserPhone] = useState(phone);
const [loading, setLoading] = useState(false);
const [location, setLocation] = useState(false);

    const onChangeName = (evt) => {
        setUserPhone(evt.target.value)

    }
const db = getFirestore()

const setUpdateOrder=()=>{
    const docRef = db.collection('orders').doc(id)

    return docRef.update({
        "buyer.phone":userPhone,
        "status":true
    }).then(()=>{
handleClose()
    }).catch((error)=>{
        alert('Ocurrio un error :/',error)
        (error)
    })
    
}


const setUpReCaptcha = ()=>{
    window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier("recaptcha-container", {
        'size': 'invisible',
        'callback': (response) => {
          // reCAPTCHA solved, allow signInWithPhoneNumber
          onSignInSubmit();
        }
      });
}

const onSignInSubmit = (e) =>{

    setLoading(true)
    e.preventDefault()
    setUpReCaptcha()
    const phoneNumber = userPhone;
const appVerifier = window.recaptchaVerifier;
firebase.auth().signInWithPhoneNumber(phoneNumber, appVerifier)
    .then((confirmationResult) => {
      
      window.confirmationResult = confirmationResult;
      const code = window.prompt("Enter Code");
confirmationResult.confirm(code).then((result) => {
  // User signed in successfully
  setUpdateOrder()
  alert('Verificación Exitosa :D')
 // alert('usuario verificado',user)
  // ...
}).catch((error) => {
 alert('hubo una mala autenticacion, intente nuevamente',error)
 handleClose()


});
    }).catch((error) => {
      alert('Ocurrio un error', error)
      setLoading(false)
    }).finally(()=>{
        setLoading(false)
        setLocation(true)
    });
}



useEffect(() => {
    
}, [userPhone]);



    return(
    <React.Fragment>

{
    show&&<Modal onClose={handleClose} title='Confirmar Recibo'>

    <p><b>Confirma que si recibiste el pedido con tan solo con 3 pasos</b></p>
        <div className="proces-body">
            <ul>
                <li className="proces"><i className="fas fa-clipboard-check    "></i></li>
                <li className="proces"><i className="fas fa-sms"></i></li>
                <li className="proces"><img src="/security.svg" alt="shield" /></li>
            </ul>
        </div>

    <form className="form-confirm-order">
    

   
      <label htmlFor="phone"><i className="fa fa-phone" aria-hidden="true"></i> Telefono</label>
      <input
        type="tel"
        onChange={(e) => onChangeName(e)}
        name="phone"
        id="phone"
       defaultValue={phone}
        />
<div id="recaptcha-container"></div>

  <button type="submit" className="btn-generator" onClick={(e)=>onSignInSubmit(e)}>{loading? <Spinner/>:<>{'Procesar'}</>}</button>
{location&&<Redirect to="/"/>}
        </form>
            </Modal>
}
     
    </React.Fragment>
    )
}
