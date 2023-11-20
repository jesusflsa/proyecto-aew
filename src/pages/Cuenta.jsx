import React, { useEffect, useState } from "react";
import "../css/cuenta.css";
import AccountInfo from "../components/CuentaInfo";
import ListaCompra from "../components/CuentaCompra";

function Cuenta() {
  const [purchaseHistory, setPurchaseHistory] = useState([]);
  useEffect(() => {
    const data = localStorage.getItem("purchase-history");
    data && setPurchaseHistory(JSON.parse(data));
  }, []);
  return (
    <div className="unknown_container">
      <AccountInfo />
      <section className="purchases_container">
        <h3>Historial de compras</h3>
        {purchaseHistory.map((purchase, index) => (
          <ListaCompra
            purchase={purchase}
            index={index + 1}
            key={`Compra ${index + 1}`}
          />
        ))}
      </section>
    </div>
  );
}

export default Cuenta;
