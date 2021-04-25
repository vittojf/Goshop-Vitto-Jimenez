import React from "react";
import Item from "../item/Item";

const ItemList = ({ product }) => {
  return (
    <div className="container-item">
      {product.map((el) => (
        <Item
          key={el.id}
          precio={el.precio}
          id={el.id}
          title={el.title}
          category={el.category}
          url={el.url}
          stock={el.stock}
        />
      ))}
    </div>
  );
};

export default ItemList;
