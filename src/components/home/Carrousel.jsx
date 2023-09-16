import carrouselImages from "./Images";
import { HiOutlineChevronLeft, HiOutlineChevronRight } from "react-icons/hi2";

const Carrousel = () => {
  function moveImage(boolean) {
    const carrusel = document.getElementById("carrousel-wrapper");
    const images = carrusel.querySelectorAll("img");
    const buttons = document.querySelectorAll(".carrousel-btn");
    carrusel.style.transition = `all 0.3s`;
    carrusel.style.transform = `translateX(${boolean ? "-200%" : 0})`;
    buttons[0].disabled = true;
    buttons[1].disabled = true;

    setTimeout(() => {
      carrusel.style.transition = ``;
      carrusel.style.transform = `translateX(-100%)`;
      boolean
        ? carrusel.insertAdjacentElement("beforeend", images[0])
        : carrusel.insertAdjacentElement(
            "afterbegin",
            images[images.length - 1]
          );
      buttons[0].disabled = false;
      buttons[1].disabled = false;
    }, 300);
  }
  return (
    <div id="carrousel_container">
      <div id="carrousel-wrapper">
        {carrouselImages.map((image, index) => {
          return <img src={image} alt="" key={`Image ${index}`} />;
        })}
      </div>
      <button
        id="btn-izq"
        className="carrousel-btn"
        onClick={() => moveImage(false)}
      >
        <HiOutlineChevronLeft />
      </button>
      <button
        id="btn-der"
        className="carrousel-btn"
        onClick={() => moveImage(true)}
      >
        <HiOutlineChevronRight />
      </button>
    </div>
  );
};

export default Carrousel;
