import React from "react";
import Item from "../item/Item";

const ItemList = ({ product }) => {

  return (
    <div className="container-item">
      {product.map((el) => (

        <Item
          key={el.id}
          price={el.price}
          id={el.id}
          title={el.title}
          category={el.categoryId}
          url={el.url}
          stock={el.stock}
        />
      ))}
    </div>
  );
};

export default ItemList;
