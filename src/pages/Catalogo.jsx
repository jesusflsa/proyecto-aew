import { NavLink } from "react-router-dom";
import Producto from "../components/catalog/Producto";

const Catalogo = ({ products, addToCart }) => (
  <section>
    <NavLink to="/catalogo/hombres">Hombres</NavLink>
    <NavLink to="/catalogo/mujeres">Mujeres</NavLink>
    <NavLink to="/catalogo/ninos">Niños</NavLink>
    <div className="productos">
      {products.map((product) => {
        return (
          <Producto
            key={product.name}
            product={product}
            addToCart={addToCart}
          />
        );
      })}
    </div>
  </section>
);

export default Catalogo;
