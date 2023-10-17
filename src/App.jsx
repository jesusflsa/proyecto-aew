import { useEffect, useState } from "react";
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

import CarritoProvider from "./context/carrito";

function App() {
  return (
    <BrowserRouter>
      <CarritoProvider>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/catalogo" element={<Catalogo />} />
            {/* <Route path="/pagar" element={<Pagar carrito={carrito} />} />
            <Route path="/soporte" element={<Soporte />} />
            <Route path="/cuenta" element={<Cuenta />} /> */}
          </Routes>
        </main>
        <Carrito />
      </CarritoProvider>
    </BrowserRouter>
  );
}

export default App;
