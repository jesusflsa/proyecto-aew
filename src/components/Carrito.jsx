import Item from "./CarritoItem";
import "../css/carrito.css";
import { NavLink } from "react-router-dom";
import { BiXCircle, BiSolidXCircle } from "react-icons/bi";
import { useEffect, useState } from "react";
import { useCart } from "../hooks/useCarrito";

function Carrito({ setHandleCarrito, handleCarrito }) {
  const carrito = useCart();

  const [carritoBtnHover, setCarritoBtnHover] = useState(false);
  const [totalPagar, setTotalPagar] = useState(0);

  useEffect(() => {
    var total = 0;
    carrito.forEach((item) => {
      total += item.price * item.quantity;
    });
    setTotalPagar(total);
  }, [carrito]);

  return (
    <div
      id="carrito"
      style={{ transform: `translateX(${handleCarrito ? "0" : "105%"})` }}
    >
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
        <NavLink
          to="/pagar"
          onClick={() => setHandleCarrito(false)}
          className="carrito_bottom-btn"
        >
          Procesar
        </NavLink>
      </div>
    </div>
  );
}

export default Carrito;
