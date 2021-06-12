import React from "react";
import { Link } from "react-router-dom";


import ItemCount from "../ItemCount/ItemCount";

const Item = ({ price,id,title,category,url,stock}) => {
  return (

<>
<div className="card center" id={id}>
            <Link to={`/item/${id}`}><img src={url} alt={title}  /></Link>
            <div className="card-body">
              <h5>{title}</h5>
              <p>{category}</p>
              
              <hr/>
           
              <b>{price}$</b> 
              <ItemCount stock={stock} init={0} item={{price,id,title,category,url,stock}}  />
          </div>
          </div>
  </> 
  );
};

export default Item;