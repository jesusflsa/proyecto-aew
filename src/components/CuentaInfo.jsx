import { useEffect, useState } from "react";
import { genders } from "../assets/img/Images";

function UserInfo() {
  const [editAccount, setEditAccount] = useState(false);
  const [account, setAccount] = useState(
    JSON.parse(localStorage.getItem("account"))
  );
  const [selectGender, setSelectGender] = useState(
    account ? account.gender : ""
  );

  useEffect(() => handleInput(), [editAccount]);
  function handleInput() {
    const username = document.getElementById("username");
    const email = document.getElementById("email");
    const password = document.getElementById("password");
    const gender = document.getElementById("gender");
    const telephone = document.getElementById("telephone");
    const promotions = document.getElementById("promotions");

    username.disabled = !editAccount;
    email.disabled = !editAccount;
    password.disabled = !editAccount;
    gender.disabled = !editAccount;
    telephone.disabled = !editAccount;
    promotions.disabled = !editAccount;

    if (!!account) {
      username.value = account.username;
      email.value = account.email;
      password.value = "";
      setSelectGender(account.gender);
      telephone.value = account.telephone;
      promotions.checked = account.promotions;
    } else {
      username.value = "";
      email.value = "";
      password.value = "";
      setSelectGender("");
      telephone.value = "";
      promotions.checked = false;
    }

    gender.value = selectGender;
    editAccount && username.focus();
  }

  function updateInfo() {
    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const gender = document.getElementById("gender").value;
    const telephone = document.getElementById("telephone").value;
    const promotions = document.getElementById("promotions").checked;

    const user = {
      username: username,
      email: email,
      password: password,
      gender: gender,
      telephone: telephone,
      promotions: promotions,
    };
    if (username.value === "" || email.value === "" || password.value === "") {
      localStorage.setItem("account", JSON.stringify(user));
      setAccount(user);
    }
  }
  return (
    <article className="account_container">
      <div className="account_info">
        <div className="account_photo">
          <img
            src={selectGender === "female" ? genders.female : genders.male}
            alt="Profile photo"
          />
          <h3 className="username_text">{account && account.username}</h3>
        </div>
        <fieldset className="account_data">
          <div className="username">
            <label htmlFor="username">Nombre de usuario:</label>
            <input type="text" name="username" id="username" />
          </div>
          <div className="email">
            <label htmlFor="email">Correo electrónico:</label>
            <input type="email" name="email" id="email" />
          </div>
          <div className="password">
            <label htmlFor="password">Contraseña:</label>
            <input type="password" name="password" id="password" />
          </div>
          <div className="gender">
            <label htmlFor="gender">Sexo:</label>
            <select name="gender" id="gender">
              <option value=""></option>
              <option value="male">Masculino</option>
              <option value="female">Femenino</option>
            </select>
          </div>
          <div className="telephone">
            <label htmlFor="telephone">Teléfono:</label>
            <input type="tel" id="telephone" />
          </div>
          <div className="promotions">
            <input type="checkbox" name="promotions" id="promotions" />
            <p>Deseo recibir promociones y descuentos al correo electrónico.</p>
          </div>
        </fieldset>
      </div>
      <div className="account_btn">
        {editAccount ? (
          <>
            <button
              onClick={() => {
                setEditAccount(false);
              }}
            >
              Cancelar
            </button>
            <button
              onClick={() => {
                account ? updateInfo() : alert("Debes registrarte primero");
                setEditAccount(false);
              }}
            >
              Guardar cambios
            </button>
          </>
        ) : (
          <button onClick={() => setEditAccount(true)}>
            Editar información
          </button>
        )}
      </div>
    </article>
  );
}

export default UserInfo;
