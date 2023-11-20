import React from "react";
import samba from "../assets/img/bgoriginals/samba.png";
import superstar from "../assets/img/bgoriginals/superstar.png";
import gazelle from "../assets/img/bgoriginals/gazelle.png";

function Colection() {
  const items = [
    { name: "SAMBA", img: samba, url: "samba" },
    { name: "SUPERSTAR", img: superstar, url: "superstar" },
    { name: "GAZELLE", img: gazelle, url: "gazelle" },
  ];

  return (
    <section className="modelo_container">
      <h2>Adidas Originals</h2>
      <article>
        {items.map((item) => (
          <a href={`/catalogo/${item.url}`}>
            <div key={item.name} className="modelo_item">
              <div className="img_container">
                <img src={item.img} alt="" />
              </div>
              <p>{item.name}</p>
            </div>
          </a>
        ))}
      </article>
    </section>
  );
}

export default Colection;
