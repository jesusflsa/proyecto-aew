import { useEffect, useState } from "react";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { BsTrash3 } from "react-icons/bs";

const Item = ({
  product,
  addQuantity,
  editQuantity,
  removeQuantity,
  deleteItem,
}) => {
  const [cantidad, setCantidad] = useState(product.quantity);

  useEffect(() => {
    setCantidad(product.quantity);
  }, [product.quantity]);

  const total = product.quantity * product.price;
  return (
    <div className="cart_item">
      <div className="item_image">
        <img src={product.image} alt={product.name} />
      </div>

      {/* Data Item */}
      <div className="item_data">
        <div className="item_data-top">
          <div className="item_data-name">
            <p className="name">{product.name}</p>
            <p className="price">S/. {product.price.toFixed(2)}</p>
          </div>

          <button
            className="item_data-delete"
            onClick={() => deleteItem(product)}
          >
            <BsTrash3 />
          </button>
        </div>

        {/* Data Quantity */}
        <div className="item_data-bottom">
          <div className="item_data-quantity">
            <button
              disabled={product.quantity > 1 ? false : true}
              onClick={() => removeQuantity(product)}
            >
              <AiOutlineMinus />
            </button>
            <input
              onChange={(e) => {
                const valor = e.target.value;
                if (valor % 1 === 0) {
                  (valor > 0) & (valor <= 99) &&
                    editQuantity(product, parseInt(valor));
                  setCantidad(valor);
                }
              }}
              value={cantidad}
            />
            <button
              disabled={product.quantity < 99 ? false : true}
              onClick={() => addQuantity(product)}
            >
              <AiOutlinePlus />
            </button>
          </div>
          {/* Data Price */}
          <p className="item_total">S/. {total.toFixed(2)}</p>
        </div>
      </div>
    </div>
  );
};

export default Item;
