import Producto from "../components/Producto";
import products from "../assets/ordenado.json";

import "../css/catalogo.css";
import { NavLink, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function Catalogo() {
  const { id } = useParams();

  useEffect(() => {
    !!id ? getItems() : getAllItems();
  }, [id]);

  const [productList, setProductList] = useState([]);

  function getItems() {
    setProductList(products[id]);
  }

  function getAllItems() {
    let arr = [];
    Object.values(products).forEach((prod) => {
      arr = arr.concat(prod);
    });

    setProductList(arr);
  }

  return (
    <section id="contenido">
      <div className="filters">
        {!id ? (
          Object.keys(products).map((k) => (
            <NavLink to={"/catalogo/" + k}>{k.toUpperCase()}</NavLink>
          ))
        ) : (
          <NavLink to={"/catalogo"}>Volver</NavLink>
        )}
      </div>
      <div id="catalogoContenedor">
        {!!productList ? (
          productList.map((prod) => <Producto key={prod.code} product={prod} />)
        ) : (
          <p
            style={{
              textAlign: "center",
              fontStyle: "italic",
              gridColumn: "autofill / 1",
            }}
          >
            No hay productos existentes
          </p>
        )}
      </div>
    </section>
  );
}

export default Catalogo;
