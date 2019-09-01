import React, { useState } from "react";
import logo from "../assets/img/security.svg";
import "./Login.css";
import api from "../services/api";

export default function Login({ history }) {
  const [userName, setUsername] = useState("");

  async function handleSubmit(e) {
    e.preventDefault(); //Previne redirecionamento para outra pagina

    const response = await api.post("/devs", {
      userName
    });

    console.log(response);

    history.push("/main");
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
