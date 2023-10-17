import React from "react";

function ListaItem() {
  return (
    <article className="purchase_item">
      <div className="item_data">
        <div className="data_img">
          <img src="" alt="" />
        </div>
        <div className="data_specs">
          <div className="data_title">
            <h5>{"itemName"}</h5>
            <span>S/. {"itemPricePerUni"} x uni.</span>
          </div>
          <p className="data_price">
            Total: <span>S/. {"itemTotalPrice"}</span>
          </p>
        </div>
      </div>
    </article>
  );
}

export default ListaItem;
