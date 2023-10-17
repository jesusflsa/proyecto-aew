import "./inicio.css";
import Carrousel from "./components/Carrousel";
import Reviews from "./components/reviews";
import Sponsors from "./components/Sponsors";
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
