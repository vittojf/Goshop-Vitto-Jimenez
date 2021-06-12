import React, { createRef,useState } from "react";

import ReactToPdf from "react-to-pdf";
import ConfirmOrder from "../ConfirmOrder/ConfirmOrder";
import TableOrderList from "../TableOrderList/TableOrderList";

export default function OrdersSearch({ itemOrder }) {
 // console.log(itemOrder.buyer);
  const ref = createRef();
  const options = {
    orientation: "l",
    unit: "px",
    format: "a4",
    putOnlyUsedFonts: true,
    floatPrecision: 16,
  };
  const [show, setShow] = useState(false);

const handleClose = ()=>{
    setShow(false)
}
const handleOpen = ()=>{
    setShow(true)
}
  return (
    <React.Fragment>
      <div className="fact-order" ref={ref}>
        <h1>Detalle de la Compra</h1>
        <div className="fact-head">
          
          <h3>Nro. Orden: {itemOrder.id}</h3>
        </div>
        <div className="fact-body">
          

          <TableOrderList items={itemOrder}></TableOrderList>
        </div>
      <h2>Total: ${itemOrder.itotal}</h2>
      </div>
      <ReactToPdf targetRef={ref} filename="Factura.pdf" options={options}>
        
        {({ toPdf }) => <button onClick={toPdf} className="btn-generator">Generar Factura PDF</button>}
      </ReactToPdf>
      {
!itemOrder.status&&<button className="btn-generator btn-re" onClick={handleOpen}>Confirmar Recibo</button>
      }
<ConfirmOrder phone={itemOrder.buyer.phone} id={itemOrder.id} handleClose={handleClose}  show={show}/>      
    </React.Fragment>
  );
}

