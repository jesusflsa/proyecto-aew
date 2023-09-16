import React from "react";

const Producto = ({ product, addToCart }) => {
  return (
    <div className="producto">
      <img src={product.picture} alt="" />
      <div className="content">
        <h3>{product.name}</h3>
        <div className="price">
          {product.discount ? (
            <>
              <del>{product.price}</del>
              <p>{product.discount}</p>
            </>
          ) : (
            <p>{product.price}</p>
          )}
        </div>
      </div>
      <button
        onClick={() => {
          addToCart(product);
        }}
      >
        Buy
      </button>
    </div>
  );
};

export default Producto;
