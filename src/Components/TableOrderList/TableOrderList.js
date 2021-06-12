import React from 'react';

export default function TableOrderList({items}){
    return(<>
    
    <table className="row-1">
        <thead>

            <tr>
              <th></th>
              <th></th>
              <th></th>
            </tr>
        </thead>
        <tbody>

            <tr>
              <td style={{ fontSize: "15pt" }}>
                <i className="fa fa-user" aria-hidden="true"></i>
              </td>
              <td style={{ fontSize: "15pt" }}>
                <i className="fa fa-truck" aria-hidden="true"></i>
              </td>
              <td style={{ fontSize: "15pt" }}>
                <i className="fa fa-file" aria-hidden="true"></i>
              </td>
            </tr>
            <tr>
              <td>
                <b>Usuario:</b> {items.buyer.name}
              </td>
              <td style={{color:!items.status?'red':'blue'}}>
                <b>Envío:</b>{" "}
                {items.status ? "recibido" : "no recibido"}
              </td>
              <td>
                <b>Productos:</b> {items.itemsCount}
              </td>
            </tr>
        </tbody>
          </table>
          <hr />
          <h3>Lista de productos</h3>
    <table className="item-row">
      <thead>

        <tr>
            <th>Producto</th>
            <th>Cantidad</th>
            <th>Price</th>
        </tr>
      </thead>
<tbody>

        {items.items.map(({title,price,quantity})=>(<tr  key={title}>
            <td>{title}</td>
            <td>{quantity}</td>
            <td>${price}</td>
        </tr>))
        
        }
</tbody>
    </table>
    </>)
}