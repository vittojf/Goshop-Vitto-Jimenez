import React from "react";
const ListItem = ({links}) => {


  return (

    <ul className="list">

    {links.map((e)=><a href="/" key={e} ><li>{e}</li></a>)}
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