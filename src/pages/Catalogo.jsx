import Producto from "../components/Producto";
import products from "../assets/catalogo.json";

import "../css/catalogo.css";

function Catalogo() {
  const { zapatillasAdidas, polosPuma } = products;
  return (
    <section id="contenido">
      <div id="catalogoContenedor">
        {zapatillasAdidas.map((product) => {
          return <Producto key={product.code} product={product} />;
        })}
      </div>
    </section>
  );
}

export default Catalogo;
