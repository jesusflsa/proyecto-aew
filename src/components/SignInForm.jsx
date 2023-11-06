import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BsKey } from "react-icons/bs";

const SignInForm = () => {
  return (
    <form className="signInForm">
      <h3>Iniciar sesión</h3>
      <div className="form_data">
        <div className="email">
          <label htmlFor="email">
            <AiOutlineMail />
          </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Correo Electrónico"
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
      </div>
      <button type="submit">Iniciar sesión</button>
      <p>
        ¿No tienes cuenta? <span>Regístrate</span>
      </p>
    </form>
  );
};

export default SignInForm;
