import Producto from "../components/Producto";
import products from "../assets/catalogo.json";

import "../css/catalogo.css";
import { useParams } from "react-router-dom";

function Catalogo() {
  const { id } = useParams();

  function getItems() {
    return products[id];
  }
  function getAllItems() {
    let arr = [];
    Object.entries(products).forEach((prod) => {
      const prods = prod[1];
      arr = arr.concat(prods);
    });

    let currentIndex = arr.length,
      randomIndex;

    while (currentIndex > 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      [arr[currentIndex], arr[randomIndex]] = [
        arr[randomIndex],
        arr[currentIndex],
      ];
    }
    return arr;
  }
  const data = !!id ? getItems() : getAllItems();
  return (
    <section id="contenido">
      <div id="catalogoContenedor">
        {data ? (
          data.map((dat) => <Producto product={dat} />)
        ) : (
          <p>No hay productos</p>
        )}
      </div>
    </section>
  );
}

export default Catalogo;
