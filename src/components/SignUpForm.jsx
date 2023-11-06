import React, { useEffect, useState } from "react";
import { AiOutlineMail, AiOutlineUser } from "react-icons/ai";
import { BsKey } from "react-icons/bs";
import { NavLink } from "react-router-dom";

const SignUpForm = () => {
  const [userList, setUserList] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("users"));
    data && setUserList(data);
  }, []);

  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(userList));
  }, [userList]);

  function verifyAccount(usuario) {
    const user = {
      username: usuario.nombreUsuario,
      email: usuario.email,
    };

    const verifyUser = userList.find((us) => us.username === user.username);
    const verifyEmail = userList.find((us) => us.email === user.email);

    !!verifyUser && window.alert("Ese usuario ya existe");
    !!verifyEmail && window.alert("Ese correo ya está en uso");

    return !verifyUser && !verifyEmail;
  }

  function createAccount(usuario) {
    const user = {
      username: usuario.nombreUsuario,
      email: usuario.email,
      password: usuario.password,
      gender: "",
      telephone: "",
      promotions: false,
    };
    setUserList([...userList, user]);
    localStorage.setItem("account", JSON.stringify(user));
  }

  function handleSumbit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const form = Object.fromEntries(formData.entries());

    if (form.password === form.confirmPassword) {
      if (verifyAccount(form)) {
        createAccount(form);
        window.alert("Bienvenido " + form.nombreUsuario);
        window.location.href = "/cuenta";
      }
    } else {
      window.alert("Asegurate que las contraseñas son iguales");
    }
  }
  return (
    <form className="signUpForm" onSubmit={handleSumbit}>
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
            required
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
            required
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
            required
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
            required
          />
        </div>
        <div className="aceptarTerminos">
          <input
            type="checkbox"
            name="aceptarTerminos"
            id="aceptarTerminos"
            required
          />
          <label htmlFor="aceptarTerminos">
            Acepto todos <span>Términos y Condiciones</span>
          </label>
        </div>
      </div>
      <button type="submit">Regístrate</button>
      <p>
        ¿Ya tienes cuenta? <NavLink to={"/login"}>Iniciar sesión</NavLink>
      </p>
    </form>
  );
};

export default SignUpForm;
