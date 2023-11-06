import React from "react";
import ListaItem from "./CuentaCompraItem";
function ListaCompra() {
  return (
    <div className="purchase_list">
      <div className="purchase_list_date">
        <h4>Compra Nro {"Index"}</h4>
        <p>Fecha de compra: {"PurchaseDate"}</p>
      </div>
      <ListaItem />
      <div className="purchase_item_total">
        <p>
          Total: <span>S/. {"PurchaseTotal"}</span>
        </p>
      </div>
    </div>
  );
}

export default ListaCompra;
