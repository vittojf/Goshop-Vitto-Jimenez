import React, { useState, useEffect } from "react";
import ItemList from "../ItemList/ItemList";
import "../../styles/itemListContainer/itemListContainer.css";
import Spinner from "../Spinner/Spinner";
import { getFirestore } from "../../firebase";
import { useParams } from "react-router";

export default function ItemListContainer({ greeting }) {
  const [items, setItems] = useState([]);
  const { categoryId } = useParams();
  const [loading, setLoading] = useState(false);


  //RECIBE Y SETEA LOS PRODUCTOS EN FIREBASE + FILTRADO POR CATEGORÍA 
  useEffect(() => {
    setLoading(true);
    
    //se obtiene la base de datos (firebase)
    const db = getFirestore();
    let itemColletion = '';


    //Filtra por categoría
    if (categoryId) {

      //Setea los productos por categoría
      itemColletion = db
        .collection("items")
        .where("categoryId", "==", categoryId);
    } else {
      //Setea Todos los productos
      itemColletion = db.collection("items");
    }

    itemColletion
      .get()
      .then((querySnapshot) => {
        querySnapshot.size === 0
          ? console.log("no hay items")
          : setItems(
              querySnapshot.docs.map((el) => ({ id: el.id, ...el.data() }))
            );

        //console.log(querySnapshot.docs.map((el) => ({ id: el.id, ...el.data() })) );
      })
      .catch((err) => console.log("Error al recolectar items", err))
      .finally(() => {
        setLoading(false);
      });
  }, [categoryId]);

  return (
    <section className="container">
      {loading ? (
        <Spinner />
      ) : categoryId ? (
        <ItemList
          product={items}
        />
      ) : (
        <ItemList product={items} />
      )}
    </section>
  );
}
