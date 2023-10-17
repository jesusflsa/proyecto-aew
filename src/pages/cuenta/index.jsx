import React from "react";
import "./cuenta.css";
import AccountInfo from "./components/AccountInfo";
import ListaCompra from "./components/ListaCompra";

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
