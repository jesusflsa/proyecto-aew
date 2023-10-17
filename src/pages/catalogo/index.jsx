import Producto from "./components/Producto";
import products from "../../assets/catalogo.json";

import "./catalogo.css";

function Catalogo() {
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
            return <Producto key={product.code} product={product} />;
          })}
        </div>
      </div>
    </section>
  );
}

export default Catalogo;
