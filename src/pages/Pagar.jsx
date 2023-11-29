import { useEffect, useState } from "react";
import { useCart, useCleanCart } from "../hooks/useCarrito";

import "../css/pagar.css";
import CheckoutTable from "../components/CheckoutTable";
import { NavLink, useNavigate } from "react-router-dom";
function Pagar() {
  const carrito = useCart();
  const cleanCart = useCleanCart();
  const [handlePurchase, setHandlePurchase] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const data = localStorage.getItem("purchase-history");
    data && setHandlePurchase(JSON.parse(data));
  }, []);

  useEffect(() => {
    localStorage.setItem("purchase-history", JSON.stringify(handlePurchase));
  }, [handlePurchase]);

  const completePurchase = () => {
    const purchase = {
      date: new Date(),
      products: carrito,
    };
    cleanCart();
    setHandlePurchase([...handlePurchase, purchase]);
    setTimeout(() => navigate("/cuenta"), 500);
  };

  const pricetotal =
    carrito.length !== 0
      ? carrito.map((p) => p.price * p.quantity).reduce((a, b) => a + b)
      : 0;

  function Button() {
    const user = localStorage.getItem("account");
    if (!user) {
      return (
        <NavLink className="summary-checkout" to="/registrate">
          Regístrate
        </NavLink>
      );
    }
    if (carrito.length !== 0) {
      return (
        <button className="summary-checkout" onClick={completePurchase}>
          Pagar
        </button>
      );
    }
    if (carrito.length === 0) {
      return (
        <button className="summary-checkout" disabled>
          Pagar
        </button>
      );
    }
  }
  return (
    <>
      <section className="cart-content">
        <article>
          <h3>Carrito de Compras</h3>
          <hr />
          {carrito.length ? (
            <CheckoutTable />
          ) : (
            <p
              style={{
                fontStyle: "italic",
                marginTop: "30px",
                textAlign: "center",
              }}
            >
              Carrito Vacio.
            </p>
          )}
        </article>
        <article>
          <h3>Resumen de Compra</h3>
          <div className="orden-summary">
            <div className="summary-detail">
              <p>SUBTOTAL</p>
              <span>${pricetotal.toFixed(2)}</span>
            </div>
            <div className="summary-detail">
              <p>ENVÍO</p>
              <span>$0.00</span>
            </div>
            <div className="summary-detail">
              <p>IMPUESTO ESTIMADO</p>
              <span>${(pricetotal * 0.06).toFixed(2)}</span>
            </div>
            <hr />
            <div className="summary-detail">
              <span>TOTAL</span>
              <span>${(pricetotal * 1.06).toFixed(2)}</span>
            </div>
            {<Button />}
          </div>
        </article>
      </section>
    </>
  );
}

export default Pagar;
