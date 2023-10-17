import {
  useAddToCart,
  useRemoveFromCart,
  useUpdateQuantity,
} from "../../../context/carrito";

export function useCartItem(item) {
  const add = useAddToCart();
  const remove = useRemoveFromCart();
  const update = useUpdateQuantity();

  const addToCart = () => {
    add(item);
  };
  const removeFromCart = () => {
    remove(item);
  };
  const increaseQuantity = () => {
    update(item, item.quantity + 1);
  };
  const decreaseQuantity = () => {
    update(item, item.quantity - 1);
  };
  const updateQuantity = (quantity) => {
    update(item, quantity);
  };

  return {
    addToCart,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
    updateQuantity,
  };
}
