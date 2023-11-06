import "../css/inicio.css";
import Carrousel from "../components/Carrousel";
import Reviews from "../components/Reviews";
import Sponsors from "../components/Sponsors";
const Inicio = () => {
  return (
    <>
      <Carrousel />
      <Sponsors />
      <Reviews />
    </>
  );
};

export default Inicio;
