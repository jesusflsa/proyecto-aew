import { NavLink } from "react-router-dom";
import { PiShoppingCartFill, PiShoppingCart } from "react-icons/pi";
import "./css/header.css";

function Header({ handleCarrito, setHandleCarrito }) {
  return (
    <header>
      <nav className="navbar">
        <NavLink to="/">Inicio</NavLink>
        <NavLink to="/catalogo">Catalogo</NavLink>
        <NavLink to="/soporte">Soporte</NavLink>
      </nav>
      <a href="/" className="header_logo">
        <img src="img/logo.png" alt="Logo" />
      </a>
      <div className="carrito_container">
        <button
          className="carrito-btn"
          onClick={() => {
            handleCarrito === "abierto"
              ? setHandleCarrito("cerrado")
              : setHandleCarrito("abierto");
          }}
        >
          {handleCarrito === "abierto" ? (
            <PiShoppingCartFill />
          ) : (
            <PiShoppingCart />
          )}
        </button>
      </div>
    </header>
  );
}

export default Header;
