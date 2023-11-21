import React from "react";
import { PiShoppingCart } from "react-icons/pi";
import { useProducto } from "../hooks/useProducto";

function Producto({ product }) {
  const { producto, addToCart } = useProducto(product);
  const { name, image, price } = producto;
  return (
    <div title={name} className="catalogo_item">
      <div className="item_img">
        <img className="item_img" src={image} alt={name} />
      </div>
      <div className="item_desc">
        <div className="item_data">
          <h3 className="item_name">{name}</h3>
          <span className="item_price">
            <p className="item_value">S/.{price.toFixed(2)}</p>
          </span>
        </div>
        <button
          title="Agregar al carrito"
          className="item_add"
          onClick={addToCart}
        >
          <PiShoppingCart />
        </button>
      </div>
    </div>
  );
}

export default Producto;
