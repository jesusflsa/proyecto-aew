import { NavLink } from "react-router-dom";
import { PiShoppingCartFill, PiShoppingCart } from "react-icons/pi";
import "../css/header.css";
import logo from "/logo.png";
import { BiUser } from "react-icons/bi";
import { useCart } from "../hooks/useCarrito";

const routes = [
  { name: "Inicio", route: "/" },
  { name: "Catálogo", route: "/catalogo" },
  { name: "Soporte", route: "/soporte" },
];

function Header({ handleCarrito, setHandleCarrito }) {
  const account = JSON.parse(localStorage.getItem("account"));
  const user = account?.username || null;

  const cart = useCart();
  return (
    <header>
      <nav className="header_navbar">
        <ul>
          {routes.map((route) => {
            return (
              <li key={route.name}>
                <NavLink to={route.route}>{route.name}</NavLink>
              </li>
            );
          })}
        </ul>
      </nav>
      <a href="/" className="header_logo">
        <img src={logo} alt="Logo" />
      </a>
      <div id="header_login">
        {user ? (
          <NavLink to="/cuenta">
            <BiUser />
            <span>{user}</span>
          </NavLink>
        ) : (
          <NavLink to="/registrate">
            <BiUser />
            <span>Regístrate</span>
          </NavLink>
        )}
      </div>
      <div className="carrito_container">
        {!!cart.length && (
          <div className="carrito-counter">
            <span>{cart.length}</span>
          </div>
        )}
        <button
          className="carrito-btn"
          onClick={() => setHandleCarrito((prev) => !prev)}
        >
          {handleCarrito ? <PiShoppingCartFill /> : <PiShoppingCart />}
        </button>
      </div>
    </header>
  );
}

export default Header;
