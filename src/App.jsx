import { useEffect, useState } from "react";
import products from "./assets/catalogo.json";
// Components
import Carrito from "./components/carrito";
import Header from "./components/header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// Pages
import Inicio from "./pages/inicio";
import Catalogo from "./pages/catalogo";
import Soporte from "./pages/soporte";
import Pagar from "./pages/pagar";
import Cuenta from "./pages/cuenta";

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
    console.log(product);
    const data = carrito.find((data) => data.code === product.code);
    if (data) {
      data.quantity++;
      setCarrito([...carrito]);
    } else {
      const price = product.discount ?? product.price;
      setCarrito([
        ...carrito,
        {
          code: product.code,
          name: product.name,
          price: product.price,
          image: product.image,
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
        <Carrito
          carrito={carrito}
          setCarrito={setCarrito}
          setHandleCarrito={setHandleCarrito}
        />
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route
            path="/catalogo"
            element={<Catalogo products={products} addToCart={addToCart} />}
          />
          <Route path="/pagar" element={<Pagar carrito={carrito} />} />
          <Route path="/soporte" element={<Soporte />} />
          <Route path="/cuenta" element={<Cuenta />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
