import React from "react";
import ListaItem from "./CuentaCompraItem";
function ListaCompra({ purchase, index }) {
  const date = new Date(purchase.date);
  var total = 0;
  purchase.products.forEach((p) => {
    total += p.price * p.quantity;
  });
  return (
    <div className="purchase_list">
      <div className="purchase_list_date">
        <h4>Compra Nro {index}</h4>
        <p>Fecha de compra: {date.toLocaleDateString("es-ES")}</p>
      </div>
      {purchase.products.map((product) => (
        <ListaItem product={product} />
      ))}
      <div className="purchase_item_total">
        <p>
          Total: <span>S/. {total.toFixed(2)}</span>
        </p>
      </div>
    </div>
  );
}

export default ListaCompra;
