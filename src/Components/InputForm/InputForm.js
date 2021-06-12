import React from "react";
import Spinner from "../Spinner/Spinner";

const InputForm = ({ handleOrder, onChangeName,loading }) => {
  return (
    <>
      <label htmlFor="name">Nombre</label>
      <input
        type="text"
        onChange={(e) => onChangeName(e)}
        name="name"
        id="name"
        placeholder="Ingrese su nombre"
      />
      <label htmlFor="surname">Apellido</label>
      <input
        type="text"
        onChange={(e) => onChangeName(e)}
        name="surname"
        id="surname"
        placeholder="Ingrese su apellido"
      />
      <label htmlFor="mail">Correo</label>
      <input
        type="email"
        onChange={(e) => onChangeName(e)}
        name="mail"
        id="mail"
        placeholder="name@mail.com"
      />
    <label htmlFor="mailCheck">Repetir Correo</label>
      <input
        type="email"
        onChange={(e) => onChangeName(e)}
        name="mailCheck"
        id="mailCheck"
        placeholder="name@mail.com"
      />
      <label htmlFor="phone">Telefono</label>
      <input
        type="tel"
        onChange={(e) => onChangeName(e)}
        name="phone"
        id="phone"
        placeholder="0128-1234567"
      />

      <button onClick={handleOrder}>{loading?<Spinner/>:'Procesar' }</button>
    </>
  );
};

export default InputForm;
