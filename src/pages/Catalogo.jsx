import { NavLink } from "react-router-dom";
import Producto from "../components/catalog/Producto";
import "../css/catalogo.css";

function Catalogo({ products, addToCart }) {
  const { zapatillasAdidas, polosPuma } = products;
  return (
    <section id="contenido">
      <div className="l-contenido"></div>
      <div className="r-contenido">
        <div className="select">
          <select id="filtrar">
            <option value="destacados">Destacados</option>
            <option value="menor-precio">Menor a mayor precio</option>
            <option value="mayor-precio">Mayor a menor precio</option>
          </select>
        </div>
        <div id="catalogoContenedor">
          {zapatillasAdidas.map((product) => {
            return (
              <Producto
                key={product.code}
                product={product}
                addToCart={addToCart}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Catalogo;
