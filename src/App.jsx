import { useEffect, useState } from "react";
import products from "./assets/products.json";
// Components
import Carrito from "./components/cart/Carrito";
import Header from "./Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// Pages
import Catalogo from "./pages/Catalogo";
import Inicio from "./pages/Inicio";
import Pagar from "./pages/Pagar";

function App() {
  const data = JSON.parse(localStorage.getItem("products"));
  const [carrito, setCarrito] = useState(data ? data : []);

  useEffect(() => {
    localStorage.setItem("products", JSON.stringify(carrito));
  }, [carrito]);

  /**
   * Agregar producto al carrito
   * @param {product} product
   */

  function addToCart(product) {
    const data = carrito.find((data) => data.name === product.name);
    if (data) {
      data.quantity++;
      setCarrito([...carrito]);
    } else {
      const price = product.discount ?? product.price;
      setCarrito([
        ...carrito,
        {
          name: product.name,
          price: price,
          picture: product.picture,
          quantity: 1,
        },
      ]);
    }
  }

  const [handleCarrito, setHandleCarrito] = useState("cerrado");
  useEffect(() => {
    /* Manipulacion del carrito */
    const carrito = document.getElementById("carrito");
    if (handleCarrito === "abierto") {
      carrito.style.transform = "translateX(0)";
    } else {
      carrito.style.transform = "translateX(calc(100% + 5px))";
    }
  }, [handleCarrito]);

  return (
    <BrowserRouter>
      <Header
        handleCarrito={handleCarrito}
        setHandleCarrito={setHandleCarrito}
      />
      <main>
        <Routes>
          <Route path="/" element={<Inicio></Inicio>} />
          <Route
            path="/catalogo"
            element={<Catalogo products={products} addToCart={addToCart} />}
          />
          <Route path="/catalogo/hombres" />
          <Route path="/pagar" element={<Pagar carrito={carrito} />} />
        </Routes>
      </main>
      <Carrito
        carrito={carrito}
        setCarrito={setCarrito}
        setHandleCarrito={setHandleCarrito}
      />
    </BrowserRouter>
  );
}

export default App;
