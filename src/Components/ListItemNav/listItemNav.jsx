import React from "react";
import { Link } from "react-router-dom";
import OrderWidget from "../OrderWidget/OrderWidget";

const ListItem = ({links}) => {


  return (

    <ul className="list">

    {links.map((e)=><Link key={e}  to={`/${e === 'inicio'? '': `category/${e}`}`}><li key={e}>{e}</li></Link>)}
    <li className="order-icon"><OrderWidget/></li>

    </ul>

  );
};
export default ListItem;

/* <ul className="list">
        <a href="/">
          <li className="list-item"></li>
        </a>
        <a href="/">
          <li className="list-item">Tecnología</li>
        </a>
        <a href="/">
          <li className="list-item">Hogar</li>
        </a>
        <a href="/">
          <li className="list-item">Moda</li>
        </a>

        <li className="list-item">Más</li>
        <a href="/">
          <li className="list-item">Contacto</li>
        </a>
      </ul> */