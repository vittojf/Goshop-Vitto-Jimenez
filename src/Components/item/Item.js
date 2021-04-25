import React from "react";
import ItemCount from "../ItemCount/ItemCount";

const Item = ({ precio,id,title,category,url,stock}) => {
  return (
<>
<div className="card center" id={id}>
            <img src={url} alt={title} />
            <div className="card-body">
              <h5>{title}</h5>
              <p>{category}</p>
              
              <hr/>
           
              <b>{precio}$</b> 
              <ItemCount stock={stock} init={1}/>
          </div>
          </div>
  </> 
  );
};

export default Item;