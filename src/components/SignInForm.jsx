import React, { useEffect, useState } from "react";
import { AiOutlineUser } from "react-icons/ai";
import { BsKey } from "react-icons/bs";
import { NavLink } from "react-router-dom";
const SignInForm = () => {
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
      password: usuario.password,
    };
    const verifyUser = userList.find((us) => us.username === user.username);
    const verifyPassword = verifyUser?.password === user.password || false;

    if (!!verifyUser) {
      if (!!verifyPassword) {
        return verifyUser;
      } else {
        window.alert("La contraseña es incorrecta");
      }
    } else {
      window.alert("Este usuario no existe");
    }
    return false;
  }

  function iniciarSesion(user) {
    localStorage.setItem("account", JSON.stringify(user));
  }

  function handleSumbit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const fJson = Object.fromEntries(formData.entries());
    const verifiedUser = verifyAccount(fJson);
    if (!!verifiedUser) {
      window.alert("Bienvenido de nuevo " + fJson.nombreUsuario);
      iniciarSesion(verifiedUser);
      window.location.href = "/cuenta";
    }
  }
  return (
    <form className="signInForm" onSubmit={handleSumbit}>
      <h3>Iniciar sesión</h3>
      <div className="form_data">
        <div className="nombreUsuario">
          <label htmlFor="nombreUsuario">
            <AiOutlineUser />
          </label>
          <input
            type="nombreUsuario"
            name="nombreUsuario"
            id="nombreUsuario"
            placeholder="Nombre de usuario"
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
      </div>
      <button type="submit">Iniciar sesión</button>
      <p>
        ¿No tienes cuenta? <NavLink to={"/registrate"}>Regístrate</NavLink>
      </p>
    </form>
  );
};

export default SignInForm;
