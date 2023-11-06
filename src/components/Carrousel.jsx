import { useEffect } from "react";
import { carrousel } from "../assets/img/Images";
import { HiOutlineChevronLeft, HiOutlineChevronRight } from "react-icons/hi2";

const Carrousel = () => {
  useEffect(() => {
    const carrusel = document.getElementById("carrousel-wrapper");
    const lastImg = carrusel.lastChild;
    carrusel.insertAdjacentElement("afterbegin", lastImg);
  }, []);
  
  const moveCarrouselLeft = () => {
    const carrusel = document.getElementById("carrousel-wrapper");
    const lastImg = carrusel.lastChild;
    const button = document.querySelector(".carrousel-btn-left");
    carrusel.style.animationName = "moveImageLeft";
    button.disabled = true;

    setTimeout(() => {
      carrusel.insertAdjacentElement("afterbegin", lastImg);
      carrusel.style.animationName = "";
      button.disabled = false;
    }, 300);
  };
  const moveCarrouselRight = () => {
    const carrusel = document.getElementById("carrousel-wrapper");
    const firstImg = carrusel.firstChild;
    const button = document.querySelector(".carrousel-btn-right");
    carrusel.style.animationName = "moveImageRight";
    button.disabled = true;

    setTimeout(() => {
      carrusel.insertAdjacentElement("beforeend", firstImg);
      carrusel.style.animationName = "";
      button.disabled = false;
    }, 300);
  };
  return (
    <section id="carrousel_container">
      <div id="carrousel-wrapper">
        {carrousel.map((image, index) => {
          return (
            <img src={image} alt={`Image ${index}`} key={`Image ${index}`} />
          );
        })}
      </div>
      <button
        className="carrousel-btn carrousel-btn-left"
        onClick={() => {
          moveCarrouselLeft();
        }}
      >
        <HiOutlineChevronLeft />
      </button>
      <button
        className="carrousel-btn carrousel-btn-right"
        onClick={() => {
          moveCarrouselRight();
        }}
      >
        <HiOutlineChevronRight />
      </button>
    </section>
  );
};

export default Carrousel;
