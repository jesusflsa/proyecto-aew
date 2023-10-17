import "../css/inicio.css";
import Carrousel from "../components/home/Carrousel";
import Reviews from "../components/home/Reviews";
import Sponsors from "../components/home/Sponsors";
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
