import React, { useState } from "react";

import SignInForm from "../components/SignInForm";
import SignUpForm from "../components/SignUpForm";

import '../css/registrarse.css'

const Registro = () => {
  const [handleForm, setHandleForm] = useState(false);
  return <>{handleForm ? <SignUpForm /> : <SignInForm />}</>;
};

export default Registro;
