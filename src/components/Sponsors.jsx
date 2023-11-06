import React from "react";
import { sponsorsImg } from "../assets/img/Images";
import "../css/sponsors.css";
function Sponsors() {
  const sponsors = [
    {
      name: "Adidas",
      url: "https://www.adidas.pe/",
      image: sponsorsImg.adidas,
    },
    {
      name: "Umbro",
      url: "https://www.umbro.com/es/",
      image: sponsorsImg.umbro,
    },
    { name: "Nike", url: "https://www.nike.com.pe/", image: sponsorsImg.nike },
    { name: "Puma", url: "https://eu.puma.com/", image: sponsorsImg.puma },
    {
      name: "Lotto",
      url: "https://lottosport.com.mx/",
      image: sponsorsImg.lotto,
    },
  ];
  window.addEventListener("scroll", () => {
    const marcas = document.getElementById("sponsors_wrapper");
    if (marcas) {
      let tamaño = window.innerHeight;
      let positionMarcas = marcas.getBoundingClientRect().top;

      if (!marcas.style.animationName && positionMarcas + 150 < tamaño) {
        marcas.style.animationName = "alineacionSponsor";
      }
    }
  });
  return (
    <section id="sponsors_container">
      <h2>Productos de distintas marcas</h2>
      <div id="sponsors_wrapper">
        {sponsors.map((sponsor) => (
          <a href={sponsor.url} key={sponsor.name}>
            <img src={sponsor.image} alt={sponsor.name} />
          </a>
        ))}
      </div>
    </section>
  );
}

export default Sponsors;
