import { useState } from "react";
// Components
import Carrito from "./components/Carrito";
import Header from "./components/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// Pages
import Inicio from "./pages/Inicio";
import Catalogo from "./pages/Catalogo";
import Soporte from "./pages/Soporte";
import Pagar from "./pages/Pagar";
import Cuenta from "./pages/Cuenta";
import Registro from "./pages/Registro";

import CarritoProvider from "./hooks/useCarrito";

function App() {
  const [handleCarrito, setHandleCarrito] = useState(false);

  return (
    <BrowserRouter>
      <CarritoProvider>
        <Header
          handleCarrito={handleCarrito}
          setHandleCarrito={setHandleCarrito}
        />
        <main>
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/catalogo" element={<Catalogo />} />
            <Route path="/pagar" element={<Pagar />} />
            <Route path="/soporte" element={<Soporte />} />
            <Route path="/cuenta" element={<Cuenta />} />
            <Route path="/registrate" element={<Registro />} />
          </Routes>
        </main>
        <Carrito
          handleCarrito={handleCarrito}
          setHandleCarrito={setHandleCarrito}
        />
      </CarritoProvider>
    </BrowserRouter>
  );
}

export default App;
