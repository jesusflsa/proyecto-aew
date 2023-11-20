import React from "react";

export default function CheckoutItem({ item }) {
  return (
    <tr>
      <td>
        <img className="item-img" src={item.image} alt="" />
      </td>
      <td>
        <p className="game-name">{item.name}</p>
      </td>
      <td>
        <p className="item-price">${(item.price * item.quantity).toFixed(2)}</p>
      </td>
    </tr>
  );
}
