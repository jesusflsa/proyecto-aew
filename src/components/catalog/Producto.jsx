import React from "react";
import { useState } from "react";
import { PiShoppingCartFill, PiShoppingCart } from "react-icons/pi";

function Producto({ product, addToCart }) {
  const [cartIcon, setCartIcon] = useState(<PiShoppingCart />);
  const { name, image, price } = product;
  const discount = product.discount ?? product.discount;
  return (
    <div className="catalogo_item">
      <div className="item_img">
        <img className="item_img" src={image} alt={name} />
      </div>
      <div className="item_desc">
        <div className="item_data">
          <h3 className="item_name">{name}</h3>
          <span className="item_price">
            {product.discount ? (
              <>
                <p className="item_discount">S/.{discount.toFixed(2)}</p>
                <del className="item_value">S/.{price.toFixed(2)}</del>
              </>
            ) : (
              <p className="item_value">S/.{price.toFixed(2)}</p>
            )}
          </span>
        </div>
        <button
          className="item_add"
          onMouseOver={() => setCartIcon(<PiShoppingCartFill />)}
          onMouseOut={() => setCartIcon(<PiShoppingCart />)}
          onClick={() => addToCart(product)}
        >
          {cartIcon}
        </button>
      </div>
    </div>
  );
}

export default Producto;
