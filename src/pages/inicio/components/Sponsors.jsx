import React from "react";
import { sponsors } from "../../../assets/img/Images";
import "./sponsors.css";
function Sponsors() {
  const sponsorsUrl = [
    { name: "Adidas", url: "https://www.adidas.pe/", image: sponsors.adidas },
    { name: "Umbro", url: "https://www.umbro.com/es/", image: sponsors.umbro },
    { name: "Nike", url: "https://www.nike.com.pe/", image: sponsors.nike },
    { name: "Puma", url: "https://eu.puma.com/", image: sponsors.puma },
    { name: "Lotto", url: "https://lottosport.com.mx/", image: sponsors.lotto },
  ];
  window.addEventListener("scroll", () => {
    const marcas = document.getElementById("sponsors_wrapper");
    let tamaño = window.innerHeight;
    let positionMarcas = marcas.getBoundingClientRect().top;

    if (!marcas.style.animationName && positionMarcas + 150 < tamaño) {
      marcas.style.animationName = "alineacionSponsor";
    }
  });
  return (
    <section id="sponsors_container">
      <h2>Productos de distintas marcas</h2>
      <div id="sponsors_wrapper">
        {sponsorsUrl.map((sponsor) => (
          <a href={sponsor.url} key={sponsor.name}>
            <img src={sponsor.image} alt={sponsor.name} />
          </a>
        ))}
      </div>
    </section>
  );
}

export default Sponsors;
