import React from "react";

function ListaItem({ product }) {
  return (
    <article className="purchase_item">
      <div className="item_data">
        <div className="data_img">
          <img src={product.image} alt="" />
        </div>
        <div className="data_specs">
          <div className="data_title">
            <h5>{product.name}</h5>
            <span>S/. {product.price.toFixed(2)} x uni.</span>
          </div>
          <p className="data_price">
            Total:
            <span> S/. {(product.price * product.quantity).toFixed(2)}</span>
          </p>
        </div>
      </div>
    </article>
  );
}

export default ListaItem;
