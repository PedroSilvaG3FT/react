import React, { useState } from "react";
import logo from "../assets/img/security.svg";
import "./Login.css";

export default function Login() {
  const [userName, setUsername] = useState("");

  function handleSubmit(e) {
    e.preventDefault(); //Previne redirecionamento para outra pagina

    console.log(userName);
  }

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit}>
        <img src={logo} alt="Login" />
        <input
          placeholder="Digite seu usuário do GitHub "
          value={userName}
          onChange={e => setUsername(e.target.value)}
        />
        <button type="submit ">Enviar</button>
      </form>
    </div>
  );
}
