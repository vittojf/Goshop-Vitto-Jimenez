import React, { useState, useEffect } from "react";
import { getFirestore } from "../../firebase";
import "../../styles/Order/Order.css";
import OrdersSearch from "../OrdersSearch/OrdersSearch";
import Spinner from "../Spinner/Spinner";

export default function ItemOrderContainer() {
  const [loading, setLoading] = useState(false);
  const [verific, setVerific] = useState(false);
  const [idOrd, setIdOrd] = useState("");
  const [itemOrder, setItemOrder] = useState([]);

  const handleChange = (e) => {
    setIdOrd(e.target.value);
  };
  const db = getFirestore();
  const ordersColletion = db.collection("orders");

  const onfilter = () => {
    if (idOrd) {
      setLoading(true);
      const ordersFilter = ordersColletion.doc(idOrd);
      ordersFilter
        .get()
        .then((doc) => {
          !doc.exists && setLoading(true);

          setItemOrder({ id: doc.id, ...doc.data() });
          doc.exists ? setVerific(true) : setVerific(false);
        })
        .catch((err) => {
          //console.log("Error al recolectar items", err)
        })
        .finally(() => {
          setLoading(false);
        });
    }
  };
  useEffect(() => {}, [itemOrder]);

  return (
    <React.Fragment>
      <div className="order">
        <div className="order-content">
          <div className="orders-search">
            <h3>Ingresar numero de factura</h3>

            <input
              type="text"
              name="id"
              onChange={(e) => handleChange(e)}
              placeholder="Ej. 0gw00VXvKG37PuM..."
            />
            <button onClick={onfilter}>Buscar</button>
          </div>
        
        </div>
        
      </div>
      <div className="orders-items">
        {loading ? (
          <Spinner />
        ) : verific ? (
          <OrdersSearch itemOrder={itemOrder} />
        ) : (
          "no hay resultados"
        )}
      </div>
    </React.Fragment>
  );
}
