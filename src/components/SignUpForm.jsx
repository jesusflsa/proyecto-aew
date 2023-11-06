import React from "react";
import { AiOutlineMail, AiOutlineUser } from "react-icons/ai";
import { BsKey } from "react-icons/bs";
const SignUpForm = () => {
  return (
    <form className="signUpForm">
      <h3>Regístrate</h3>
      <div className="form_data">
        <div className="nombreUsuario">
          <label htmlFor="nombreUsuario">
            <AiOutlineUser />
          </label>
          <input
            type="text"
            name="nombreUsuario"
            id="nombreUsuario"
            placeholder="Nombre de usuario"
          />
        </div>
        <div className="email">
          <label htmlFor="email">
            <AiOutlineMail />
          </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Correo electrónico"
          />
        </div>
        <div className="password">
          <label htmlFor="password">
            <BsKey />
          </label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Contraseña"
          />
        </div>
        <div className="confirmPassword">
          <label htmlFor="confirmPassword">
            <BsKey />
          </label>
          <input
            type="password"
            name="confirmPassword"
            id="confirmPassword"
            placeholder="Confirma tu contraseña"
          />
        </div>
        <div className="aceptarTerminos">
          <input type="checkbox" name="aceptarTerminos" id="aceptarTerminos" />
          <label htmlFor="aceptarTerminos">
            Acepto todos <span>Términos y Condiciones</span>
          </label>
        </div>
      </div>
      <button type="submit">Regístrate</button>
      <p>
        ¿Ya tienes cuenta? <span>Iniciar sesión</span>
      </p>
    </form>
  );
};

export default SignUpForm;
