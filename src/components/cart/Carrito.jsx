import Item from "./Item";
import "../../css/carrito.css";
import { NavLink } from "react-router-dom";

function Carrito({ carrito, setCarrito, setHandleCarrito }) {
  /**
   * Aumentar la cantidad en el carrito
   */
  function addQuantity(product) {
    product.quantity++;
    setCarrito([...carrito]);
  }

  /**
   * Editar cantidad en el carrito
   */
  function editQuantity(product, value) {
    product.quantity = value;
    setCarrito([...carrito]);
  }

  /**
   * Disminuir la cantidad en el carrito
   */
  function removeQuantity(product) {
    if (product.quantity > 1) {
      product.quantity--;
      setCarrito([...carrito]);
    }
  }

  /**
   * Eliminar item del carrito
   */
  function deleteItem(product) {
    const updatedCart = carrito.filter((data) => !(data.name === product.name));
    setCarrito(updatedCart);
  }

  var valorTotal = 0; // Valor total de los productos

  return (
    <div id="carrito">
      {
        // Si el carrito tiene items, imprime un <p> con su cantidad
        carrito.length !== 0 && <p>{carrito.length}</p>
      }
      <div className="cart_products">
        {carrito.map((product) => {
          // Si descuento existe retorna descuento sino retorna precio
          const precio = product.discount ? product.discount : product.price;

          // El valor total incrementa en el precio por la cantidad de cada
          valorTotal += product.quantity * precio;
          return (
            <Item
              product={product}
              key={product.name}
              addQuantity={addQuantity}
              removeQuantity={removeQuantity}
              editQuantity={editQuantity}
              deleteItem={deleteItem}
            />
          );
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
