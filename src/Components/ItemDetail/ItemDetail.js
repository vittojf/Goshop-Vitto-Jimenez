import React from "react";


import ItemCount from "../ItemCount/ItemCount";

const ItemDetail = ({ product }) => {

 
  
  return (
    <div className="container-detail">
      {product.map(
        ({ id, url, title, category, precio, stock, description }) => (
          <div key={id} className="card card-detail" id={id}>
            <div className="card-img-detail">
              <img src={url} alt={title} />
            </div>
            <div className="card-body">
              <h5>{title}</h5>
              <p>{category}</p>
              <p>{description}</p>
              <hr />

              <b>{precio}$</b>
              <ItemCount stock={stock} init={0} item={{id,url,title,category,precio,stock,description}}/>
          
            </div>
          </div>
        )
      )}
    </div>
  );
 

};

export default ItemDetail;


