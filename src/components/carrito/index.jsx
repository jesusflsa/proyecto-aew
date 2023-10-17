import Item from "./components/Item";
import "./carrito.css";
import { NavLink } from "react-router-dom";
import { BiXCircle, BiSolidXCircle } from "react-icons/bi";
import { useState } from "react";
import { useCart } from "../../context/carrito";

function Carrito() {
  const [carritoBtnHover, setCarritoBtnHover] = useState(false);
  const carrito = useCart();
  return (
    <div id="carrito">
      <div className="carrito_header">
        <button
          className="carrito_header-icon"
          onClick={() => setHandleCarrito(false)}
          onMouseOver={() => setCarritoBtnHover(true)}
          onMouseOut={() => setCarritoBtnHover(false)}
        >
          {carritoBtnHover ? <BiSolidXCircle /> : <BiXCircle />}
        </button>
      </div>
      <div className="cart_products">
        {carrito.map((product) => {
          return <Item product={product} key={product.code} />;
        })}
      </div>
      <div className="carrito_bottom">
        {/* <p>Valor total: {valorTotal.toFixed(2)}</p> */}
        <NavLink
          to="/pagar"
          onClick={() => {
            setHandleCarrito("cerrado");
          }}
          className="carrito_bottom-btn"
        >
          Procesar
        </NavLink>
      </div>
    </div>
  );
}

export default Carrito;
