import "../css/inicio.css";
import Carrousel from "../components/Carrousel";
import Reviews from "../components/Reviews";
import Colection from '../components/Colection'
const Inicio = () => {
  return (
    <>
      <Carrousel />
      <Colection />
      <Reviews />
    </>
  );
};

export default Inicio;
