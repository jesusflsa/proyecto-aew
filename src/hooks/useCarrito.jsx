import { useEffect } from "react";
import { useContext } from "react";
import { createContext, useState } from "react";

const cartContext = createContext();
const addToCartContext = createContext();
const updateQuantityContext = createContext();
const removeFromCartContext = createContext();
const cleanCartContext = createContext();

export function useCart() {
  return useContext(cartContext);
}
export function useAddToCart() {
  return useContext(addToCartContext);
}
export function useUpdateQuantity() {
  return useContext(updateQuantityContext);
}
export function useRemoveFromCart() {
  return useContext(removeFromCartContext);
}
export function useCleanCart() {
  return useContext(cleanCartContext);
}
export function CarritoProvider({ children }) {
  const [cart, setCart] = useState([]);
  useEffect(() => {
    const data = localStorage.getItem("products");
    data && setCart(JSON.parse(data));
  }, []);

  useEffect(() => {
    localStorage.setItem("products", JSON.stringify(cart));
  }, [cart]);

  function verifyItem(item) {
    return !!cart.find((product) => product.code === item.code);
  }
  function addToCart(item) {
    verifyItem(item)
      ? updateQuantity(item, item.quantity + 1)
      : setCart([...cart, { ...item, quantity: 1 }]);
  }
  function updateQuantity(item, quantity) {
    item.quantity = quantity;
    setCart([...cart]);
  }
  function removeFromCart(item) {
    const newCart = cart.filter((product) => product.code !== item.code);
    setCart(newCart);
  }

  function cleanCart() {
    setCart([]);
  }
  return (
    <cartContext.Provider value={cart}>
      <addToCartContext.Provider value={addToCart}>
        <updateQuantityContext.Provider value={updateQuantity}>
          <removeFromCartContext.Provider value={removeFromCart}>
            <cleanCartContext.Provider value={cleanCart}>
              {children}
            </cleanCartContext.Provider>
          </removeFromCartContext.Provider>
        </updateQuantityContext.Provider>
      </addToCartContext.Provider>
    </cartContext.Provider>
  );
}
