import { useEffect, useState } from "react";
import { useCart, useCleanCart } from "../hooks/useCarrito";

import "../css/pagar.css";
import CheckoutTable from "../components/CheckoutTable";
import { useNavigate } from "react-router-dom";
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
    setTimeout(() => navigate("/catalogo"), 500);
  };

  const pricetotal =
    carrito.length !== 0
      ? carrito.map((p) => p.price * p.quantity).reduce((a, b) => a + b)
      : 0;

  return (
    <>
      <section className="cart-content">
        <article>
          <h3>Shopping Cart</h3>
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
              Empty cart
            </p>
          )}
        </article>
        <article>
          <h3>Orden Summary</h3>
          <div className="orden-summary">
            <div className="summary-detail">
              <p>SUBTOTAL</p>
              <span>${pricetotal.toFixed(2)}</span>
            </div>
            <div className="summary-detail">
              <p>SHIPPING</p>
              <span>$0.00</span>
            </div>
            <div className="summary-detail">
              <p>ESTIMATED TAX</p>
              <span>${(pricetotal * 0.06).toFixed(2)}</span>
            </div>
            <hr />
            <div className="summary-detail">
              <span>TOTAL</span>
              <span>${(pricetotal * 1.06).toFixed(2)}</span>
            </div>
            {carrito.length != 0 ? (
              <button className="summary-checkout" onClick={completePurchase}>
                Pagar
              </button>
            ) : (
              <button className="summary-checkout" disabled>
                Pagar
              </button>
            )}
          </div>
        </article>
      </section>
    </>
  );
}

export default Pagar;
