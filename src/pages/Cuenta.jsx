import React from "react";
import "../css/cuenta.css";
import AccountInfo from "../components/CuentaInfo";
import ListaCompra from "../components/CuentaCompra";

function Cuenta() {
  return (
    <div className="unknown_container">
      <AccountInfo />
      <section className="purchases_container">
        <h3>Historial de compras</h3>
        <ListaCompra />
      </section>
    </div>
  );
}

export default Cuenta;
