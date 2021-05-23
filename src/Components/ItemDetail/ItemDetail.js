import React from "react";


import ItemCount from "../ItemCount/ItemCount";

const ItemDetail = ({ product }) => {

const {id,url,title,price,categoryId,description,stock} = product
  
  return (
    <div className="container-detail">
      
          <div className="card card-detail" id={id}>
            <div className="card-img-detail">
              <img src={url} alt={title} />
            </div>
            <div className="card-body">
              <h5>{title}</h5>
              <p>{categoryId}</p>
              <p>{description}</p>
              <hr />

              <b>{price}$</b>
              <ItemCount stock={stock} init={0} item={{id,url,title,categoryId,price,stock,description}}/>
          
            </div>
          </div>

    </div>
  );
 

};

export default ItemDetail;


