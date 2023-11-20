import React from "react";
import { useCart } from "../hooks/useCarrito";
import CheckoutItem from "../components/CheckoutItem";

const CheckoutTable = () => {
  const carrito = useCart();
  return (
    <table className="cart-items">
      <thead>
        <tr>
          <td>Imagen</td>
          <td>Item</td>
          <td>Price</td>
        </tr>
      </thead>
      <tbody>
        {carrito.map((i) => (
          <CheckoutItem item={i} />
        ))}
      </tbody>
    </table>
  );
};

export default CheckoutTable;
