import { useAddToCart } from "../../../context/carrito";

export function useProducto(item) {
  const add = useAddToCart();
  const producto = {
    code: item.code,
    name: item.name,
    image: item.image,
  };

  if (item.discount) {
    producto.price = item.discount.toFixed(2);
    producto.oldPrice = item.price.toFixed(2);
  } else {
    producto.price = item.price.toFixed(2);
  }

  const addToCart = () => {
    add(item);
  };
  return { addToCart, producto };
}
