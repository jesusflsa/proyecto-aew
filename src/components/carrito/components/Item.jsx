import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { BsTrash3 } from "react-icons/bs";
import { useCartItem } from "../hooks/useCartItem";
const Item = ({ product }) => {
  const { increaseQuantity, decreaseQuantity, updateQuantity, removeFromCart } =
    useCartItem(product);

  const total = product.price * product.quantity;
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
            {product.discount ? (
              <>
                <p className="price">S/. {product.price.toFixed(2)}</p>
                <p className="discount">S/. {product.price.toFixed(2)}</p>
              </>
            ) : (
              <p className="price">S/. {product.price.toFixed(2)}</p>
            )}
          </div>

          <button className="item_data-delete" onClick={removeFromCart}>
            <BsTrash3 />
          </button>
        </div>

        {/* Data Quantity */}
        <div className="item_data-bottom">
          <div className="item_data-quantity">
            <button
              disabled={product.quantity > 1 ? false : true}
              onClick={decreaseQuantity}
            >
              <AiOutlineMinus />
            </button>
            <input
              onChange={(e) => {
                const valor = e.target.value;
                if (valor % 1 === 0) {
                  (valor > 0) & (valor <= 99) &&
                    updateQuantity(parseInt(valor));
                }
              }}
              value={product.quantity}
            />
            <button
              disabled={product.quantity < 99 ? false : true}
              onClick={increaseQuantity}
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
