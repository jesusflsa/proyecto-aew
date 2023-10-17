import React from "react";
import { contacto } from "../../assets/img/Images";
const { at, phone, whatsapp, user, quote } = contacto;
import "./soporte.css";
import faq from "./faq.json";

const Soporte = () => {
  const contact = [
    {
      icon: at,
      title: "Email",
      value: "contacto@golazostore.com",
      href: "mailto:contacto@golazostore.com",
    },
    {
      icon: phone,
      title: "Telefono",
      value: "(01) 6547890",
      href: "tel:016547890",
    },
    {
      icon: whatsapp,
      title: "WhatsApp",
      value: "+51 987654321",
      href: "https://wa.me/51987654321",
    },
  ];
  return (
    <>
      <section id="message_container">
        <div className="mensaje_izq">
          <h2>Área de Soporte</h2>
          <p>
            En Golazo buscamos que nuestros clientes estén satisfechos, por eso,
            este área de soporte te brindará la información que necesitas
          </p>
        </div>
        <div className="mensaje_der">
          <article className="ceo_message_container">
            <img src={quote} className="message_quote" />
            <div className="author">
              <img src={user} alt="" />
              <div className="author_name">
                <p>Jesús Flores</p>
                <p>CEO, Golazo</p>
              </div>
            </div>
            <p className="ceo_message">
              El bienestar de nuestro clientes es una de las principales
              preocupaciones de nuestra empresa. Queremos asegurarnos de que se
              sientan seguros y satisfechos con nuestros productos y servicios.
              Siempre trabajamos para mejorar su experiencia con nosotros y para
              asegurarnos de que nuestras prácticas sean sostenibles y
              respetuosas con el medio ambiente.
            </p>
          </article>
        </div>
      </section>

      <section id="contenedor_faq">
        <h3 className="support_h3">Preguntas Frecuentes</h3>
        <ul>
          {faq.map((item, index) => {
            return (
              <li className="faq_item" key={index}>
                <p className="faq_question">{item.question}</p>
                <p className="faq_answer">{item.answer}</p>
              </li>
            );
          })}
        </ul>
      </section>

      <section id="contenedor_contacto">
        <h3 className="support_h3">Contacto</h3>
        <article className="contact_items">
          {contact.map((item, index) => {
            return (
              <div key={index}>
                <img src={item.icon} alt={item.title} />
                <h4>{item.title}</h4>
                <a href={item.href} target="_blank" rel="noopener noreferrer">
                  {item.value}
                </a>
              </div>
            );
          })}
        </article>
      </section>
    </>
  );
};

export default Soporte;
