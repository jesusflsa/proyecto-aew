import { useAddToCart } from "./useCarrito";

export function useProducto(item) {
  const add = useAddToCart();
  const producto = {
    code: item.code,
    name: item.name,
    image: item.image,
    price: item.price,
  };

  const addToCart = () => {
    add(item);
  };
  return { addToCart, producto };
}
