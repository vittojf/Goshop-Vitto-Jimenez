import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import ItemDetail from "../ItemDetail/ItemDetail";
import "../../styles/ItemDetailContainer/itemDetailContainer.css";
import Spinner from "../Spinner/Spinner";
import { getFirestore } from "../../firebase";

export default function ItemDetailContainer() {
  const [items, setItems] = useState([]);

  const { id } = useParams();

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    const db = getFirestore();
    const itemColletion = db.collection("items");
    const itemIdFilter = itemColletion.doc(id);
    itemIdFilter
      .get()
      .then((doc) => {
        !doc.exists && setLoading(true);

        setItems({ id: doc.id, ...doc.data() });
      })
      .catch((err) => {
        //console.log(err)
      })
      .finally(() => {
        setLoading(false);
      });
  }, [id]);
  //console.log(items)

  return (
    <>
      {loading ? (
        <div className="contain-spinner">
          <Spinner />
        </div>
      ) : (
        <ItemDetail product={items} />
      )}
    </>
  );
}
